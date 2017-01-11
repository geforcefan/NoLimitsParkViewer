/// <reference path="ChunkStream.ts"/>
/// <reference path="Stream.ts"/>
/// <reference path="Reader.ts"/>
/// <reference path="../Chunks/Terrain/Terrain.ts"/>

namespace NLParkViewer.NoLimits.Stream
{
    export class Terrain extends ChunkStream<Chunks.Terrain.Terrain> {
        public read(reader: Reader) : void {
            // NOT IMPLEMENTED YET: figured out basic information about the terrain
            // but have no clue (so far) about the terrain data...
            // is it compressed data? is a hightmap image used?
            /*
            console.log("spos", reader.getStreamPosition());

            reader.readNull(8);

            // xsize (int) - 8
            // zsize (int) - 12

            // diffuse (string) - 80
            // bump (string)

            console.log("xsize", reader.readInt());
            console.log("zsize", reader.readInt());

            reader.readNull(64);


            // WATER

            console.log("diffuse", reader.readString());
            console.log("bump", reader.readString());

            reader.readNull(2);

            console.log("diffuse density", reader.readFloat());
            console.log("diffuse repeats", reader.readFloat());

            console.log("waves", reader.readFloat());
            console.log("reflection?", reader.readFloat());

            console.log("bumpmap normal map / highmap", reader.readByte());
            console.log("bumpmap highmap scale", reader.readFloat());

            console.log("bumpmap repeats", reader.readFloat());

            // Layers
            let numTextureRepeats = reader.readInt();
            console.log("num texuture repeats?", numTextureRepeats);
            for(let i = 0; i < numTextureRepeats; i++) {
                console.log("texture repeat", i, ": ", reader.readFloat());
            }

            reader.readNull(19);
            let numberOfLayers = reader.readInt();

            console.log("numberOfLayers", numberOfLayers);
            for(let i = 0; i < numberOfLayers; i++) {
                console.log("autopaint?", i, reader.readBoolean());
                console.log("name", i, reader.readString());
                console.log("basemap texture", i, reader.readString());
                console.log("detailmap texture", i, reader.readString());
                console.log("bumpmap texture", i, reader.readString());
                console.log("footstep sounds", i, reader.readString());
                console.log("autoplant object", i, reader.readString());

                console.log("basemap repeat index", i, reader.readInt());
                console.log("detailmap repeat index", i, reader.readInt());
                console.log("bumpmap repeat index", i, reader.readInt());


                console.log("autopaint min height", i, ": ", reader.readFloat());
                console.log("autopaint max height", i, ": ", reader.readFloat());

                console.log("autopaint unknown", i, ": ", reader.readFloat());

                console.log("autopaint min slope", i, ": ", reader.readFloat());
                console.log("autopaint max slope", i, ": ", reader.readFloat());


                console.log("automapnt unknown", i, reader.readInt());


                console.log("autopaint covarage", i, ": ", reader.readFloat());
                console.log("autopaint noise", i, ": ", reader.readFloat());
                console.log("autopaint noise detail", i, ": ", reader.readFloat());

                console.log("bumpmap normal map / highmap", i, reader.readByte());
                console.log("bumpmap highmap scale", i, reader.readFloat());

                console.log("bumpmap specular map", i, reader.readString());

                console.log("============================");
                reader.readNull(37);
            }

            console.log("spos", reader.getStreamPosition());*/
        }
    }
}