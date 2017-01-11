/// <reference path="ResourceFile.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Coaster {
    export class Script {
        private scriptClass : string = "";
        private classPath : string = "";
        private resourceFiles : Array<ResourceFile> = [];

        public getScriptClass(): string {
            return this.scriptClass;
        }

        public setScriptClass(value: string) {
            this.scriptClass = value;
        }

        public getClassPath(): string {
            return this.classPath;
        }

        public setClassPath(value: string) {
            this.classPath = value;
        }

        public getResourceFiles(): Array<ResourceFile> {
            return this.resourceFiles;
        }

        public setResourceFiles(value: Array<ResourceFile>) {
            this.resourceFiles = value;
        }

        public insertResourceFiles(value: ResourceFile) {
            this.resourceFiles.push(value);
        }
    }
}