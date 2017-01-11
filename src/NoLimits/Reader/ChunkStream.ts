/// <reference path="Stream.ts"/>
/// <reference path="Reader.ts"/>
/// <reference path="../../Event/EventDispatcher.ts"/>

namespace NLParkViewer.NoLimits.Stream
{
    export abstract class ChunkStream<T> {
        protected stream: BaseStream = null;
        protected data : T = null;

        protected chunkSize : number = 0;
        protected fileSize : number = 0;

        constructor(stream: BaseStream, data : T) {
            this.stream = stream;
            this.data = data;
        }

        public getChunkSize(): number {
            return this.chunkSize;
        }

        public setChunkSize(value: number) {
            this.chunkSize = value;
        }

        public readChunk() : void {
            let reader: Reader = <Reader>this.stream;
            this.fileSize = reader.getFilesize();
            this.chunkSize = reader.readInt();

            this.read(reader);
        }

        protected abstract read(reader : Reader) : void;
    }
}