/// <reference path="../../../ChunkStream.ts"/>
/// <reference path="../../../Stream.ts"/>
/// <reference path="../../../Reader.ts"/>
/// <reference path="../../../../Chunks/Coaster/Track/SpecialTrack/SpecialTrack.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Track.SpecialTrack {
    export class SpecialTrack extends ChunkStream<Chunks.Coaster.Coaster> {
        public read(reader: Reader) : void {
            let name : string = reader.readString();
            reader.readNull(4);

            let position : vec3 = reader.readDoubleVec3();
            let rotation : vec3 = reader.readDoubleVec3();

            let numberOfInputPoints : number = reader.readInt();
            let numberOfOutputPoints : number = reader.readInt();

            let inputs : Array<number> = [];
            let outputs : Array<number> = [];

            for(let i = 0; i < numberOfInputPoints; i++) {
                inputs.push(reader.readInt());
            }

            for(let i = 0; i < numberOfOutputPoints; i++) {
                outputs.push(reader.readInt());
            }

            let switchTime : number = reader.readFloat();

            reader.readNull(60);

            let specialTrack : Chunks.Coaster.Track.SpecialTrack.SpecialTrack = null;

            for (let i = 0; i <= reader.getFilesize(); i++) {
                reader.setStreamPosition(i);
                let chunk: string = reader.readChunkName();

                if (chunk == "SEGM" && specialTrack !== null) {
                    let segment : Chunks.Coaster.Track.Segment.Segment = new Chunks.Coaster.Track.Segment.Segment();
                    specialTrack.setSegment(segment);

                    (new Segment(reader.getChunkStreamReader(), segment)).readChunk();
                    i = reader.getStreamPosition();
                }

                if (chunk == "SECT" && specialTrack !== null) {
                    (new Section.Section(reader.getChunkStreamReader(), specialTrack)).readChunk();
                    i = reader.getStreamPosition();
                }

                if (chunk == "SWTR") {
                    let switchTrack : Chunks.Coaster.Track.SpecialTrack.SwitchTrack = new Chunks.Coaster.Track.SpecialTrack.SwitchTrack();
                    (new SwitchTrack(reader.getChunkStreamReader(), switchTrack)).readChunk();

                    specialTrack = switchTrack;
                    this.data.insertTrack(switchTrack);
                    i = reader.getStreamPosition();
                }

                if (chunk == "TRTB") {
                    let transferTable : Chunks.Coaster.Track.SpecialTrack.TransferTable = new Chunks.Coaster.Track.SpecialTrack.TransferTable();
                    (new TransferTable(reader.getChunkStreamReader(), transferTable)).readChunk();

                    specialTrack = transferTable;
                    this.data.insertTrack(transferTable);
                    i = reader.getStreamPosition();
                }
            }

            specialTrack.setName(name);
            specialTrack.setPosition(position);
            specialTrack.setRotation(rotation);
            specialTrack.setInputs(inputs);
            specialTrack.setOutputs(outputs);
            specialTrack.setSwitchTime(switchTime);
        }
    }
}