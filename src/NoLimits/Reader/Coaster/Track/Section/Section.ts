/// <reference path="../../../ChunkStream.ts"/>
/// <reference path="../../../Stream.ts"/>
/// <reference path="../../../Reader.ts"/>
/// <reference path="../../../../Chunks/Coaster/Track/Section/Section.ts"/>
/// <reference path="../../../../Chunks/Coaster/Track/Section/Brake.ts"/>
/// <reference path="../../../../Chunks/Coaster/Track/Section/Lift.ts"/>
/// <reference path="../../../../Chunks/Coaster/Track/Section/Station.ts"/>
/// <reference path="../../../../Chunks/Coaster/Track/Section/Storage.ts"/>
/// <reference path="../../../../Chunks/Coaster/Track/Section/Transport.ts"/>
/// <reference path="../../../../Chunks/Coaster/Track/ISectionSegment.ts"/>
/// <reference path="Brake.ts"/>
/// <reference path="Lift.ts"/>
/// <reference path="Station.ts"/>
/// <reference path="Storage.ts"/>
/// <reference path="Transport.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Track.Section
{
    export class Section extends ChunkStream<Chunks.Coaster.Track.ISectionSegment> {
        public read(reader: Reader) : void {
            reader.readNull(4);
            let name : string = reader.readString();
            reader.readNull(1);

            let sectionFound : boolean = false;

            for (let i = 0; i <= reader.getFilesize(); i++) {
                reader.setStreamPosition(i);
                let chunk: string = reader.readChunkName();

                if (chunk == "TRNS") {
                    let transport: Chunks.Coaster.Track.Section.Transport = new Chunks.Coaster.Track.Section.Transport();
                    transport.setName(name);
                    this.data.setSection(transport);

                    (new Transport(reader.getChunkStreamReader(), transport)).readChunk();

                    sectionFound = true;
                    i = reader.getStreamPosition();
                }

                if (chunk == "LIFT") {
                    let lift: Chunks.Coaster.Track.Section.Lift = new Chunks.Coaster.Track.Section.Lift();
                    lift.setName(name);
                    this.data.setSection(lift);

                    (new Lift(reader.getChunkStreamReader(), lift)).readChunk();

                    sectionFound = true;
                    i = reader.getStreamPosition();
                }

                if (chunk == "BRKE") {
                    let brake: Chunks.Coaster.Track.Section.Brake = new Chunks.Coaster.Track.Section.Brake();
                    brake.setName(name);
                    this.data.setSection(brake);

                    (new Brake(reader.getChunkStreamReader(), brake)).readChunk();

                    sectionFound = true;
                    i = reader.getStreamPosition();
                }

                if (chunk == "STTN") {
                    let station: Chunks.Coaster.Track.Section.Station = new Chunks.Coaster.Track.Section.Station();
                    station.setName(name);
                    this.data.setSection(station);

                    (new Station(reader.getChunkStreamReader(), station)).readChunk();

                    sectionFound = true;
                    i = reader.getStreamPosition();
                }

                if (chunk == "STOR") {
                    let storage: Chunks.Coaster.Track.Section.Storage = new Chunks.Coaster.Track.Section.Storage();
                    storage.setName(name);
                    this.data.setSection(storage);

                    (new Storage(reader.getChunkStreamReader(), storage)).readChunk();

                    sectionFound = true;
                    i = reader.getStreamPosition();
                }
            }

            if (!sectionFound) {
                let section : Chunks.Coaster.Track.Section.Section = new Chunks.Coaster.Track.Section.Section();
                section.setName(name);
                this.data.setSection(section);
            }
        }
    }
}