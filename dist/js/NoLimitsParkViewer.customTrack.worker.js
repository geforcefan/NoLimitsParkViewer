importScripts("NoLimitsParkViewer.js", "gl-matrix-64.min.js");

self.addEventListener("message", function(e) {
    console.log("Worker received coaster data from main thread ( " + new Date().getMilliseconds() + "ms )");
    var startTime = new Date();

    NLParkViewer.Maths.MathUtils.init();

    var track = new NLParkViewer.NoLimits.Chunks.Coaster.Track.CustomTrack();

    var data = new Float64Array(e.data);

    var dataPos = 0;

    var numVertices = parseInt(data[0]);
    var numRollPoints = parseInt(data[1]);

    dataPos += 2;

    for(var i = 0; i < numVertices; i++) {
        var vertex = new NLParkViewer.NoLimits.Chunks.Coaster.Track.Vertex();
        vertex.position = vec4.fromValues(
            data[dataPos + ((i * 6) + 0)],
            data[dataPos + ((i * 6) + 1)],
            data[dataPos + ((i * 6) + 2)],
            data[dataPos + ((i * 6) + 3)]
        );
        vertex.locked = data[dataPos + ((i * 6) + 4)] > 0;
        vertex.strict = data[dataPos + ((i * 6) + 5)] > 0;

        track.insertVertex(vertex);
    }

    dataPos += numVertices * 6;

    for(var i = 0; i < numRollPoints; i++) {
        var rollPoint = new NLParkViewer.NoLimits.Chunks.Coaster.Track.RollPoint();
        rollPoint.setPosition(data[dataPos + ((i * 4) + 0)]);
        rollPoint.setRoll(data[dataPos + ((i * 4) + 1)]);
        rollPoint.setVertical(data[dataPos + ((i * 4) + 2)] > 0);
        rollPoint.setStrict(data[dataPos + ((i * 4) + 3)] > 0);

        track.insertRollPoint(rollPoint);
    }

    dataPos += numRollPoints * 4;

    var firstRollPoint = new NLParkViewer.NoLimits.Chunks.Coaster.Track.RollPoint();
    var lastRollPoint = new NLParkViewer.NoLimits.Chunks.Coaster.Track.RollPoint();

    firstRollPoint.setPosition(data[dataPos + 0]);
    firstRollPoint.setRoll(data[dataPos + 1]);
    firstRollPoint.setVertical(data[dataPos + 2] > 0);
    firstRollPoint.setStrict(data[dataPos + 3] > 0);

    dataPos += 4;

    lastRollPoint.setPosition(data[dataPos + 0]);
    lastRollPoint.setRoll(data[dataPos + 1]);
    lastRollPoint.setVertical(data[dataPos + 2] > 0);
    lastRollPoint.setStrict(data[dataPos + 3] > 0);

    var index = data[dataPos + 4];

    track.setFirstRollPoint(firstRollPoint);
    track.setLastRollPoint(lastRollPoint);

    console.log("Worker parsed buffer data ( "+ ((new Date()) - startTime) +" ms )");

    startTime = new Date();

    var trackDocument = new NLParkViewer.NoLimits.Document.CustomTrackDocument(track);

    console.log("Worker interpolated coaster ( "+ ((new Date()) - startTime) +" ms )");

    startTime = new Date();

    var dataArray = new Float64Array(2 + (trackDocument.nodes.length * 25) + 1 + (trackDocument.segmentLengths.length) + 1);

    dataPos = 0;

    dataArray[dataPos + 0] = trackDocument.totalLength;
    dataArray[dataPos + 1] = trackDocument.nodes.length;

    dataPos += 2;

    for(var i = 0; i < trackDocument.nodes.length; i++) {
        dataArray[dataPos + ((i * 25) + 0)] = trackDocument.nodes[i].pos[0];
        dataArray[dataPos + ((i * 25) + 1)] = trackDocument.nodes[i].pos[1];
        dataArray[dataPos + ((i * 25) + 2)] = trackDocument.nodes[i].pos[2];

        dataArray[dataPos + ((i * 25) + 3)] = trackDocument.nodes[i].angle[0];
        dataArray[dataPos + ((i * 25) + 4)] = trackDocument.nodes[i].angle[1];
        dataArray[dataPos + ((i * 25) + 5)] = trackDocument.nodes[i].angle[2];

        dataArray[dataPos + ((i * 25) + 6)] = trackDocument.nodes[i].mat[0];
        dataArray[dataPos + ((i * 25) + 7)] = trackDocument.nodes[i].mat[1];
        dataArray[dataPos + ((i * 25) + 8)] = trackDocument.nodes[i].mat[2];
        dataArray[dataPos + ((i * 25) + 9)] = trackDocument.nodes[i].mat[3];

        dataArray[dataPos + ((i * 25) + 10)] = trackDocument.nodes[i].mat[4];
        dataArray[dataPos + ((i * 25) + 11)] = trackDocument.nodes[i].mat[5];
        dataArray[dataPos + ((i * 25) + 12)] = trackDocument.nodes[i].mat[6];
        dataArray[dataPos + ((i * 25) + 13)] = trackDocument.nodes[i].mat[7];

        dataArray[dataPos + ((i * 25) + 14)] = trackDocument.nodes[i].mat[8];
        dataArray[dataPos + ((i * 25) + 15)] = trackDocument.nodes[i].mat[9];
        dataArray[dataPos + ((i * 25) + 16)] = trackDocument.nodes[i].mat[10];
        dataArray[dataPos + ((i * 25) + 17)] = trackDocument.nodes[i].mat[11];

        dataArray[dataPos + ((i * 25) + 18)] = trackDocument.nodes[i].mat[12];
        dataArray[dataPos + ((i * 25) + 19)] = trackDocument.nodes[i].mat[13];
        dataArray[dataPos + ((i * 25) + 20)] = trackDocument.nodes[i].mat[14];
        dataArray[dataPos + ((i * 25) + 21)] = trackDocument.nodes[i].mat[15];

        dataArray[dataPos + ((i * 25) + 22)] = trackDocument.nodes[i].dist;
        dataArray[dataPos + ((i * 25) + 23)] = trackDocument.nodes[i].roll;
        dataArray[dataPos + ((i * 25) + 24)] = trackDocument.nodesLen[i];
    }

    dataPos += 25 * trackDocument.nodes.length;

    dataArray[dataPos] = trackDocument.segmentLengths.length;

    dataPos++;

    for(var i = 0; i < trackDocument.segmentLengths.length; i++) {
        dataArray[dataPos + i] = trackDocument.segmentLengths[i];
    }

    dataPos += trackDocument.segmentLengths.length;

    dataArray[dataPos] = index;

    console.log("Worker created buffer data for coaster ( "+ ((new Date()) - startTime) +" ms )");

    self.postMessage(dataArray.buffer, [dataArray.buffer]);
});