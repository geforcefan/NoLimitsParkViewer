/// <reference path="Stream.ts"/>

namespace NLParkViewer.NoLimits.Stream {
    export class Reader extends BaseStream {
        content: Uint8Array;
        streamPosition: number = 0;

        constructor(content: Uint8Array = null) {
            super();
            this.setType(BaseStream.TYPE_READ);

            if (content !== null) {
                this.content = content;
            }
        }

        public getContent(): Uint8Array {
            return this.content;
        }

        public setContent(content: Uint8Array): void {
            this.content = content;
        }

        public getFilesize(): number {
            return this.content.length;
        }

        public resetStream(): void {
            this.streamPosition = 0;
        }

        public getStreamPosition(): number {
            return this.streamPosition;
        }

        public setStreamPosition(streamPosition: number) {
            this.streamPosition = streamPosition;
        }

        public increaseStreamPosition(streamPosition: number): void {
            this.streamPosition += streamPosition;
        }

        public readChunkName(): string {
            let chunk: Uint8Array = this.content.slice(this.streamPosition, this.streamPosition + 4);
            this.increaseStreamPosition(4);

            return String.fromCharCode.apply(null, new Uint8Array(chunk));
        }

        public readInt(): number {
            let buff: Uint8Array = this.content.slice(this.streamPosition, this.streamPosition + 4);
            let dv: DataView = new DataView(new ArrayBuffer(4));
            dv.setUint8(0, buff[0]);
            dv.setUint8(1, buff[1]);
            dv.setUint8(2, buff[2]);
            dv.setUint8(3, buff[3]);

            this.increaseStreamPosition(4);

            return dv.getInt32(0);
        }

        public readFloat(): number {
            let buff: Uint8Array = this.content.slice(this.streamPosition, this.streamPosition + 4);
            let dv: DataView = new DataView(new ArrayBuffer(4));
            dv.setUint8(0, buff[0]);
            dv.setUint8(1, buff[1]);
            dv.setUint8(2, buff[2]);
            dv.setUint8(3, buff[3]);

            this.increaseStreamPosition(4);

            return dv.getFloat32(0);
        }

        public readDouble(): number {
            let buff: Uint8Array = this.content.slice(this.streamPosition, this.streamPosition + 8);
            let dv: DataView = new DataView(new ArrayBuffer(8));
            dv.setUint8(0, buff[0]);
            dv.setUint8(1, buff[1]);
            dv.setUint8(2, buff[2]);
            dv.setUint8(3, buff[3]);
            dv.setUint8(4, buff[4]);
            dv.setUint8(5, buff[5]);
            dv.setUint8(6, buff[6]);
            dv.setUint8(7, buff[7]);

            this.increaseStreamPosition(8);

            return dv.getFloat64(0);
        }

        public readColor(): vec3 {
            return this.readByteVec3();
        }

        public readByteVec3(): vec3 {
            return vec3.fromValues(this.readByte(), this.readByte(), this.readByte());
        }

        public readByteVec2(): vec2 {
            return vec2.fromValues(this.readByte(), this.readByte());
        }

        public readFloatVec2(): vec2 {
            return vec2.fromValues(this.readFloat(), this.readFloat());
        }

        public readFloatVec3(): vec3 {
            return vec3.fromValues(this.readFloat(), this.readFloat(), this.readFloat());
        }

        public readDoubleVec2(): vec2 {
            return vec2.fromValues(this.readDouble(), this.readDouble());
        }

        public readDoubleVec3(): vec3 {
            return vec3.fromValues(this.readDouble(), this.readDouble(), this.readDouble());
        }

        public readDoubleVec4(): vec4 {
            return vec4.fromValues(this.readDouble(), this.readDouble(), this.readDouble(), this.readDouble());
        }

        public readIntVec2(): vec2 {
            return vec2.fromValues(this.readInt(), this.readInt());
        }

        public readIntVec3(): vec3 {
            return vec3.fromValues(this.readInt(), this.readInt(), this.readInt());
        }

        public readByte(): number {
            let buff: Uint8Array = this.content.slice(this.streamPosition, this.streamPosition + 1);
            let dv: DataView = new DataView(new ArrayBuffer(81));
            dv.setUint8(0, buff[0]);

            this.increaseStreamPosition(1);
            return dv.getUint8(0);
        }

        public readBoolean(): boolean {
            return this.readByte() ? true : false;
        }

        public readNull(i: number): void {
            this.increaseStreamPosition(i);
        }

        public readString(): string {
            let terminated: boolean = false;
            let str: string = "";

            while (!terminated) {
                let buff: Uint8Array = this.content.slice(this.streamPosition + 1, this.streamPosition + 2);
                let char: string = String.fromCharCode.apply(null, new Uint8Array(buff));

                this.increaseStreamPosition(2);

                if (buff[0] === 0) {
                    terminated = true;
                } else {
                    str += char;
                }
            }
            return str;
        }

        public getChunkStreamReader(): Reader {
            let size: number = this.readInt();

            let reader: Reader = new Reader();
            reader.setContent(this.content.slice(this.streamPosition - 4, this.streamPosition + size));

            this.increaseStreamPosition(size);

            return reader;
        }
    }
}