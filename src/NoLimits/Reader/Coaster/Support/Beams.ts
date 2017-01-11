/// <reference path="../../ChunkStream.ts"/>
/// <reference path="../../Stream.ts"/>
/// <reference path="../../Reader.ts"/>
/// <reference path="../../../Chunks/Coaster/Support/Support.ts"/>
/// <reference path="../../../Chunks/Coaster/Support/Footer.ts"/>
/// <reference path="../../../Chunks/Coaster/Support/Beam.ts"/>
/// <reference path="../../../Chunks/Coaster/Support/BeamNode.ts"/>
/// <reference path="../../../Chunks/Coaster/Support/BeamConnection.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Support
{
    import BeamConnection = NLParkViewer.NoLimits.Chunks.Coaster.Support.BeamConnection;
    import Beam = NLParkViewer.NoLimits.Chunks.Coaster.Support.Beam;
    import BeamNode = NLParkViewer.NoLimits.Chunks.Coaster.Support.BeamNode;

    export class Beams extends ChunkStream<Chunks.Coaster.Support.Support> {
        protected read(reader: Reader) : void {
            reader.readNull(8);

            let numberOfBeams : number = reader.readInt();

            for (let i = 0; i < numberOfBeams; i++) {
                let beam : Beam = new Beam();

                beam.setConnection1(this.readBeamConnection(reader));
                beam.setConnection2(this.readBeamConnection(reader));

                reader.readNull(3);

                beam.setBeamType(reader.readByte());

                reader.readNull(1);

                beam.setFlag1(reader.readByte());
                beam.setFlag2(reader.readByte());
                beam.setFlag3(reader.readByte());

                beam.setStartWidth(reader.readFloat());
                beam.setEndWidth(reader.readFloat());
                beam.setRotationAngle(reader.readFloat());
                beam.setColor(reader.readByteVec3());

                beam.setExtraLengthAtStart(reader.readFloat());
                beam.setExtraLengthAtEnd(reader.readFloat());
                beam.setNodeOffsetRelativeX(reader.readFloat());
                beam.setNodeOffsetAbsoluteYStart(reader.readFloat());
                beam.setNodeOffsetAbsoluteYEnd(reader.readFloat());

                reader.readNull(13);

                let numberOfBeamNodes : number = reader.readInt();

                for(let j = 0; j < numberOfBeamNodes; j++) {
                    let beamNode : BeamNode = new BeamNode();
                    beamNode.setPosition(reader.readFloat());
                    beamNode.setIsFlange(reader.readBoolean());

                    beam.insertBeamNodes(beamNode);

                    reader.readNull(11);
                }

                this.data.insertBeam(beam);
            }
        }

        private readBeamConnection(reader : Reader) : BeamConnection {
            let bc : BeamConnection = new BeamConnection();

            bc.setType(reader.readInt());
            bc.setIndex(reader.readInt());
            bc.setIndexOnBeam(reader.readInt());
            bc.setIndexOnRailConnector(reader.readInt());

            return bc;
        }
    }
}