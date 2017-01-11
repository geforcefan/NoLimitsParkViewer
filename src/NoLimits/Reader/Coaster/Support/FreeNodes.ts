/// <reference path="../../ChunkStream.ts"/>
/// <reference path="../../Stream.ts"/>
/// <reference path="../../Reader.ts"/>
/// <reference path="../../../Chunks/Coaster/Support/Support.ts"/>
/// <reference path="../../../Chunks/Coaster/Support/FreeNode.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Support
{
    export class FreeNodes extends ChunkStream<Chunks.Coaster.Support.Support> {
        protected read(reader: Reader) : void {
            reader.readNull(8);
            let numberOfFreeNodes : number = reader.readInt();

            for (let i = 0; i < numberOfFreeNodes; i++) {
                let freeNode : Chunks.Coaster.Support.FreeNode = new Chunks.Coaster.Support.FreeNode();
                freeNode.setPosition(reader.readDoubleVec3());

                this.data.insertFreeNode(freeNode);
                reader.readNull(4);
            }

        }
    }
}