/// <reference path="Colors.ts"/>
/// <reference path="Mode.ts"/>
/// <reference path="Style.ts"/>
/// <reference path="Script.ts"/>
/// <reference path="Support/Support.ts"/>
/// <reference path="Track/Track.ts"/>
/// <reference path="Track/CustomTrack.ts"/>
/// <reference path="Train/Train.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Coaster {
    import CustomTrack = NLParkViewer.NoLimits.Chunks.Coaster.Track.CustomTrack;
    import TrackType = NLParkViewer.NoLimits.Chunks.Coaster.Track.TrackType;

    export class Coaster {
        private name: string = "";
        private description: string = "";

        private numberOfCarsPerTrain: number = 0;

        private tracks: Array<Track.Track> = [];
        private supports: Support.Support = new Support.Support();
        private trains: Array<Train.Train> = [];
        private scripts: Array<Script> = [];
        private fileScripts: Array<string> = [];

        private style: Style = new Style();
        private colors: Colors = new Colors();
        private mode: Mode = new Mode();

        private hideWireframe: boolean = false;
        private freezed: boolean = false;

        public getName(): string {
            return this.name;
        }

        public setName(value: string) {
            this.name = value;
        }

        public getDescription(): string {
            return this.description;
        }

        public setDescription(value: string) {
            this.description = value;
        }

        public getTracks(): Array<Track.Track> {
            return this.tracks;
        }

        public setTracks(value: Array<Track.Track>) {
            this.tracks = value;
        }

        public insertTrack(value: Track.Track) {
            this.tracks.push(value);
        }

        public getSupports(): Support.Support {
            return this.supports;
        }

        public setSupports(value: Support.Support) {
            this.supports = value;
        }

        public getNumberOfCarsPerTrain(): number {
            return this.numberOfCarsPerTrain;
        }

        public setNumberOfCarsPerTrain(value: number) {
            this.numberOfCarsPerTrain = value;
        }

        public getTrains(): Array<Train.Train> {
            return this.trains;
        }

        public setTrains(value: Array<Train.Train>) {
            this.trains = value;
        }

        public insertTrain(value: Train.Train) {
            this.trains.push(value);
        }

        public getScripts(): Array<Script> {
            return this.scripts;
        }

        public setScripts(value: Array<Script>) {
            this.scripts = value;
        }

        public insertScript(value: Script) {
            this.scripts.push(value);
        }

        public getFileScripts(): Array<string> {
            return this.fileScripts;
        }

        public setFileScripts(value: Array<string>) {
            this.fileScripts = value;
        }

        public insertFileScripts(value: string) {
            this.fileScripts.push(value);
        }

        public getColors(): Colors {
            return this.colors;
        }

        public setColors(value: Colors) {
            this.colors = value;
        }

        public getMode(): Mode {
            return this.mode;
        }

        public setMode(value: Mode) {
            this.mode = value;
        }

        public getHideWireframe(): boolean {
            return this.hideWireframe;
        }

        public setHideWireframe(value: boolean) {
            this.hideWireframe = value;
        }

        public getFreezed(): boolean {
            return this.freezed;
        }

        public setFreezed(value: boolean) {
            this.freezed = value;
        }

        public getStyle(): Style {
            return this.style;
        }

        public setStyle(value: Style) {
            this.style = value;
        }

        public finalize() {
            for (let i = 0; i < this.trains.length; i++) {
                let train: Train.Train = this.trains[i];
                if (train.getCars().length && this.numberOfCarsPerTrain != train.getCars().length) {
                    train.getCars()[0].setIsZeroCar(true);
                }
            }

            for (let i = 0; i < this.tracks.length; i++) {
                if (this.tracks[i].getTrackType() == TrackType.Custom) {
                    let customTrack: CustomTrack = <CustomTrack>(this.tracks[i]);
                    for (let j = 0; j < customTrack.getRailNodes().length; j++) {
                        this.getSupports().insertRailNode(customTrack.getRailNodes()[j]);
                    }
                }
            }
        }
    }
}