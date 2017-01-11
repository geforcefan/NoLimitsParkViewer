/// <reference path="Section.ts"/>
/// <reference path="Transport.ts"/>
/// <reference path="TransportDevice.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Coaster.Track.Section {
    export enum StorageBuilding {
        None = 0,
        Simple = 1
    }

    export class Storage extends Section {
        private enableTransportDevice : boolean = false;
        private transportDevice : TransportDevice = new TransportDevice();

        private transportType : TransportType = TransportType.FrictionWheels;
        private building : StorageBuilding = StorageBuilding.Simple;

        private sideColor : vec3 = vec3.fromValues(0, 0, 0);
        private roofColor : vec3 = vec3.fromValues(0, 0, 0);
        private frameColor : vec3 = vec3.fromValues(0, 0, 0);

        constructor() {
            super();
            this.setSectionType(SectionType.Storage);
        }

        public getEnableTransportDevice(): boolean {
            return this.enableTransportDevice;
        }

        public setEnableTransportDevice(value: boolean) {
            this.enableTransportDevice = value;
        }

        public getTransportDevice(): TransportDevice {
            return this.transportDevice;
        }

        public setTransportDevice(value: TransportDevice) {
            this.transportDevice = value;
        }

        public getTransportType(): TransportType {
            return this.transportType;
        }

        public setTransportType(value: TransportType) {
            this.transportType = value;
        }

        public getBuilding(): StorageBuilding {
            return this.building;
        }

        public setBuilding(value: StorageBuilding) {
            this.building = value;
        }

        public getSideColor(): vec3 {
            return this.sideColor;
        }

        public setSideColor(value: vec3) {
            this.sideColor = value;
        }

        public getRoofColor(): vec3 {
            return this.roofColor;
        }

        public setRoofColor(value: vec3) {
            this.roofColor = value;
        }

        public getFrameColor(): vec3 {
            return this.frameColor;
        }

        public setFrameColor(value: vec3) {
            this.frameColor = value;
        }
    }
}