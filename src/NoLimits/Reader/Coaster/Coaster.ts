/// <reference path="../ChunkStream.ts"/>
/// <reference path="../Stream.ts"/>
/// <reference path="../Reader.ts"/>
/// <reference path="../../Chunks/Coaster/Coaster.ts"/>
/// <reference path="Support/Support.ts"/>
/// <reference path="Train/Train.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster
{
    export class Coaster extends ChunkStream<Chunks.Coaster.Coaster> {
        public read(reader: Reader) : void {
            this.data.setName(reader.readString());

            this.data.getColors().setWireframeTrack(reader.readColor());
            this.data.getMode().setSplinePosition(reader.readByte());

            this.data.getMode().setSplinePositionOffset(reader.readDoubleVec2());

            this.data.setDescription(reader.readString());

            reader.readNull(3);
            this.data.getStyle().setStyleType(reader.readByte());

            this.data.getColors().setRails(reader.readColor());
            this.data.getColors().setCrossTies(reader.readColor());
            this.data.getColors().setMainSpine(reader.readColor());
            this.data.getColors().setCar(reader.readColor());
            this.data.getColors().setSeat(reader.readColor());
            this.data.getColors().setHarness(reader.readColor());
            this.data.getColors().setBogie(reader.readColor());

            this.data.setFreezed(reader.readBoolean());
            this.data.getColors().setSpineColorScheme(reader.readByte());
            this.data.getColors().setSupports(reader.readColor());
            this.data.getColors().setTunnel(reader.readColor());

            this.data.getStyle().setWornType(reader.readByte());
            this.data.getColors().setChasiss(reader.readColor());

            this.data.getMode().setOperationMode(reader.readByte());
            this.data.getStyle().setRailType(reader.readByte());

            this.data.getColors().setHandrails(reader.readColor());
            this.data.getColors().setCatwalks(reader.readColor());

            this.data.getMode().setPhysicsModel(reader.readByte());
            this.data.setHideWireframe(reader.readBoolean());

            this.data.setNumberOfCarsPerTrain(reader.readByte());

            for (let i = 0; i <= reader.getFilesize(); i++) {
                reader.setStreamPosition(i);
                let chunk : string = reader.readChunkName();

                if(chunk == "SUPP") {
                    let support : Chunks.Coaster.Support.Support = new Chunks.Coaster.Support.Support();
                    this.data.setSupports(support);

                    (new Support.Support(reader.getChunkStreamReader(), support)).readChunk();
                    i = reader.getStreamPosition() - 1;
                }

                if(chunk == "TRAI") {
                    let train : Chunks.Coaster.Train.Train = new Chunks.Coaster.Train.Train();
                    this.data.insertTrain(train);

                    (new Train.Train(reader.getChunkStreamReader(), train)).readChunk();
                    i = reader.getStreamPosition() - 1;
                }

                if(chunk == "SCRT") {
                    let script : Chunks.Coaster.Script = new Chunks.Coaster.Script();
                    this.data.insertScript(script);

                    (new Script(reader.getChunkStreamReader(), script)).readChunk();
                    i = reader.getStreamPosition() - 1;
                }

                if(chunk == "CUTK") {
                    let track : Chunks.Coaster.Track.CustomTrack = new Chunks.Coaster.Track.CustomTrack();
                    this.data.insertTrack(track);

                    let trackReader : Track.CustomTrack = new Track.CustomTrack(reader.getChunkStreamReader(), track);
                    trackReader.trackIndex = this.data.getTracks().length - 1;
                    trackReader.readChunk();

                    i = reader.getStreamPosition() - 1;
                }

                if(chunk == "SPTK") {
                    (new Track.SpecialTrack.SpecialTrack(reader.getChunkStreamReader(), this.data)).readChunk();
                    i = reader.getStreamPosition() - 1;
                }

                if(chunk == "FSCR") {
                    let scriptStream : Reader = reader.getChunkStreamReader();
                    scriptStream.readNull(4);

                    let numScripts : number = scriptStream.readInt();

                    for(let k = 0; k < numScripts; k++) {
                        this.data.insertFileScripts(scriptStream.readString());
                        scriptStream.readNull(8);
                    }
                    i = reader.getStreamPosition() - 1;
                }

                if(chunk == "CUFR") {
                    let customFrictionReader : Reader = reader.getChunkStreamReader();
                    customFrictionReader.readNull(4);

                    this.data.getMode().getCustomFriction().setConstFrictionParameter(customFrictionReader.readDouble());
                    this.data.getMode().getCustomFriction().setAirResistanceParameter(customFrictionReader.readDouble());
                    i = reader.getStreamPosition() - 1;
                }
            }
            this.data.finalize();
        }
    }
}