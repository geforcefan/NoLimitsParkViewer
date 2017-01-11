/// <reference path="../../ChunkStream.ts"/>
/// <reference path="../../Stream.ts"/>
/// <reference path="../../Reader.ts"/>
/// <reference path="Section/Section.ts"/>
/// <reference path="Segment.ts"/>
/// <reference path="RollPoint.ts"/>
/// <reference path="Parameter4D.ts"/>
/// <reference path="Separator.ts"/>
/// <reference path="../Support/RailNode.ts"/>
/// <reference path="../../../Chunks/Coaster/Track/CustomTrack.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Track
{
    import RailNode = NLParkViewer.NoLimits.Stream.Coaster.Support.RailNode;

    export class CustomTrack extends ChunkStream<Chunks.Coaster.Track.CustomTrack> {
        private ignorePositions : Array<Array<number>> = [];
        public trackIndex = 0;

        public read(reader: Reader) : void {
            reader.readNull(1);

            this.data.getFirstRollPoint().setPosition(0.0);
            this.data.getFirstRollPoint().setRoll(reader.readDouble());
            this.data.getFirstRollPoint().setVertical(reader.readBoolean());
            this.data.getFirstRollPoint().setStrict(true);

            this.data.getLastRollPoint().setRoll(reader.readDouble());
            this.data.getLastRollPoint().setVertical(reader.readBoolean());
            this.data.getLastRollPoint().setStrict(true);

            reader.readNull(53);

            let numberOfControlPoints : number = reader.readInt();
            this.data.getLastRollPoint().setPosition(numberOfControlPoints - 1);

            for (let i = 0; i < numberOfControlPoints; i++) {
                let vertex : Chunks.Coaster.Track.Vertex = new Chunks.Coaster.Track.Vertex();

                vertex.setPosition(reader.readDoubleVec4());
                vertex.setLocked(reader.readBoolean());
                vertex.setStrict(reader.readBoolean());

                reader.readNull(22);
                this.data.insertVertex(vertex);
            }

            reader.readNull(60);

            for (let i = 0; i <= reader.getFilesize(); i++) {
                reader.setStreamPosition(i);
                let chunk : string = reader.readChunkName();

                if (chunk == "4DPM") {
                    let parameter4D : Chunks.Coaster.Track.Parameter4D = new Chunks.Coaster.Track.Parameter4D();
                    this.data.insertParameter4D(parameter4D);

                    (new Parameter4D(reader.getChunkStreamReader(), parameter4D)).readChunk();
                    i = reader.getStreamPosition() - 1;
                }

                if (chunk == "TTRG") {
                    let trigger : Chunks.Coaster.Track.Trigger = new Chunks.Coaster.Track.Trigger();
                    this.data.insertTrigger(trigger);

                    (new Trigger(reader.getChunkStreamReader(), trigger)).readChunk();
                    i = reader.getStreamPosition() - 1;
                }

                if (chunk == "ROLL") {
                    let rollPoint : Chunks.Coaster.Track.RollPoint = new Chunks.Coaster.Track.RollPoint();
                    this.data.insertRollPoint(rollPoint);

                    (new RollPoint(reader.getChunkStreamReader(), rollPoint)).readChunk();
                    i = reader.getStreamPosition() - 1;
                }

                if(chunk == "SRNP") {
                    let railNode : Chunks.Coaster.Support.RailNode = new Chunks.Coaster.Support.RailNode();
                    railNode.setTrackIndex(this.trackIndex);

                    this.data.insertRailNode(railNode);

                    (new RailNode(reader.getChunkStreamReader(), railNode)).readChunk();
                    i = reader.getStreamPosition() - 1;
                }

                if (chunk == "SEPA") {
                    let separator : Chunks.Coaster.Track.Separator = new Chunks.Coaster.Track.Separator();
                    this.data.insertSeparator(separator);

                    (new Separator(reader.getChunkStreamReader(), separator)).readChunk();
                    i = reader.getStreamPosition() - 1;
                }

                if(chunk == "SEGM") {
                    let segment : Chunks.Coaster.Track.Segment.Segment = new Chunks.Coaster.Track.Segment.Segment();
                    this.data.setSegment(segment);

                    (new Segment(reader.getChunkStreamReader(), segment)).readChunk();
                    i = reader.getStreamPosition() - 1;
                }

                if (chunk == "SECT") {
                    (new Section.Section(reader.getChunkStreamReader(), this.data)).readChunk();
                    i = reader.getStreamPosition() - 1;
                }
            }
        }
    }
}