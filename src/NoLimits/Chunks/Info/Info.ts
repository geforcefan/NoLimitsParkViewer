/// <reference path="Sky.ts"/>
/// <reference path="Weather.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Info {
    export enum InfoRideView {
        ClosestCoasterFirstTrain = 0,
        ClosestCoasterClosestTrain = 1,
        FlyView = 2,
        WalkView = 3
    }

    export class Info {
        private author : string = null;
        private description : string = null;
        private preview : string = null;
        private environment : string = null;

        private initialPosition : vec3 = null;
        private initialRotation : vec2 = null;
        private initialView : InfoRideView = InfoRideView.ClosestCoasterFirstTrain;

        private weather : Weather = null;
        private sky : Sky = null;

        constructor() {
            this.sky = new Sky();
            this.weather = new Weather();
        }

        getAuthor(): string {
            return this.author;
        }

        setAuthor(value: string) {
            this.author = value;
        }

        getDescription(): string {
            return this.description;
        }

        setDescription(value: string) {
            this.description = value;
        }

        getPreview(): string {
            return this.preview;
        }

        setPreview(value: string) {
            this.preview = value;
        }

        getEnvironment(): string {
            return this.environment;
        }

        setEnvironment(value: string) {
            this.environment = value;
        }
        getInitialPosition(): vec3 {
            return this.initialPosition;
        }

        setInitialPosition(value: vec3) {
            this.initialPosition = value;
        }

        getInitialRotation(): vec2 {
            return this.initialRotation;
        }

        setInitialRotation(value: vec2) {
            this.initialRotation = value;
        }

        getInitialView(): InfoRideView {
            return this.initialView;
        }

        setInitialView(value: InfoRideView) {
            this.initialView = value;
        }
        getWeather(): Weather {
            return this.weather;
        }

        setWeather(value: Weather) {
            this.weather = value;
        }

        getSky(): Sky {
            return this.sky;
        }

        setSky(value: Sky) {
            this.sky = value;
        }
    }
}