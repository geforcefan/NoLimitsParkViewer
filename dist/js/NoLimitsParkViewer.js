var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NLParkViewer;
(function (NLParkViewer) {
    var Event = (function () {
        function Event(type, targetObj) {
            this.type = type;
            this.target = targetObj;
        }
        Event.prototype.getTarget = function () {
            return this.target;
        };
        Event.prototype.getType = function () {
            return this.type;
        };
        return Event;
    }());
    NLParkViewer.Event = Event;
    var EventDispatcher = (function () {
        function EventDispatcher() {
            this.listeners = [];
        }
        EventDispatcher.prototype.hasEventListener = function (type, listener) {
            var has = false;
            for (var i = 0; i < this.listeners.length; i++) {
                if (this.listeners[i].type === type && this.listeners[i].listener === listener) {
                    has = true;
                }
            }
            return has;
        };
        EventDispatcher.prototype.addEventListener = function (typeStr, listenerFunc) {
            if (this.hasEventListener(typeStr, listenerFunc))
                return;
            this.listeners.push({ type: typeStr, listener: listenerFunc });
        };
        EventDispatcher.prototype.removeEventListener = function (typeStr, listenerFunc) {
            for (var i = 0; i < this.listeners.length; i++) {
                if (this.listeners[i].listener === listenerFunc && this.listeners[i].type === typeStr)
                    this.listeners.splice(i, 1);
            }
        };
        EventDispatcher.prototype.dispatchEvent = function (evt) {
            for (var i = 0; i < this.listeners.length; i++) {
                if (this.listeners[i].type === evt.getType())
                    this.listeners[i].listener.call(this, evt);
            }
        };
        return EventDispatcher;
    }());
    NLParkViewer.EventDispatcher = EventDispatcher;
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Info;
            (function (Info) {
                var Sky = (function () {
                    function Sky() {
                        this.overrideDefaultDateTime = false;
                        this.currentDate = null;
                        this.currentTime = null;
                    }
                    Sky.prototype.getOverrideDefaultDateTime = function () {
                        return this.overrideDefaultDateTime;
                    };
                    Sky.prototype.setOverrideDefaultDateTime = function (value) {
                        this.overrideDefaultDateTime = value;
                    };
                    Sky.prototype.getCurrentDate = function () {
                        return this.currentDate;
                    };
                    Sky.prototype.setCurrentDate = function (value) {
                        this.currentDate = value;
                    };
                    Sky.prototype.getCurrentTime = function () {
                        return this.currentTime;
                    };
                    Sky.prototype.setCurrentTime = function (value) {
                        this.currentTime = value;
                    };
                    return Sky;
                }());
                Info.Sky = Sky;
            })(Info = Chunks.Info || (Chunks.Info = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Info;
            (function (Info) {
                var Weather = (function () {
                    function Weather() {
                        this.rainIntensity = 1;
                        this.snowIntensity = 1;
                        this.fogIntensity = 1;
                        this.windIntensity = 1;
                        this.overcastIntensity = 1;
                        this.cloudsIntensity = 1;
                        this.thunderIntensity = 1;
                        this.overwriteDefaultWeather = false;
                    }
                    Weather.convertWindIntensity = function (value, fromWindIntensity) {
                        if (fromWindIntensity === void 0) { fromWindIntensity = true; }
                        if (fromWindIntensity) {
                            return (1 * value) / 34.75186920166;
                        }
                        else {
                            return (34.75186920166 * value) / 1;
                        }
                    };
                    Weather.convertFogIntensity = function (value, fromFogIntensity) {
                        if (fromFogIntensity === void 0) { fromFogIntensity = true; }
                        if (fromFogIntensity) {
                            return (1.0 * value) / 0.05;
                        }
                        else {
                            return (0.050000000745058 * value) / 1;
                        }
                    };
                    Weather.prototype.getRainIntensity = function () {
                        return this.rainIntensity;
                    };
                    Weather.prototype.setRainIntensity = function (value) {
                        this.rainIntensity = value;
                    };
                    Weather.prototype.getSnowIntensity = function () {
                        return this.snowIntensity;
                    };
                    Weather.prototype.setSnowIntensity = function (value) {
                        this.snowIntensity = value;
                    };
                    Weather.prototype.getFogIntensity = function () {
                        return this.fogIntensity;
                    };
                    Weather.prototype.setFogIntensity = function (value) {
                        this.fogIntensity = value;
                    };
                    Weather.prototype.getWindIntensity = function () {
                        return this.windIntensity;
                    };
                    Weather.prototype.setWindIntensity = function (value) {
                        this.windIntensity = value;
                    };
                    Weather.prototype.getOvercastIntensity = function () {
                        return this.overcastIntensity;
                    };
                    Weather.prototype.setOvercastIntensity = function (value) {
                        this.overcastIntensity = value;
                    };
                    Weather.prototype.getCloudsIntensity = function () {
                        return this.cloudsIntensity;
                    };
                    Weather.prototype.setCloudsIntensity = function (value) {
                        this.cloudsIntensity = value;
                    };
                    Weather.prototype.getThunderIntensity = function () {
                        return this.thunderIntensity;
                    };
                    Weather.prototype.setThunderIntensity = function (value) {
                        this.thunderIntensity = value;
                    };
                    Weather.prototype.getOverwriteDefaultWeather = function () {
                        return this.overwriteDefaultWeather;
                    };
                    Weather.prototype.setOverwriteDefaultWeather = function (value) {
                        this.overwriteDefaultWeather = value;
                    };
                    return Weather;
                }());
                Info.Weather = Weather;
            })(Info = Chunks.Info || (Chunks.Info = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Info;
            (function (Info_1) {
                (function (InfoRideView) {
                    InfoRideView[InfoRideView["ClosestCoasterFirstTrain"] = 0] = "ClosestCoasterFirstTrain";
                    InfoRideView[InfoRideView["ClosestCoasterClosestTrain"] = 1] = "ClosestCoasterClosestTrain";
                    InfoRideView[InfoRideView["FlyView"] = 2] = "FlyView";
                    InfoRideView[InfoRideView["WalkView"] = 3] = "WalkView";
                })(Info_1.InfoRideView || (Info_1.InfoRideView = {}));
                var InfoRideView = Info_1.InfoRideView;
                var Info = (function () {
                    function Info() {
                        this.author = null;
                        this.description = null;
                        this.preview = null;
                        this.environment = null;
                        this.initialPosition = null;
                        this.initialRotation = null;
                        this.initialView = InfoRideView.ClosestCoasterFirstTrain;
                        this.weather = null;
                        this.sky = null;
                        this.sky = new Info_1.Sky();
                        this.weather = new Info_1.Weather();
                    }
                    Info.prototype.getAuthor = function () {
                        return this.author;
                    };
                    Info.prototype.setAuthor = function (value) {
                        this.author = value;
                    };
                    Info.prototype.getDescription = function () {
                        return this.description;
                    };
                    Info.prototype.setDescription = function (value) {
                        this.description = value;
                    };
                    Info.prototype.getPreview = function () {
                        return this.preview;
                    };
                    Info.prototype.setPreview = function (value) {
                        this.preview = value;
                    };
                    Info.prototype.getEnvironment = function () {
                        return this.environment;
                    };
                    Info.prototype.setEnvironment = function (value) {
                        this.environment = value;
                    };
                    Info.prototype.getInitialPosition = function () {
                        return this.initialPosition;
                    };
                    Info.prototype.setInitialPosition = function (value) {
                        this.initialPosition = value;
                    };
                    Info.prototype.getInitialRotation = function () {
                        return this.initialRotation;
                    };
                    Info.prototype.setInitialRotation = function (value) {
                        this.initialRotation = value;
                    };
                    Info.prototype.getInitialView = function () {
                        return this.initialView;
                    };
                    Info.prototype.setInitialView = function (value) {
                        this.initialView = value;
                    };
                    Info.prototype.getWeather = function () {
                        return this.weather;
                    };
                    Info.prototype.setWeather = function (value) {
                        this.weather = value;
                    };
                    Info.prototype.getSky = function () {
                        return this.sky;
                    };
                    Info.prototype.setSky = function (value) {
                        this.sky = value;
                    };
                    return Info;
                }());
                Info_1.Info = Info;
            })(Info = Chunks.Info || (Chunks.Info = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Park = (function () {
                function Park() {
                    this.info = null;
                    this.coasters = [];
                    this.info = new Chunks.Info.Info();
                }
                Park.prototype.getInfo = function () {
                    return this.info;
                };
                Park.prototype.setInfo = function (info) {
                    this.info = info;
                };
                Park.prototype.getCoasters = function () {
                    return this.coasters;
                };
                Park.prototype.setCoasters = function (value) {
                    this.coasters = value;
                };
                Park.prototype.setCoaster = function (value) {
                    this.coasters.push(value);
                };
                return Park;
            }());
            Chunks.Park = Park;
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var BaseStream = (function () {
                function BaseStream() {
                    this.type = null;
                }
                BaseStream.prototype.getType = function () {
                    return this.type;
                };
                BaseStream.prototype.setType = function (type) {
                    this.type = type;
                };
                BaseStream.TYPE_WRITE = 0;
                BaseStream.TYPE_READ = 1;
                return BaseStream;
            }());
            Stream.BaseStream = BaseStream;
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Reader = (function (_super) {
                __extends(Reader, _super);
                function Reader(content) {
                    if (content === void 0) { content = null; }
                    _super.call(this);
                    this.streamPosition = 0;
                    this.setType(Stream.BaseStream.TYPE_READ);
                    if (content !== null) {
                        this.content = content;
                    }
                }
                Reader.prototype.getContent = function () {
                    return this.content;
                };
                Reader.prototype.setContent = function (content) {
                    this.content = content;
                };
                Reader.prototype.getFilesize = function () {
                    return this.content.length;
                };
                Reader.prototype.resetStream = function () {
                    this.streamPosition = 0;
                };
                Reader.prototype.getStreamPosition = function () {
                    return this.streamPosition;
                };
                Reader.prototype.setStreamPosition = function (streamPosition) {
                    this.streamPosition = streamPosition;
                };
                Reader.prototype.increaseStreamPosition = function (streamPosition) {
                    this.streamPosition += streamPosition;
                };
                Reader.prototype.readChunkName = function () {
                    var chunk = this.content.slice(this.streamPosition, this.streamPosition + 4);
                    this.increaseStreamPosition(4);
                    return String.fromCharCode.apply(null, new Uint8Array(chunk));
                };
                Reader.prototype.readInt = function () {
                    var buff = this.content.slice(this.streamPosition, this.streamPosition + 4);
                    var dv = new DataView(new ArrayBuffer(4));
                    dv.setUint8(0, buff[0]);
                    dv.setUint8(1, buff[1]);
                    dv.setUint8(2, buff[2]);
                    dv.setUint8(3, buff[3]);
                    this.increaseStreamPosition(4);
                    return dv.getInt32(0);
                };
                Reader.prototype.readFloat = function () {
                    var buff = this.content.slice(this.streamPosition, this.streamPosition + 4);
                    var dv = new DataView(new ArrayBuffer(4));
                    dv.setUint8(0, buff[0]);
                    dv.setUint8(1, buff[1]);
                    dv.setUint8(2, buff[2]);
                    dv.setUint8(3, buff[3]);
                    this.increaseStreamPosition(4);
                    return dv.getFloat32(0);
                };
                Reader.prototype.readDouble = function () {
                    var buff = this.content.slice(this.streamPosition, this.streamPosition + 8);
                    var dv = new DataView(new ArrayBuffer(8));
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
                };
                Reader.prototype.readColor = function () {
                    return this.readByteVec3();
                };
                Reader.prototype.readByteVec3 = function () {
                    return vec3.fromValues(this.readByte(), this.readByte(), this.readByte());
                };
                Reader.prototype.readByteVec2 = function () {
                    return vec2.fromValues(this.readByte(), this.readByte());
                };
                Reader.prototype.readFloatVec2 = function () {
                    return vec2.fromValues(this.readFloat(), this.readFloat());
                };
                Reader.prototype.readFloatVec3 = function () {
                    return vec3.fromValues(this.readFloat(), this.readFloat(), this.readFloat());
                };
                Reader.prototype.readDoubleVec2 = function () {
                    return vec2.fromValues(this.readDouble(), this.readDouble());
                };
                Reader.prototype.readDoubleVec3 = function () {
                    return vec3.fromValues(this.readDouble(), this.readDouble(), this.readDouble());
                };
                Reader.prototype.readDoubleVec4 = function () {
                    return vec4.fromValues(this.readDouble(), this.readDouble(), this.readDouble(), this.readDouble());
                };
                Reader.prototype.readIntVec2 = function () {
                    return vec2.fromValues(this.readInt(), this.readInt());
                };
                Reader.prototype.readIntVec3 = function () {
                    return vec3.fromValues(this.readInt(), this.readInt(), this.readInt());
                };
                Reader.prototype.readByte = function () {
                    var buff = this.content.slice(this.streamPosition, this.streamPosition + 1);
                    var dv = new DataView(new ArrayBuffer(81));
                    dv.setUint8(0, buff[0]);
                    this.increaseStreamPosition(1);
                    return dv.getUint8(0);
                };
                Reader.prototype.readBoolean = function () {
                    return this.readByte() ? true : false;
                };
                Reader.prototype.readNull = function (i) {
                    this.increaseStreamPosition(i);
                };
                Reader.prototype.readString = function () {
                    var terminated = false;
                    var str = "";
                    while (!terminated) {
                        var buff = this.content.slice(this.streamPosition + 1, this.streamPosition + 2);
                        var char = String.fromCharCode.apply(null, new Uint8Array(buff));
                        this.increaseStreamPosition(2);
                        if (buff[0] === 0) {
                            terminated = true;
                        }
                        else {
                            str += char;
                        }
                    }
                    return str;
                };
                Reader.prototype.getChunkStreamReader = function () {
                    var size = this.readInt();
                    var reader = new Reader();
                    reader.setContent(this.content.slice(this.streamPosition - 4, this.streamPosition + size));
                    this.increaseStreamPosition(size);
                    return reader;
                };
                return Reader;
            }(Stream.BaseStream));
            Stream.Reader = Reader;
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var ChunkStream = (function () {
                function ChunkStream(stream, data) {
                    this.stream = null;
                    this.data = null;
                    this.chunkSize = 0;
                    this.fileSize = 0;
                    this.stream = stream;
                    this.data = data;
                }
                ChunkStream.prototype.getChunkSize = function () {
                    return this.chunkSize;
                };
                ChunkStream.prototype.setChunkSize = function (value) {
                    this.chunkSize = value;
                };
                ChunkStream.prototype.readChunk = function () {
                    var reader = this.stream;
                    this.fileSize = reader.getFilesize();
                    this.chunkSize = reader.readInt();
                    this.read(reader);
                };
                return ChunkStream;
            }());
            Stream.ChunkStream = ChunkStream;
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Info = (function (_super) {
                __extends(Info, _super);
                function Info() {
                    _super.apply(this, arguments);
                }
                Info.prototype.read = function (reader) {
                    reader.readNull(31);
                    this.data.getWeather().setOverwriteDefaultWeather(reader.readBoolean());
                    this.data.getWeather().setRainIntensity(reader.readFloat());
                    this.data.getWeather().setSnowIntensity(reader.readFloat());
                    this.data.getWeather().setWindIntensity(NoLimits.Chunks.Info.Weather.convertWindIntensity(reader.readFloat()));
                    this.data.getWeather().setFogIntensity(NoLimits.Chunks.Info.Weather.convertFogIntensity(reader.readFloat()));
                    this.data.getWeather().setCloudsIntensity(reader.readFloat());
                    this.data.getWeather().setOvercastIntensity(reader.readFloat());
                    this.data.getWeather().setThunderIntensity(reader.readFloat());
                    reader.readNull(6);
                    this.data.setAuthor(reader.readString());
                    this.data.setDescription(reader.readString());
                    this.data.setPreview(reader.readString());
                    this.data.setEnvironment(reader.readString());
                    reader.readNull(9);
                    this.data.getSky().setOverrideDefaultDateTime(reader.readByte() ? true : false);
                    this.data.getSky().setCurrentDate(reader.readIntVec2());
                    this.data.getSky().setCurrentTime(reader.readIntVec2());
                    reader.readNull(1);
                    this.data.setInitialPosition(reader.readFloatVec3());
                    this.data.setInitialRotation(reader.readFloatVec2());
                    this.data.setInitialView(reader.readByte());
                };
                return Info;
            }(Stream.ChunkStream));
            Stream.Info = Info;
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Terrain;
            (function (Terrain_1) {
                var Terrain = (function () {
                    function Terrain() {
                    }
                    return Terrain;
                }());
                Terrain_1.Terrain = Terrain;
            })(Terrain = Chunks.Terrain || (Chunks.Terrain = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Terrain = (function (_super) {
                __extends(Terrain, _super);
                function Terrain() {
                    _super.apply(this, arguments);
                }
                Terrain.prototype.read = function (reader) {
                };
                return Terrain;
            }(Stream.ChunkStream));
            Stream.Terrain = Terrain;
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Colors = (function () {
                    function Colors() {
                        this.wireframeTrack = vec3.fromValues(0, 0, 0);
                        this.rails = vec3.fromValues(0, 0, 0);
                        this.crossTies = vec3.fromValues(0, 0, 0);
                        this.mainSpine = vec3.fromValues(0, 0, 0);
                        this.car = vec3.fromValues(0, 0, 0);
                        this.seat = vec3.fromValues(0, 0, 0);
                        this.harness = vec3.fromValues(0, 0, 0);
                        this.bogie = vec3.fromValues(0, 0, 0);
                        this.chasiss = vec3.fromValues(0, 0, 0);
                        this.supports = vec3.fromValues(0, 0, 0);
                        this.tunnel = vec3.fromValues(0, 0, 0);
                        this.handrails = vec3.fromValues(0, 0, 0);
                        this.catwalks = vec3.fromValues(0, 0, 0);
                        this.spineColorScheme = 0;
                    }
                    Colors.prototype.getWireframeTrack = function () {
                        return this.wireframeTrack;
                    };
                    Colors.prototype.setWireframeTrack = function (value) {
                        this.wireframeTrack = value;
                    };
                    Colors.prototype.getRails = function () {
                        return this.rails;
                    };
                    Colors.prototype.setRails = function (value) {
                        this.rails = value;
                    };
                    Colors.prototype.getCrossTies = function () {
                        return this.crossTies;
                    };
                    Colors.prototype.setCrossTies = function (value) {
                        this.crossTies = value;
                    };
                    Colors.prototype.getMainSpine = function () {
                        return this.mainSpine;
                    };
                    Colors.prototype.setMainSpine = function (value) {
                        this.mainSpine = value;
                    };
                    Colors.prototype.getCar = function () {
                        return this.car;
                    };
                    Colors.prototype.setCar = function (value) {
                        this.car = value;
                    };
                    Colors.prototype.getSeat = function () {
                        return this.seat;
                    };
                    Colors.prototype.setSeat = function (value) {
                        this.seat = value;
                    };
                    Colors.prototype.getHarness = function () {
                        return this.harness;
                    };
                    Colors.prototype.setHarness = function (value) {
                        this.harness = value;
                    };
                    Colors.prototype.getBogie = function () {
                        return this.bogie;
                    };
                    Colors.prototype.setBogie = function (value) {
                        this.bogie = value;
                    };
                    Colors.prototype.getChasiss = function () {
                        return this.chasiss;
                    };
                    Colors.prototype.setChasiss = function (value) {
                        this.chasiss = value;
                    };
                    Colors.prototype.getSupports = function () {
                        return this.supports;
                    };
                    Colors.prototype.setSupports = function (value) {
                        this.supports = value;
                    };
                    Colors.prototype.getTunnel = function () {
                        return this.tunnel;
                    };
                    Colors.prototype.setTunnel = function (value) {
                        this.tunnel = value;
                    };
                    Colors.prototype.getHandrails = function () {
                        return this.handrails;
                    };
                    Colors.prototype.setHandrails = function (value) {
                        this.handrails = value;
                    };
                    Colors.prototype.getCatwalks = function () {
                        return this.catwalks;
                    };
                    Colors.prototype.setCatwalks = function (value) {
                        this.catwalks = value;
                    };
                    Colors.prototype.getSpineColorScheme = function () {
                        return this.spineColorScheme;
                    };
                    Colors.prototype.setSpineColorScheme = function (value) {
                        this.spineColorScheme = value;
                    };
                    return Colors;
                }());
                Coaster.Colors = Colors;
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var CustomFriction = (function () {
                    function CustomFriction() {
                        this.constFrictionParameter = 0;
                        this.airResistanceParameter = 0;
                    }
                    CustomFriction.prototype.getConstFrictionParameter = function () {
                        return this.constFrictionParameter;
                    };
                    CustomFriction.prototype.setConstFrictionParameter = function (value) {
                        this.constFrictionParameter = value;
                    };
                    CustomFriction.prototype.getAirResistanceParameter = function () {
                        return this.airResistanceParameter;
                    };
                    CustomFriction.prototype.setAirResistanceParameter = function (value) {
                        this.airResistanceParameter = value;
                    };
                    return CustomFriction;
                }());
                Coaster.CustomFriction = CustomFriction;
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                (function (ModeOperation) {
                    ModeOperation[ModeOperation["ClosedCircuit"] = 0] = "ClosedCircuit";
                    ModeOperation[ModeOperation["Shuttle"] = 1] = "Shuttle";
                    ModeOperation[ModeOperation["Scripted"] = 2] = "Scripted";
                })(Coaster.ModeOperation || (Coaster.ModeOperation = {}));
                var ModeOperation = Coaster.ModeOperation;
                (function (ModeSplinePosition) {
                    ModeSplinePosition[ModeSplinePosition["CenterOfRail"] = 0] = "CenterOfRail";
                    ModeSplinePosition[ModeSplinePosition["HeartLineCurrentStyle"] = 1] = "HeartLineCurrentStyle";
                    ModeSplinePosition[ModeSplinePosition["Custom"] = 2] = "Custom";
                })(Coaster.ModeSplinePosition || (Coaster.ModeSplinePosition = {}));
                var ModeSplinePosition = Coaster.ModeSplinePosition;
                (function (ModePhysicsModel) {
                    ModePhysicsModel[ModePhysicsModel["NL2"] = 0] = "NL2";
                    ModePhysicsModel[ModePhysicsModel["NL2CustomFriction"] = 3] = "NL2CustomFriction";
                    ModePhysicsModel[ModePhysicsModel["NL22"] = 4] = "NL22";
                    ModePhysicsModel[ModePhysicsModel["NL16"] = 1] = "NL16";
                    ModePhysicsModel[ModePhysicsModel["NL1"] = 2] = "NL1";
                })(Coaster.ModePhysicsModel || (Coaster.ModePhysicsModel = {}));
                var ModePhysicsModel = Coaster.ModePhysicsModel;
                var Mode = (function () {
                    function Mode() {
                        this.operationMode = ModeOperation.ClosedCircuit;
                        this.physicsModel = ModePhysicsModel.NL22;
                        this.splinePosition = ModeSplinePosition.CenterOfRail;
                        this.splinePositionOffset = vec2.fromValues(0, 0);
                        this.customFriction = new Coaster.CustomFriction();
                    }
                    Mode.prototype.getOperationMode = function () {
                        return this.operationMode;
                    };
                    Mode.prototype.setOperationMode = function (value) {
                        this.operationMode = value;
                    };
                    Mode.prototype.getPhysicsModel = function () {
                        return this.physicsModel;
                    };
                    Mode.prototype.setPhysicsModel = function (value) {
                        this.physicsModel = value;
                    };
                    Mode.prototype.getSplinePosition = function () {
                        return this.splinePosition;
                    };
                    Mode.prototype.setSplinePosition = function (value) {
                        this.splinePosition = value;
                    };
                    Mode.prototype.getSplinePositionOffset = function () {
                        return this.splinePositionOffset;
                    };
                    Mode.prototype.setSplinePositionOffset = function (value) {
                        this.splinePositionOffset = value;
                    };
                    Mode.prototype.getCustomFriction = function () {
                        return this.customFriction;
                    };
                    Mode.prototype.setCustomFriction = function (value) {
                        this.customFriction = value;
                    };
                    return Mode;
                }());
                Coaster.Mode = Mode;
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                (function (StyleType) {
                    StyleType[StyleType["Coaster4D"] = 22] = "Coaster4D";
                    StyleType[StyleType["ClassicSteelLoopingCoaster"] = 0] = "ClassicSteelLoopingCoaster";
                    StyleType[StyleType["ClassicSteelLoopingCoasterModern"] = 49] = "ClassicSteelLoopingCoasterModern";
                    StyleType[StyleType["CorkscrewCoaster"] = 1] = "CorkscrewCoaster";
                    StyleType[StyleType["GerstlauerBobsledCoaster"] = 39] = "GerstlauerBobsledCoaster";
                    StyleType[StyleType["GerstlauerEuroFighter"] = 36] = "GerstlauerEuroFighter";
                    StyleType[StyleType["GerstlauerEuroFighter2"] = 42] = "GerstlauerEuroFighter2";
                    StyleType[StyleType["GerstlauerSpinningCoaster"] = 41] = "GerstlauerSpinningCoaster";
                    StyleType[StyleType["GravityGroupTimberliner"] = 71] = "GravityGroupTimberliner";
                    StyleType[StyleType["HyperCoaster"] = 5] = "HyperCoaster";
                    StyleType[StyleType["HyperCoaster4SeatsAcross"] = 8] = "HyperCoaster4SeatsAcross";
                    StyleType[StyleType["HyperCoaster4SeatsStaggeredWithScoops"] = 64] = "HyperCoaster4SeatsStaggeredWithScoops";
                    StyleType[StyleType["HyperCoaster4SeatsStaggered"] = 63] = "HyperCoaster4SeatsStaggered";
                    StyleType[StyleType["InvertedCoaster2Seats"] = 2] = "InvertedCoaster2Seats";
                    StyleType[StyleType["InvertedCoaster4Seats"] = 4] = "InvertedCoaster4Seats";
                    StyleType[StyleType["InvertedFaceToFaceCoaster"] = 14] = "InvertedFaceToFaceCoaster";
                    StyleType[StyleType["InvertedImpulseCoaster"] = 15] = "InvertedImpulseCoaster";
                    StyleType[StyleType["LimLaunchedCoaster"] = 13] = "LimLaunchedCoaster";
                    StyleType[StyleType["MackLaunchedCoaster"] = 62] = "MackLaunchedCoaster";
                    StyleType[StyleType["MaurerSoehneSpinningCoaster"] = 20] = "MaurerSoehneSpinningCoaster";
                    StyleType[StyleType["MaurerSoehneXCarCoaster"] = 50] = "MaurerSoehneXCarCoaster";
                    StyleType[StyleType["RocketCoaster"] = 33] = "RocketCoaster";
                    StyleType[StyleType["SuspendedCoaster"] = 16] = "SuspendedCoaster";
                    StyleType[StyleType["TwistedDiveCoaster"] = 21] = "TwistedDiveCoaster";
                    StyleType[StyleType["TwistedFloorlessCoaster"] = 6] = "TwistedFloorlessCoaster";
                    StyleType[StyleType["TwistedFlyingCoaster"] = 23] = "TwistedFlyingCoaster";
                    StyleType[StyleType["TwistedSitdownCoaster"] = 3] = "TwistedSitdownCoaster";
                    StyleType[StyleType["TwistedStandUpCoaster"] = 7] = "TwistedStandUpCoaster";
                    StyleType[StyleType["TwistedWingCoaster"] = 76] = "TwistedWingCoaster";
                    StyleType[StyleType["VekomaFlyingDutchman"] = 18] = "VekomaFlyingDutchman";
                    StyleType[StyleType["VekomaMinetrainCoaster"] = 34] = "VekomaMinetrainCoaster";
                    StyleType[StyleType["VekomaMinetrainCoasterWithLocomotive"] = 35] = "VekomaMinetrainCoasterWithLocomotive";
                    StyleType[StyleType["VekomaMotorbikeCoaster"] = 38] = "VekomaMotorbikeCoaster";
                    StyleType[StyleType["WoodenCoasterClassic4"] = 10] = "WoodenCoasterClassic4";
                    StyleType[StyleType["WoodenCoasterClassic6"] = 11] = "WoodenCoasterClassic6";
                    StyleType[StyleType["WoodenCoasterTrailered2"] = 9] = "WoodenCoasterTrailered2";
                    StyleType[StyleType["WoodenCoasterTrailered4"] = 12] = "WoodenCoasterTrailered4";
                    StyleType[StyleType["ZamperlaTwisterCoaster"] = 55] = "ZamperlaTwisterCoaster";
                })(Coaster.StyleType || (Coaster.StyleType = {}));
                var StyleType = Coaster.StyleType;
                (function (StyleWorn) {
                    StyleWorn[StyleWorn["New"] = 1] = "New";
                    StyleWorn[StyleWorn["Worn"] = 0] = "Worn";
                    StyleWorn[StyleWorn["Rusted"] = 2] = "Rusted";
                })(Coaster.StyleWorn || (Coaster.StyleWorn = {}));
                var StyleWorn = Coaster.StyleWorn;
                (function (StyleRail) {
                    StyleRail[StyleRail["Standard"] = 0] = "Standard";
                    StyleRail[StyleRail["Striped"] = 1] = "Striped";
                })(Coaster.StyleRail || (Coaster.StyleRail = {}));
                var StyleRail = Coaster.StyleRail;
                var Style = (function () {
                    function Style() {
                        this.styleType = StyleType.ClassicSteelLoopingCoaster;
                        this.wornType = StyleWorn.New;
                        this.railType = StyleRail.Standard;
                    }
                    Style.prototype.getStyleType = function () {
                        return this.styleType;
                    };
                    Style.prototype.setStyleType = function (value) {
                        this.styleType = value;
                    };
                    Style.prototype.getWornType = function () {
                        return this.wornType;
                    };
                    Style.prototype.setWornType = function (value) {
                        this.wornType = value;
                    };
                    Style.prototype.getRailType = function () {
                        return this.railType;
                    };
                    Style.prototype.setRailType = function (value) {
                        this.railType = value;
                    };
                    return Style;
                }());
                Coaster.Style = Style;
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var ResourceFile = (function () {
                    function ResourceFile() {
                        this.id = null;
                        this.path = "";
                    }
                    ResourceFile.prototype.getId = function () {
                        return this.id;
                    };
                    ResourceFile.prototype.setId = function (value) {
                        this.id = value;
                    };
                    ResourceFile.prototype.getPath = function () {
                        return this.path;
                    };
                    ResourceFile.prototype.setPath = function (value) {
                        this.path = value;
                    };
                    return ResourceFile;
                }());
                Coaster.ResourceFile = ResourceFile;
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Script = (function () {
                    function Script() {
                        this.scriptClass = "";
                        this.classPath = "";
                        this.resourceFiles = [];
                    }
                    Script.prototype.getScriptClass = function () {
                        return this.scriptClass;
                    };
                    Script.prototype.setScriptClass = function (value) {
                        this.scriptClass = value;
                    };
                    Script.prototype.getClassPath = function () {
                        return this.classPath;
                    };
                    Script.prototype.setClassPath = function (value) {
                        this.classPath = value;
                    };
                    Script.prototype.getResourceFiles = function () {
                        return this.resourceFiles;
                    };
                    Script.prototype.setResourceFiles = function (value) {
                        this.resourceFiles = value;
                    };
                    Script.prototype.insertResourceFiles = function (value) {
                        this.resourceFiles.push(value);
                    };
                    return Script;
                }());
                Coaster.Script = Script;
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Support;
                (function (Support) {
                    var FreeNode = (function () {
                        function FreeNode() {
                            this.position = vec3.fromValues(0, 0, 0);
                        }
                        FreeNode.prototype.getPosition = function () {
                            return this.position;
                        };
                        FreeNode.prototype.setPosition = function (value) {
                            this.position = value;
                        };
                        return FreeNode;
                    }());
                    Support.FreeNode = FreeNode;
                })(Support = Coaster.Support || (Coaster.Support = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Support;
                (function (Support) {
                    (function (FooterBaseStyle) {
                        FooterBaseStyle[FooterBaseStyle["SteelSquare"] = 0] = "SteelSquare";
                        FooterBaseStyle[FooterBaseStyle["SteelRound"] = 1] = "SteelRound";
                        FooterBaseStyle[FooterBaseStyle["WoodSquare"] = 2] = "WoodSquare";
                        FooterBaseStyle[FooterBaseStyle["WoodRound"] = 3] = "WoodRound";
                    })(Support.FooterBaseStyle || (Support.FooterBaseStyle = {}));
                    var FooterBaseStyle = Support.FooterBaseStyle;
                    (function (FooterConnectionStyle) {
                        FooterConnectionStyle[FooterConnectionStyle["Simple"] = 0] = "Simple";
                        FooterConnectionStyle[FooterConnectionStyle["ExtendedA"] = 1] = "ExtendedA";
                        FooterConnectionStyle[FooterConnectionStyle["ExtendedB"] = 2] = "ExtendedB";
                    })(Support.FooterConnectionStyle || (Support.FooterConnectionStyle = {}));
                    var FooterConnectionStyle = Support.FooterConnectionStyle;
                    (function (FooterColorMode) {
                        FooterColorMode[FooterColorMode["Custom"] = 0] = "Custom";
                        FooterColorMode[FooterColorMode["Support"] = 16] = "Support";
                        FooterColorMode[FooterColorMode["Handrail"] = 32] = "Handrail";
                        FooterColorMode[FooterColorMode["Catwalk"] = 48] = "Catwalk";
                        FooterColorMode[FooterColorMode["Spine"] = 64] = "Spine";
                    })(Support.FooterColorMode || (Support.FooterColorMode = {}));
                    var FooterColorMode = Support.FooterColorMode;
                    var Footer = (function () {
                        function Footer() {
                            this.position = vec3.fromValues(0, 0, 0);
                            this.rotationAngle = 0;
                            this.aboveGround = 0;
                            this.baseStyle = FooterBaseStyle.SteelSquare;
                            this.connectionStyle = FooterConnectionStyle.Simple;
                            this.colorMode = FooterColorMode.Support;
                            this.customColor = vec3.fromValues(0, 0, 0);
                        }
                        Footer.prototype.getPosition = function () {
                            return this.position;
                        };
                        Footer.prototype.setPosition = function (value) {
                            this.position = value;
                        };
                        Footer.prototype.getRotationAngle = function () {
                            return this.rotationAngle;
                        };
                        Footer.prototype.setRotationAngle = function (value) {
                            this.rotationAngle = value;
                        };
                        Footer.prototype.getAboveGround = function () {
                            return this.aboveGround;
                        };
                        Footer.prototype.setAboveGround = function (value) {
                            this.aboveGround = value;
                        };
                        Footer.prototype.getBaseStyle = function () {
                            return this.baseStyle;
                        };
                        Footer.prototype.setBaseStyle = function (value) {
                            this.baseStyle = value;
                        };
                        Footer.prototype.getConnectionStyle = function () {
                            return this.connectionStyle;
                        };
                        Footer.prototype.setConnectionStyle = function (value) {
                            this.connectionStyle = value;
                        };
                        Footer.prototype.getColorMode = function () {
                            return this.colorMode;
                        };
                        Footer.prototype.setColorMode = function (value) {
                            this.colorMode = value;
                        };
                        Footer.prototype.getCustomColor = function () {
                            return this.customColor;
                        };
                        Footer.prototype.setCustomColor = function (value) {
                            this.customColor = value;
                        };
                        return Footer;
                    }());
                    Support.Footer = Footer;
                })(Support = Coaster.Support || (Coaster.Support = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Support;
                (function (Support) {
                    (function (BeamConnectionType) {
                        BeamConnectionType[BeamConnectionType["FreeNode"] = 1] = "FreeNode";
                        BeamConnectionType[BeamConnectionType["Footer"] = 2] = "Footer";
                        BeamConnectionType[BeamConnectionType["RailConnector"] = 3] = "RailConnector";
                        BeamConnectionType[BeamConnectionType["BeamNode"] = 4] = "BeamNode";
                    })(Support.BeamConnectionType || (Support.BeamConnectionType = {}));
                    var BeamConnectionType = Support.BeamConnectionType;
                    var BeamConnection = (function () {
                        function BeamConnection() {
                            this.type = BeamConnectionType.FreeNode;
                            this.index = 0;
                            this.indexOnBeam = 0;
                            this.indexOnRailConnector = 0;
                        }
                        BeamConnection.prototype.getType = function () {
                            return this.type;
                        };
                        BeamConnection.prototype.setType = function (value) {
                            this.type = value;
                        };
                        BeamConnection.prototype.getIndex = function () {
                            return this.index;
                        };
                        BeamConnection.prototype.setIndex = function (value) {
                            this.index = value;
                        };
                        BeamConnection.prototype.getIndexOnBeam = function () {
                            return this.indexOnBeam;
                        };
                        BeamConnection.prototype.setIndexOnBeam = function (value) {
                            this.indexOnBeam = value;
                        };
                        BeamConnection.prototype.getIndexOnRailConnector = function () {
                            return this.indexOnRailConnector;
                        };
                        BeamConnection.prototype.setIndexOnRailConnector = function (value) {
                            this.indexOnRailConnector = value;
                        };
                        return BeamConnection;
                    }());
                    Support.BeamConnection = BeamConnection;
                })(Support = Coaster.Support || (Coaster.Support = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Support;
                (function (Support) {
                    var BeamNode = (function () {
                        function BeamNode() {
                            this.position = 0;
                            this.flange = false;
                        }
                        BeamNode.prototype.getPosition = function () {
                            return this.position;
                        };
                        BeamNode.prototype.setPosition = function (value) {
                            this.position = value;
                        };
                        BeamNode.prototype.isFlange = function () {
                            return this.flange;
                        };
                        BeamNode.prototype.setIsFlange = function (value) {
                            this.flange = value;
                        };
                        return BeamNode;
                    }());
                    Support.BeamNode = BeamNode;
                })(Support = Coaster.Support || (Coaster.Support = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Support;
                (function (Support) {
                    (function (SupportNodeFlags) {
                        SupportNodeFlags[SupportNodeFlags["NoCapsForLODsHint"] = 0] = "NoCapsForLODsHint";
                        SupportNodeFlags[SupportNodeFlags["DimAsIfItWasInATunnel"] = 1] = "DimAsIfItWasInATunnel";
                        SupportNodeFlags[SupportNodeFlags["NoStartCapHint"] = 4] = "NoStartCapHint";
                        SupportNodeFlags[SupportNodeFlags["NoEndCapHint"] = 5] = "NoEndCapHint";
                        SupportNodeFlags[SupportNodeFlags["RotationModeAzimuth"] = 6] = "RotationModeAzimuth";
                    })(Support.SupportNodeFlags || (Support.SupportNodeFlags = {}));
                    var SupportNodeFlags = Support.SupportNodeFlags;
                    (function (SupportNodeColorMode) {
                        SupportNodeColorMode[SupportNodeColorMode["CustomColor"] = 0] = "CustomColor";
                        SupportNodeColorMode[SupportNodeColorMode["SupportColor"] = 1] = "SupportColor";
                        SupportNodeColorMode[SupportNodeColorMode["HandrailsColor"] = 2] = "HandrailsColor";
                        SupportNodeColorMode[SupportNodeColorMode["CatwalkColor"] = 3] = "CatwalkColor";
                        SupportNodeColorMode[SupportNodeColorMode["SpineColor"] = 4] = "SpineColor";
                    })(Support.SupportNodeColorMode || (Support.SupportNodeColorMode = {}));
                    var SupportNodeColorMode = Support.SupportNodeColorMode;
                    var ISupportNode = (function () {
                        function ISupportNode() {
                            this.flag1 = 0;
                            this.flag2 = 0;
                            this.flag3 = 0;
                            this.color = vec3.fromValues(0, 0, 0);
                            this.colorMode = SupportNodeColorMode.CustomColor;
                        }
                        ISupportNode.prototype.hasDimAsIfItWasInATunnel = function () {
                            return this.hasFlag1(SupportNodeFlags.DimAsIfItWasInATunnel);
                        };
                        ISupportNode.prototype.getColor = function () {
                            return this.color;
                        };
                        ISupportNode.prototype.setColor = function (value) {
                            this.color = value;
                        };
                        ISupportNode.prototype.getColorMode = function () {
                            if (this.hasFlag3(4) && !this.hasFlag3(5))
                                return SupportNodeColorMode.SupportColor;
                            else if (this.hasFlag3(5) && !this.hasFlag3(4))
                                return SupportNodeColorMode.HandrailsColor;
                            else if (this.hasFlag3(4) && this.hasFlag3(5))
                                return SupportNodeColorMode.CatwalkColor;
                            else if (this.hasFlag3(6))
                                return SupportNodeColorMode.SpineColor;
                            else
                                return SupportNodeColorMode.CustomColor;
                        };
                        ISupportNode.prototype.setColorMode = function (value) {
                            this.setWithCheckFlag3(4, false);
                            this.setWithCheckFlag3(5, false);
                            this.setWithCheckFlag3(6, false);
                            switch (value) {
                                case SupportNodeColorMode.SpineColor:
                                    this.setWithCheckFlag3(6, true);
                                    break;
                                case SupportNodeColorMode.CatwalkColor:
                                    this.setWithCheckFlag3(4, true);
                                    this.setWithCheckFlag3(5, true);
                                    break;
                                case SupportNodeColorMode.HandrailsColor:
                                    this.setWithCheckFlag3(5, true);
                                    break;
                                case SupportNodeColorMode.SupportColor:
                                    this.setWithCheckFlag3(4, true);
                                    break;
                            }
                            this.colorMode = this.getColorMode();
                        };
                        ISupportNode.prototype.setFlag1 = function (value) {
                            this.flag1 = value;
                            this.colorMode = this.getColorMode();
                        };
                        ISupportNode.prototype.setFlag2 = function (value) {
                            this.flag2 = value;
                            this.colorMode = this.getColorMode();
                        };
                        ISupportNode.prototype.setFlag3 = function (value) {
                            this.flag3 = value;
                            this.colorMode = this.getColorMode();
                        };
                        ISupportNode.prototype.hasFlag1 = function (flag) {
                            return this.flag1 & (1 << flag) ? true : false;
                        };
                        ISupportNode.prototype.hasFlag2 = function (flag) {
                            return this.flag2 & (1 << flag) ? true : false;
                        };
                        ISupportNode.prototype.hasFlag3 = function (flag) {
                            return this.flag3 & (1 << flag) ? true : false;
                        };
                        ISupportNode.prototype.setWithCheckFlag1 = function (flag, state) {
                            if (state && !this.hasFlag1(flag)) {
                                this.flag1 |= 1 << flag;
                            }
                            else if (!state && this.hasFlag1(flag)) {
                                this.flag1 &= ~(1 << flag);
                            }
                        };
                        ISupportNode.prototype.setWithCheckFlag2 = function (flag, state) {
                            if (state && !this.hasFlag2(flag)) {
                                this.flag2 |= 1 << flag;
                            }
                            else if (!state && this.hasFlag2(flag)) {
                                this.flag2 &= ~(1 << flag);
                            }
                        };
                        ISupportNode.prototype.setWithCheckFlag3 = function (flag, state) {
                            if (state && !this.hasFlag3(flag)) {
                                this.flag3 |= 1 << flag;
                            }
                            else if (!state && this.hasFlag3(flag)) {
                                this.flag3 &= ~(1 << flag);
                            }
                        };
                        return ISupportNode;
                    }());
                    Support.ISupportNode = ISupportNode;
                })(Support = Coaster.Support || (Coaster.Support = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Support;
                (function (Support) {
                    (function (BeamType) {
                        BeamType[BeamType["Pipe"] = 1] = "Pipe";
                        BeamType[BeamType["LoopingBeam"] = 2] = "LoopingBeam";
                        BeamType[BeamType["LBeam"] = 3] = "LBeam";
                        BeamType[BeamType["HBeam"] = 4] = "HBeam";
                        BeamType[BeamType["BoxBeam"] = 5] = "BoxBeam";
                        BeamType[BeamType["WoodenChordBeam"] = 6] = "WoodenChordBeam";
                        BeamType[BeamType["WoodenCatwalk"] = 7] = "WoodenCatwalk";
                        BeamType[BeamType["CBeam"] = 8] = "CBeam";
                        BeamType[BeamType["Cable"] = 9] = "Cable";
                    })(Support.BeamType || (Support.BeamType = {}));
                    var BeamType = Support.BeamType;
                    (function (BeamLODPriority) {
                        BeamLODPriority[BeamLODPriority["Highest"] = 0] = "Highest";
                        BeamLODPriority[BeamLODPriority["High"] = 1] = "High";
                        BeamLODPriority[BeamLODPriority["Medium"] = 2] = "Medium";
                        BeamLODPriority[BeamLODPriority["Low"] = 3] = "Low";
                        BeamLODPriority[BeamLODPriority["Lowest"] = 4] = "Lowest";
                    })(Support.BeamLODPriority || (Support.BeamLODPriority = {}));
                    var BeamLODPriority = Support.BeamLODPriority;
                    (function (BeamRotationMode) {
                        BeamRotationMode[BeamRotationMode["HorizontalBeam"] = 0] = "HorizontalBeam";
                        BeamRotationMode[BeamRotationMode["VerticalBeam"] = 1] = "VerticalBeam";
                    })(Support.BeamRotationMode || (Support.BeamRotationMode = {}));
                    var BeamRotationMode = Support.BeamRotationMode;
                    var Beam = (function (_super) {
                        __extends(Beam, _super);
                        function Beam() {
                            _super.apply(this, arguments);
                            this.connection1 = new Support.BeamConnection();
                            this.connection2 = new Support.BeamConnection();
                            this.beamType = BeamType.Pipe;
                            this.startWidth = 0;
                            this.endWidth = 0;
                            this.rotationAngle = 0;
                            this.extraLengthAtStart = 0;
                            this.extraLengthAtEnd = 0;
                            this.nodeOffsetRelativeX = 0;
                            this.nodeOffsetAbsoluteYStart = 0;
                            this.nodeOffsetAbsoluteYEnd = 0;
                            this.beamNodes = [];
                            this.rotationMode = BeamRotationMode.HorizontalBeam;
                            this.lodPriority = BeamLODPriority.Lowest;
                        }
                        Beam.prototype.getRotationMode = function () {
                            if (this.hasFlag2(Support.SupportNodeFlags.RotationModeAzimuth))
                                return BeamRotationMode.VerticalBeam;
                            else
                                return BeamRotationMode.HorizontalBeam;
                        };
                        Beam.prototype.setRotationMode = function (value) {
                            this.setWithCheckFlag2(Support.SupportNodeFlags.RotationModeAzimuth, false);
                            switch (value) {
                                case BeamRotationMode.VerticalBeam:
                                    this.setWithCheckFlag2(Support.SupportNodeFlags.RotationModeAzimuth, true);
                                    break;
                            }
                            this.rotationMode = this.getRotationMode();
                        };
                        Beam.prototype.getLODPriority = function () {
                            if (this.hasFlag3(3))
                                return BeamLODPriority.Lowest;
                            else if (this.hasFlag3(1) && this.hasFlag3(2))
                                return BeamLODPriority.Low;
                            else if (!this.hasFlag3(1) && this.hasFlag3(2))
                                return BeamLODPriority.Medium;
                            else if (this.hasFlag3(1) && !this.hasFlag3(2))
                                return BeamLODPriority.High;
                            else
                                return BeamLODPriority.Highest;
                        };
                        Beam.prototype.setLODPriority = function (value) {
                            this.setWithCheckFlag3(1, false);
                            this.setWithCheckFlag3(2, false);
                            this.setWithCheckFlag3(3, false);
                            switch (value) {
                                case BeamLODPriority.Lowest:
                                    this.setWithCheckFlag3(3, true);
                                    break;
                                case BeamLODPriority.Low:
                                    this.setWithCheckFlag3(1, true);
                                    this.setWithCheckFlag3(2, true);
                                    break;
                                case BeamLODPriority.Medium:
                                    this.setWithCheckFlag3(2, true);
                                    break;
                                case BeamLODPriority.High:
                                    this.setWithCheckFlag3(1, true);
                                    break;
                            }
                            this.lodPriority = this.getLODPriority();
                        };
                        Beam.prototype.getConnection1 = function () {
                            return this.connection1;
                        };
                        Beam.prototype.setConnection1 = function (value) {
                            this.connection1 = value;
                        };
                        Beam.prototype.getConnection2 = function () {
                            return this.connection2;
                        };
                        Beam.prototype.setConnection2 = function (value) {
                            this.connection2 = value;
                        };
                        Beam.prototype.getBeamType = function () {
                            return this.beamType;
                        };
                        Beam.prototype.setBeamType = function (value) {
                            this.beamType = value;
                        };
                        Beam.prototype.getStartWidth = function () {
                            return this.startWidth;
                        };
                        Beam.prototype.setStartWidth = function (value) {
                            this.startWidth = value;
                        };
                        Beam.prototype.getEndWidth = function () {
                            return this.endWidth;
                        };
                        Beam.prototype.setEndWidth = function (value) {
                            this.endWidth = value;
                        };
                        Beam.prototype.getRotationAngle = function () {
                            return this.rotationAngle;
                        };
                        Beam.prototype.setRotationAngle = function (value) {
                            this.rotationAngle = value;
                        };
                        Beam.prototype.getExtraLengthAtStart = function () {
                            return this.extraLengthAtStart;
                        };
                        Beam.prototype.setExtraLengthAtStart = function (value) {
                            this.extraLengthAtStart = value;
                        };
                        Beam.prototype.getExtraLengthAtEnd = function () {
                            return this.extraLengthAtEnd;
                        };
                        Beam.prototype.setExtraLengthAtEnd = function (value) {
                            this.extraLengthAtEnd = value;
                        };
                        Beam.prototype.getNodeOffsetRelativeX = function () {
                            return this.nodeOffsetRelativeX;
                        };
                        Beam.prototype.setNodeOffsetRelativeX = function (value) {
                            this.nodeOffsetRelativeX = value;
                        };
                        Beam.prototype.getNodeOffsetAbsoluteYStart = function () {
                            return this.nodeOffsetAbsoluteYStart;
                        };
                        Beam.prototype.setNodeOffsetAbsoluteYStart = function (value) {
                            this.nodeOffsetAbsoluteYStart = value;
                        };
                        Beam.prototype.getNodeOffsetAbsoluteYEnd = function () {
                            return this.nodeOffsetAbsoluteYEnd;
                        };
                        Beam.prototype.setNodeOffsetAbsoluteYEnd = function (value) {
                            this.nodeOffsetAbsoluteYEnd = value;
                        };
                        Beam.prototype.getBeamNodes = function () {
                            return this.beamNodes;
                        };
                        Beam.prototype.setBeamNodes = function (value) {
                            this.beamNodes = value;
                        };
                        Beam.prototype.insertBeamNodes = function (value) {
                            this.beamNodes.push(value);
                        };
                        Beam.prototype.hasNoStartCapHint = function () {
                            return this.hasFlag2(Support.SupportNodeFlags.NoStartCapHint);
                        };
                        Beam.prototype.hasNoEndCapHint = function () {
                            return this.hasFlag2(Support.SupportNodeFlags.NoEndCapHint);
                        };
                        Beam.prototype.hasNoCapsForLODsHint = function () {
                            return this.hasFlag1(Support.SupportNodeFlags.NoCapsForLODsHint);
                        };
                        Beam.prototype.setFlag1 = function (value) {
                            _super.prototype.setFlag1.call(this, value);
                            this.rotationMode = this.getRotationMode();
                            this.lodPriority = this.getLODPriority();
                        };
                        Beam.prototype.setFlag2 = function (value) {
                            _super.prototype.setFlag2.call(this, value);
                            this.rotationMode = this.getRotationMode();
                            this.lodPriority = this.getLODPriority();
                        };
                        Beam.prototype.setFlag3 = function (value) {
                            _super.prototype.setFlag3.call(this, value);
                            this.rotationMode = this.getRotationMode();
                            this.lodPriority = this.getLODPriority();
                        };
                        return Beam;
                    }(Support.ISupportNode));
                    Support.Beam = Beam;
                })(Support = Coaster.Support || (Coaster.Support = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Support;
                (function (Support) {
                    (function (RailNodeConnectionStyle) {
                        RailNodeConnectionStyle[RailNodeConnectionStyle["TrackDefault"] = 0] = "TrackDefault";
                        RailNodeConnectionStyle[RailNodeConnectionStyle["Simple"] = 1] = "Simple";
                        RailNodeConnectionStyle[RailNodeConnectionStyle["CorkscrewStraightDown"] = 2] = "CorkscrewStraightDown";
                        RailNodeConnectionStyle[RailNodeConnectionStyle["TwistedStraightDown"] = 3] = "TwistedStraightDown";
                        RailNodeConnectionStyle[RailNodeConnectionStyle["TwistedHorizontal"] = 4] = "TwistedHorizontal";
                        RailNodeConnectionStyle[RailNodeConnectionStyle["TwistedVertical"] = 5] = "TwistedVertical";
                        RailNodeConnectionStyle[RailNodeConnectionStyle["Horizontal4D"] = 6] = "Horizontal4D";
                        RailNodeConnectionStyle[RailNodeConnectionStyle["Vertical4D"] = 7] = "Vertical4D";
                        RailNodeConnectionStyle[RailNodeConnectionStyle["Aligned4D"] = 8] = "Aligned4D";
                        RailNodeConnectionStyle[RailNodeConnectionStyle["Special4D"] = 9] = "Special4D";
                        RailNodeConnectionStyle[RailNodeConnectionStyle["SuspendedHorizontal"] = 10] = "SuspendedHorizontal";
                        RailNodeConnectionStyle[RailNodeConnectionStyle["SuspendedVertical"] = 10] = "SuspendedVertical";
                    })(Support.RailNodeConnectionStyle || (Support.RailNodeConnectionStyle = {}));
                    var RailNodeConnectionStyle = Support.RailNodeConnectionStyle;
                    var RailNode = (function (_super) {
                        __extends(RailNode, _super);
                        function RailNode() {
                            _super.apply(this, arguments);
                            this.position = 0;
                            this.connectionStyle = 0;
                            this.sizeParameter = 0;
                            this.trackIndex = 0;
                        }
                        RailNode.prototype.getPosition = function () {
                            return this.position;
                        };
                        RailNode.prototype.setPosition = function (value) {
                            this.position = value;
                        };
                        RailNode.prototype.getSizeParameter = function () {
                            return this.sizeParameter;
                        };
                        RailNode.prototype.setSizeParameter = function (value) {
                            this.sizeParameter = value;
                        };
                        RailNode.prototype.getConnectionStyle = function () {
                            return this.connectionStyle;
                        };
                        RailNode.prototype.setConnectionStyle = function (isModel, style) {
                            if (!isModel) {
                                if (style == 0)
                                    this.connectionStyle = RailNodeConnectionStyle.Simple;
                                if (style == 2)
                                    this.connectionStyle = RailNodeConnectionStyle.TrackDefault;
                            }
                            else {
                                if (style == 0)
                                    this.connectionStyle = RailNodeConnectionStyle.TwistedStraightDown;
                                if (style == 1)
                                    this.connectionStyle = RailNodeConnectionStyle.TwistedHorizontal;
                                if (style == 2)
                                    this.connectionStyle = RailNodeConnectionStyle.TwistedVertical;
                                if (style == 3)
                                    this.connectionStyle = RailNodeConnectionStyle.CorkscrewStraightDown;
                                if (style == 4)
                                    this.connectionStyle = RailNodeConnectionStyle.Horizontal4D;
                                if (style == 5)
                                    this.connectionStyle = RailNodeConnectionStyle.Vertical4D;
                                if (style == 6)
                                    this.connectionStyle = RailNodeConnectionStyle.Aligned4D;
                                if (style == 7)
                                    this.connectionStyle = RailNodeConnectionStyle.Special4D;
                                if (style == 8)
                                    this.connectionStyle = RailNodeConnectionStyle.SuspendedHorizontal;
                                if (style == 9)
                                    this.connectionStyle = RailNodeConnectionStyle.SuspendedVertical;
                            }
                        };
                        RailNode.prototype.getTrackIndex = function () {
                            return this.trackIndex;
                        };
                        RailNode.prototype.setTrackIndex = function (value) {
                            this.trackIndex = value;
                        };
                        return RailNode;
                    }(Support.ISupportNode));
                    Support.RailNode = RailNode;
                })(Support = Coaster.Support || (Coaster.Support = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Support;
                (function (Support_1) {
                    var Support = (function () {
                        function Support() {
                            this.freeNodes = [];
                            this.footers = [];
                            this.beams = [];
                            this.railNodes = [];
                        }
                        Support.prototype.getFreeNodes = function () {
                            return this.freeNodes;
                        };
                        Support.prototype.setFreeNodes = function (value) {
                            this.freeNodes = value;
                        };
                        Support.prototype.insertFreeNode = function (value) {
                            this.freeNodes.push(value);
                        };
                        Support.prototype.getFooters = function () {
                            return this.footers;
                        };
                        Support.prototype.setFooters = function (value) {
                            this.footers = value;
                        };
                        Support.prototype.insertFooter = function (value) {
                            this.footers.push(value);
                        };
                        Support.prototype.getBeams = function () {
                            return this.beams;
                        };
                        Support.prototype.setBeams = function (value) {
                            this.beams = value;
                        };
                        Support.prototype.insertBeam = function (value) {
                            this.beams.push(value);
                        };
                        Support.prototype.getRailNodes = function () {
                            return this.railNodes;
                        };
                        Support.prototype.setRailNodes = function (value) {
                            this.railNodes = value;
                        };
                        Support.prototype.insertRailNode = function (value) {
                            this.railNodes.push(value);
                        };
                        return Support;
                    }());
                    Support_1.Support = Support;
                })(Support = Coaster.Support || (Coaster.Support = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track_1) {
                    (function (TrackType) {
                        TrackType[TrackType["Custom"] = 0] = "Custom";
                        TrackType[TrackType["SpecialTrack"] = 1] = "SpecialTrack";
                    })(Track_1.TrackType || (Track_1.TrackType = {}));
                    var TrackType = Track_1.TrackType;
                    var Track = (function () {
                        function Track() {
                            this.trackType = TrackType.Custom;
                        }
                        Track.prototype.getTrackType = function () {
                            return this.trackType;
                        };
                        Track.prototype.setTrackType = function (value) {
                            this.trackType = value;
                        };
                        return Track;
                    }());
                    Track_1.Track = Track;
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Vertex = (function () {
                        function Vertex(object) {
                            if (object === void 0) { object = null; }
                            this.position = vec4.fromValues(0, 0, 0, 1);
                            this.locked = false;
                            this.strict = false;
                            if (object !== null)
                                this.setFromObject(object);
                        }
                        Vertex.prototype.getPosition = function () {
                            return this.position;
                        };
                        Vertex.prototype.setPosition = function (value) {
                            this.position = value;
                        };
                        Vertex.prototype.getLocked = function () {
                            return this.locked;
                        };
                        Vertex.prototype.setLocked = function (value) {
                            this.locked = value;
                        };
                        Vertex.prototype.isStrict = function () {
                            return this.strict;
                        };
                        Vertex.prototype.setStrict = function (value) {
                            this.strict = value;
                        };
                        Vertex.prototype.setFromObject = function (value) {
                            this.setLocked(value.locked);
                            this.setStrict(value.strict);
                            this.setPosition(vec4.fromValues(value.position[0], value.position[1], value.position[2], value.position[3]));
                        };
                        return Vertex;
                    }());
                    Track.Vertex = Vertex;
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Section;
                    (function (Section_1) {
                        (function (SectionType) {
                            SectionType[SectionType["Track"] = 0] = "Track";
                            SectionType[SectionType["Transport"] = 1] = "Transport";
                            SectionType[SectionType["Lift"] = 2] = "Lift";
                            SectionType[SectionType["Brake"] = 3] = "Brake";
                            SectionType[SectionType["Station"] = 4] = "Station";
                            SectionType[SectionType["Storage"] = 5] = "Storage";
                        })(Section_1.SectionType || (Section_1.SectionType = {}));
                        var SectionType = Section_1.SectionType;
                        var Section = (function () {
                            function Section() {
                                this.sectionType = SectionType.Track;
                                this.name = "";
                            }
                            Section.prototype.getSectionType = function () {
                                return this.sectionType;
                            };
                            Section.prototype.setSectionType = function (value) {
                                this.sectionType = value;
                            };
                            Section.prototype.getName = function () {
                                return this.name;
                            };
                            Section.prototype.setName = function (value) {
                                this.name = value;
                            };
                            return Section;
                        }());
                        Section_1.Section = Section;
                    })(Section = Track.Section || (Track.Section = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Segment;
                    (function (Segment_1) {
                        (function (SegmentSpineColorScheme) {
                            SegmentSpineColorScheme[SegmentSpineColorScheme["Plain"] = 0] = "Plain";
                            SegmentSpineColorScheme[SegmentSpineColorScheme["TopAccented"] = 1] = "TopAccented";
                            SegmentSpineColorScheme[SegmentSpineColorScheme["BottomAccented"] = 2] = "BottomAccented";
                            SegmentSpineColorScheme[SegmentSpineColorScheme["Stripe"] = 3] = "Stripe";
                        })(Segment_1.SegmentSpineColorScheme || (Segment_1.SegmentSpineColorScheme = {}));
                        var SegmentSpineColorScheme = Segment_1.SegmentSpineColorScheme;
                        (function (SegmentTunnel) {
                            SegmentTunnel[SegmentTunnel["None"] = 0] = "None";
                            SegmentTunnel[SegmentTunnel["Steel"] = 1] = "Steel";
                            SegmentTunnel[SegmentTunnel["Wooden"] = 2] = "Wooden";
                            SegmentTunnel[SegmentTunnel["RoundConcrete"] = 3] = "RoundConcrete";
                            SegmentTunnel[SegmentTunnel["RectangularConcrete"] = 4] = "RectangularConcrete";
                            SegmentTunnel[SegmentTunnel["Virtual"] = 5] = "Virtual";
                        })(Segment_1.SegmentTunnel || (Segment_1.SegmentTunnel = {}));
                        var SegmentTunnel = Segment_1.SegmentTunnel;
                        (function (SegmentTieSpacing) {
                            SegmentTieSpacing[SegmentTieSpacing["LowestStress"] = 0] = "LowestStress";
                            SegmentTieSpacing[SegmentTieSpacing["LowerStress"] = 1] = "LowerStress";
                            SegmentTieSpacing[SegmentTieSpacing["LowStress"] = 2] = "LowStress";
                            SegmentTieSpacing[SegmentTieSpacing["Normal"] = 3] = "Normal";
                            SegmentTieSpacing[SegmentTieSpacing["HighStress"] = 4] = "HighStress";
                            SegmentTieSpacing[SegmentTieSpacing["HighestStress"] = 5] = "HighestStress";
                        })(Segment_1.SegmentTieSpacing || (Segment_1.SegmentTieSpacing = {}));
                        var SegmentTieSpacing = Segment_1.SegmentTieSpacing;
                        var Segment = (function () {
                            function Segment() {
                                this.invisibleSegment = false;
                                this.leftRailingAndCatwalk = false;
                                this.leftRailingLights = false;
                                this.leftRailingLightsColor = vec3.fromValues(0, 0, 0);
                                this.rightRailingAndCatwalk = false;
                                this.rightRailingLights = false;
                                this.rightRailingLightsColor = vec3.fromValues(0, 0, 0);
                                this.transparentCatwalks = false;
                                this.useRailsColor = false;
                                this.useCrossTiesColor = false;
                                this.useMainSpineColor = false;
                                this.useHandrailsColor = false;
                                this.useCatwalksColor = false;
                                this.railColor = vec3.fromValues(0, 0, 0);
                                this.crossTiesColor = vec3.fromValues(0, 0, 0);
                                this.mainSpineColor = vec3.fromValues(0, 0, 0);
                                this.handrailsColor = vec3.fromValues(0, 0, 0);
                                this.catwalksColor = vec3.fromValues(0, 0, 0);
                                this.useSpineColorScheme = false;
                                this.spineColorScheme = SegmentSpineColorScheme.Plain;
                                this.tunnel = SegmentTunnel.None;
                                this.spineType = 0;
                                this.tieSpacing = SegmentTieSpacing.Normal;
                                this.woodenSupportGenerator = new Segment_1.WoodenGenerator();
                            }
                            Segment.prototype.getInvisibleSegment = function () {
                                return this.invisibleSegment;
                            };
                            Segment.prototype.setInvisibleSegment = function (value) {
                                this.invisibleSegment = value;
                            };
                            Segment.prototype.getLeftRailingAndCatwalk = function () {
                                return this.leftRailingAndCatwalk;
                            };
                            Segment.prototype.setLeftRailingAndCatwalk = function (value) {
                                this.leftRailingAndCatwalk = value;
                            };
                            Segment.prototype.getLeftRailingLights = function () {
                                return this.leftRailingLights;
                            };
                            Segment.prototype.setLeftRailingLights = function (value) {
                                this.leftRailingLights = value;
                            };
                            Segment.prototype.getLeftRailingLightsColor = function () {
                                return this.leftRailingLightsColor;
                            };
                            Segment.prototype.setLeftRailingLightsColor = function (value) {
                                this.leftRailingLightsColor = value;
                            };
                            Segment.prototype.getRightRailingAndCatwalk = function () {
                                return this.rightRailingAndCatwalk;
                            };
                            Segment.prototype.setRightRailingAndCatwalk = function (value) {
                                this.rightRailingAndCatwalk = value;
                            };
                            Segment.prototype.getRightRailingLights = function () {
                                return this.rightRailingLights;
                            };
                            Segment.prototype.setRightRailingLights = function (value) {
                                this.rightRailingLights = value;
                            };
                            Segment.prototype.getRightRailingLightsColor = function () {
                                return this.rightRailingLightsColor;
                            };
                            Segment.prototype.setRightRailingLightsColor = function (value) {
                                this.rightRailingLightsColor = value;
                            };
                            Segment.prototype.getTransparentCatwalks = function () {
                                return this.transparentCatwalks;
                            };
                            Segment.prototype.setTransparentCatwalks = function (value) {
                                this.transparentCatwalks = value;
                            };
                            Segment.prototype.getUseRailsColor = function () {
                                return this.useRailsColor;
                            };
                            Segment.prototype.setUseRailsColor = function (value) {
                                this.useRailsColor = value;
                            };
                            Segment.prototype.getUseCrossTiesColor = function () {
                                return this.useCrossTiesColor;
                            };
                            Segment.prototype.setUseCrossTiesColor = function (value) {
                                this.useCrossTiesColor = value;
                            };
                            Segment.prototype.getUseMainSpineColor = function () {
                                return this.useMainSpineColor;
                            };
                            Segment.prototype.setUseMainSpineColor = function (value) {
                                this.useMainSpineColor = value;
                            };
                            Segment.prototype.getUseHandrailsColor = function () {
                                return this.useHandrailsColor;
                            };
                            Segment.prototype.setUseHandrailsColor = function (value) {
                                this.useHandrailsColor = value;
                            };
                            Segment.prototype.getUseCatwalksColor = function () {
                                return this.useCatwalksColor;
                            };
                            Segment.prototype.setUseCatwalksColor = function (value) {
                                this.useCatwalksColor = value;
                            };
                            Segment.prototype.getRailColor = function () {
                                return this.railColor;
                            };
                            Segment.prototype.setRailColor = function (value) {
                                this.railColor = value;
                            };
                            Segment.prototype.getCrossTiesColor = function () {
                                return this.crossTiesColor;
                            };
                            Segment.prototype.setCrossTiesColor = function (value) {
                                this.crossTiesColor = value;
                            };
                            Segment.prototype.getMainSpineColor = function () {
                                return this.mainSpineColor;
                            };
                            Segment.prototype.setMainSpineColor = function (value) {
                                this.mainSpineColor = value;
                            };
                            Segment.prototype.getHandrailsColor = function () {
                                return this.handrailsColor;
                            };
                            Segment.prototype.setHandrailsColor = function (value) {
                                this.handrailsColor = value;
                            };
                            Segment.prototype.getCatwalksColor = function () {
                                return this.catwalksColor;
                            };
                            Segment.prototype.setCatwalksColor = function (value) {
                                this.catwalksColor = value;
                            };
                            Segment.prototype.getUseSpineColorScheme = function () {
                                return this.useSpineColorScheme;
                            };
                            Segment.prototype.setUseSpineColorScheme = function (value) {
                                this.useSpineColorScheme = value;
                            };
                            Segment.prototype.getSpineColorScheme = function () {
                                return this.spineColorScheme;
                            };
                            Segment.prototype.setSpineColorScheme = function (value) {
                                this.spineColorScheme = value;
                            };
                            Segment.prototype.getTunnel = function () {
                                return this.tunnel;
                            };
                            Segment.prototype.setTunnel = function (value) {
                                this.tunnel = value;
                            };
                            Segment.prototype.getSpineType = function () {
                                return this.spineType;
                            };
                            Segment.prototype.setSpineType = function (value) {
                                this.spineType = value;
                            };
                            Segment.prototype.getTieSpacing = function () {
                                return this.tieSpacing;
                            };
                            Segment.prototype.setTieSpacing = function (value) {
                                this.tieSpacing = value;
                            };
                            Segment.prototype.getWoodenSupportGenerator = function () {
                                return this.woodenSupportGenerator;
                            };
                            Segment.prototype.setWoodenSupportGenerator = function (value) {
                                this.woodenSupportGenerator = value;
                            };
                            return Segment;
                        }());
                        Segment_1.Segment = Segment;
                    })(Segment = Track.Segment || (Track.Segment = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Separator = (function () {
                        function Separator() {
                            this.position = 0;
                            this.section = new Track.Section.Section();
                            this.segment = new Track.Segment.Segment();
                        }
                        Separator.prototype.getPosition = function () {
                            return this.position;
                        };
                        Separator.prototype.setPosition = function (value) {
                            this.position = value;
                        };
                        Separator.prototype.getSection = function () {
                            return this.section;
                        };
                        Separator.prototype.setSection = function (value) {
                            this.section = value;
                        };
                        Separator.prototype.getSegment = function () {
                            return this.segment;
                        };
                        Separator.prototype.setSegment = function (value) {
                            this.segment = value;
                        };
                        return Separator;
                    }());
                    Track.Separator = Separator;
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Parameter4D = (function () {
                        function Parameter4D() {
                            this.position = 0;
                            this.roll = 0;
                        }
                        Parameter4D.prototype.getPosition = function () {
                            return this.position;
                        };
                        Parameter4D.prototype.setPosition = function (value) {
                            this.position = value;
                        };
                        Parameter4D.prototype.getRoll = function () {
                            return this.roll;
                        };
                        Parameter4D.prototype.setAngle = function (value) {
                            this.roll = value;
                        };
                        return Parameter4D;
                    }());
                    Track.Parameter4D = Parameter4D;
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    (function (TriggerTrainEvent) {
                        TriggerTrainEvent[TriggerTrainEvent["None"] = 0] = "None";
                        TriggerTrainEvent[TriggerTrainEvent["UnlockSpinning"] = 1] = "UnlockSpinning";
                        TriggerTrainEvent[TriggerTrainEvent["LockSpinning"] = 2] = "LockSpinning";
                        TriggerTrainEvent[TriggerTrainEvent["UnlockSwinging"] = 3] = "UnlockSwinging";
                        TriggerTrainEvent[TriggerTrainEvent["LockSwinging"] = 4] = "LockSwinging";
                    })(Track.TriggerTrainEvent || (Track.TriggerTrainEvent = {}));
                    var TriggerTrainEvent = Track.TriggerTrainEvent;
                    var Trigger = (function () {
                        function Trigger() {
                            this.position = 0;
                            this.name = "";
                            this.trainEvent = TriggerTrainEvent.None;
                        }
                        Trigger.prototype.getPosition = function () {
                            return this.position;
                        };
                        Trigger.prototype.setPosition = function (value) {
                            this.position = value;
                        };
                        Trigger.prototype.getName = function () {
                            return this.name;
                        };
                        Trigger.prototype.setName = function (value) {
                            this.name = value;
                        };
                        Trigger.prototype.getTrainEvent = function () {
                            return this.trainEvent;
                        };
                        Trigger.prototype.setTrainEvent = function (value) {
                            this.trainEvent = value;
                        };
                        return Trigger;
                    }());
                    Track.Trigger = Trigger;
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var RollPoint = (function () {
                        function RollPoint(object) {
                            if (object === void 0) { object = null; }
                            this.position = 0;
                            this.roll = 0;
                            this.vertical = false;
                            this.strict = false;
                            this.rollOffset = 0;
                            this.nodeIndex = 0;
                            if (object !== null)
                                this.setFromObject(object);
                        }
                        RollPoint.prototype.getPosition = function () {
                            return this.position;
                        };
                        RollPoint.prototype.setPosition = function (value) {
                            this.position = value;
                        };
                        RollPoint.prototype.getRoll = function () {
                            return this.roll;
                        };
                        RollPoint.prototype.setRoll = function (value) {
                            this.roll = value;
                        };
                        RollPoint.prototype.getRollOffset = function () {
                            return this.rollOffset;
                        };
                        RollPoint.prototype.setRollOffset = function (value) {
                            this.rollOffset = value;
                        };
                        RollPoint.prototype.getNodeIndex = function () {
                            return this.nodeIndex;
                        };
                        RollPoint.prototype.setNodeIndex = function (value) {
                            this.nodeIndex = value;
                        };
                        RollPoint.prototype.getVertical = function () {
                            return this.vertical;
                        };
                        RollPoint.prototype.setVertical = function (value) {
                            this.vertical = value;
                        };
                        RollPoint.prototype.isStrict = function () {
                            return this.strict;
                        };
                        RollPoint.prototype.setStrict = function (value) {
                            this.strict = value;
                        };
                        RollPoint.prototype.setFromObject = function (value) {
                            this.setPosition(value.position);
                            this.setRoll(value.roll);
                            this.setVertical(value.vertical);
                            this.setStrict(value.strict);
                            this.setRollOffset(value.rollOffset);
                            this.setNodeIndex(value.nodeIndex);
                        };
                        return RollPoint;
                    }());
                    Track.RollPoint = RollPoint;
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var CustomTrack = (function (_super) {
                        __extends(CustomTrack, _super);
                        function CustomTrack() {
                            _super.call(this);
                            this.vertices = [];
                            this.separators = [];
                            this.parameters4D = [];
                            this.triggers = [];
                            this.rollPoints = [];
                            this.railNodes = [];
                            this.firstRollPoint = new Track.RollPoint();
                            this.lastRollPoint = new Track.RollPoint();
                            this.section = new Track.Section.Section();
                            this.segment = new Track.Segment.Segment();
                            this.setTrackType(Track.TrackType.Custom);
                        }
                        CustomTrack.prototype.getVertices = function () {
                            return this.vertices;
                        };
                        CustomTrack.prototype.setVertices = function (value) {
                            this.vertices = value;
                        };
                        CustomTrack.prototype.insertVertex = function (value) {
                            this.vertices.push(value);
                        };
                        CustomTrack.prototype.getSeparators = function () {
                            return this.separators;
                        };
                        CustomTrack.prototype.setSeparators = function (value) {
                            this.separators = value;
                        };
                        CustomTrack.prototype.insertSeparator = function (value) {
                            this.separators.push(value);
                        };
                        CustomTrack.prototype.getParameters4D = function () {
                            return this.parameters4D;
                        };
                        CustomTrack.prototype.setParameters4D = function (value) {
                            this.parameters4D = value;
                        };
                        CustomTrack.prototype.insertParameter4D = function (value) {
                            this.parameters4D.push(value);
                        };
                        CustomTrack.prototype.getTriggers = function () {
                            return this.triggers;
                        };
                        CustomTrack.prototype.setTriggers = function (value) {
                            this.triggers = value;
                        };
                        CustomTrack.prototype.insertTrigger = function (value) {
                            this.triggers.push(value);
                        };
                        CustomTrack.prototype.getRollPoints = function () {
                            return this.rollPoints;
                        };
                        CustomTrack.prototype.setRollPoints = function (value) {
                            this.rollPoints = value;
                        };
                        CustomTrack.prototype.insertRollPoint = function (value) {
                            this.rollPoints.push(value);
                        };
                        CustomTrack.prototype.getSection = function () {
                            return this.section;
                        };
                        CustomTrack.prototype.setSection = function (value) {
                            this.section = value;
                        };
                        CustomTrack.prototype.getSegment = function () {
                            return this.segment;
                        };
                        CustomTrack.prototype.setSegment = function (value) {
                            this.segment = value;
                        };
                        CustomTrack.prototype.getFirstRollPoint = function () {
                            return this.firstRollPoint;
                        };
                        CustomTrack.prototype.setFirstRollPoint = function (value) {
                            this.firstRollPoint = value;
                        };
                        CustomTrack.prototype.getLastRollPoint = function () {
                            return this.lastRollPoint;
                        };
                        CustomTrack.prototype.setLastRollPoint = function (value) {
                            this.lastRollPoint = value;
                        };
                        CustomTrack.prototype.getRailNodes = function () {
                            return this.railNodes;
                        };
                        CustomTrack.prototype.setRailNodes = function (value) {
                            this.railNodes = value;
                        };
                        CustomTrack.prototype.insertRailNode = function (value) {
                            this.railNodes.push(value);
                        };
                        return CustomTrack;
                    }(Track.Track));
                    Track.CustomTrack = CustomTrack;
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Train;
                (function (Train) {
                    var IndividualColor = (function () {
                        function IndividualColor() {
                            this.hasIndividualColor = false;
                            this.carColor = vec3.fromValues(0, 0, 0);
                            this.seatColor = vec3.fromValues(0, 0, 0);
                            this.harnessColor = vec3.fromValues(0, 0, 0);
                            this.bogieColor = vec3.fromValues(0, 0, 0);
                            this.chassisColor = vec3.fromValues(0, 0, 0);
                            this.carTexture1 = "";
                            this.carTexture2 = "";
                        }
                        IndividualColor.prototype.getCarColor = function () {
                            return this.carColor;
                        };
                        IndividualColor.prototype.setCarColor = function (value) {
                            this.carColor = value;
                        };
                        IndividualColor.prototype.getSeatColor = function () {
                            return this.seatColor;
                        };
                        IndividualColor.prototype.setSeatColor = function (value) {
                            this.seatColor = value;
                        };
                        IndividualColor.prototype.getHarnessColor = function () {
                            return this.harnessColor;
                        };
                        IndividualColor.prototype.setHarnessColor = function (value) {
                            this.harnessColor = value;
                        };
                        IndividualColor.prototype.getBogieColor = function () {
                            return this.bogieColor;
                        };
                        IndividualColor.prototype.setBogieColor = function (value) {
                            this.bogieColor = value;
                        };
                        IndividualColor.prototype.getChassisColor = function () {
                            return this.chassisColor;
                        };
                        IndividualColor.prototype.setChassisColor = function (value) {
                            this.chassisColor = value;
                        };
                        IndividualColor.prototype.getCarTexture1 = function () {
                            return this.carTexture1;
                        };
                        IndividualColor.prototype.setCarTexture1 = function (value) {
                            this.carTexture1 = value;
                        };
                        IndividualColor.prototype.getCarTexture2 = function () {
                            return this.carTexture2;
                        };
                        IndividualColor.prototype.setCarTexture2 = function (value) {
                            this.carTexture2 = value;
                        };
                        IndividualColor.prototype.getHasIndividualColor = function () {
                            return this.hasIndividualColor;
                        };
                        IndividualColor.prototype.setHasIndividualColor = function (value) {
                            this.hasIndividualColor = value;
                        };
                        return IndividualColor;
                    }());
                    Train.IndividualColor = IndividualColor;
                })(Train = Coaster.Train || (Coaster.Train = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Train;
                (function (Train) {
                    var Car = (function () {
                        function Car() {
                            this.individualColor = new Train.IndividualColor();
                            this.isZeroCar = false;
                        }
                        Car.prototype.getIndividualColor = function () {
                            return this.individualColor;
                        };
                        Car.prototype.setIndividualColor = function (value) {
                            this.individualColor = value;
                        };
                        Car.prototype.getIsZeroCar = function () {
                            return this.isZeroCar;
                        };
                        Car.prototype.setIsZeroCar = function (value) {
                            this.isZeroCar = value;
                        };
                        return Car;
                    }());
                    Train.Car = Car;
                })(Train = Coaster.Train || (Coaster.Train = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Train;
                (function (Train_1) {
                    var Train = (function () {
                        function Train() {
                            this.cars = [];
                            this.individualColor = new Train_1.IndividualColor();
                            this.runBackward = false;
                            this.removedFromTrack = false;
                            this.startBlock = "";
                        }
                        Train.prototype.getCars = function () {
                            return this.cars;
                        };
                        Train.prototype.setCars = function (value) {
                            this.cars = value;
                        };
                        Train.prototype.insertCar = function (value) {
                            this.cars.push(value);
                        };
                        Train.prototype.getIndividualColor = function () {
                            return this.individualColor;
                        };
                        Train.prototype.setIndividualColor = function (value) {
                            this.individualColor = value;
                        };
                        Train.prototype.getRunBackward = function () {
                            return this.runBackward;
                        };
                        Train.prototype.setRunBackward = function (value) {
                            this.runBackward = value;
                        };
                        Train.prototype.getRemovedFromTrack = function () {
                            return this.removedFromTrack;
                        };
                        Train.prototype.setRemovedFromTrack = function (value) {
                            this.removedFromTrack = value;
                        };
                        Train.prototype.getStartBlock = function () {
                            return this.startBlock;
                        };
                        Train.prototype.setStartBlock = function (value) {
                            this.startBlock = value;
                        };
                        return Train;
                    }());
                    Train_1.Train = Train;
                })(Train = Coaster.Train || (Coaster.Train = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster_1) {
                var TrackType = NLParkViewer.NoLimits.Chunks.Coaster.Track.TrackType;
                var Coaster = (function () {
                    function Coaster() {
                        this.name = "";
                        this.description = "";
                        this.numberOfCarsPerTrain = 0;
                        this.tracks = [];
                        this.supports = new Coaster_1.Support.Support();
                        this.trains = [];
                        this.scripts = [];
                        this.fileScripts = [];
                        this.style = new Coaster_1.Style();
                        this.colors = new Coaster_1.Colors();
                        this.mode = new Coaster_1.Mode();
                        this.hideWireframe = false;
                        this.freezed = false;
                    }
                    Coaster.prototype.getName = function () {
                        return this.name;
                    };
                    Coaster.prototype.setName = function (value) {
                        this.name = value;
                    };
                    Coaster.prototype.getDescription = function () {
                        return this.description;
                    };
                    Coaster.prototype.setDescription = function (value) {
                        this.description = value;
                    };
                    Coaster.prototype.getTracks = function () {
                        return this.tracks;
                    };
                    Coaster.prototype.setTracks = function (value) {
                        this.tracks = value;
                    };
                    Coaster.prototype.insertTrack = function (value) {
                        this.tracks.push(value);
                    };
                    Coaster.prototype.getSupports = function () {
                        return this.supports;
                    };
                    Coaster.prototype.setSupports = function (value) {
                        this.supports = value;
                    };
                    Coaster.prototype.getNumberOfCarsPerTrain = function () {
                        return this.numberOfCarsPerTrain;
                    };
                    Coaster.prototype.setNumberOfCarsPerTrain = function (value) {
                        this.numberOfCarsPerTrain = value;
                    };
                    Coaster.prototype.getTrains = function () {
                        return this.trains;
                    };
                    Coaster.prototype.setTrains = function (value) {
                        this.trains = value;
                    };
                    Coaster.prototype.insertTrain = function (value) {
                        this.trains.push(value);
                    };
                    Coaster.prototype.getScripts = function () {
                        return this.scripts;
                    };
                    Coaster.prototype.setScripts = function (value) {
                        this.scripts = value;
                    };
                    Coaster.prototype.insertScript = function (value) {
                        this.scripts.push(value);
                    };
                    Coaster.prototype.getFileScripts = function () {
                        return this.fileScripts;
                    };
                    Coaster.prototype.setFileScripts = function (value) {
                        this.fileScripts = value;
                    };
                    Coaster.prototype.insertFileScripts = function (value) {
                        this.fileScripts.push(value);
                    };
                    Coaster.prototype.getColors = function () {
                        return this.colors;
                    };
                    Coaster.prototype.setColors = function (value) {
                        this.colors = value;
                    };
                    Coaster.prototype.getMode = function () {
                        return this.mode;
                    };
                    Coaster.prototype.setMode = function (value) {
                        this.mode = value;
                    };
                    Coaster.prototype.getHideWireframe = function () {
                        return this.hideWireframe;
                    };
                    Coaster.prototype.setHideWireframe = function (value) {
                        this.hideWireframe = value;
                    };
                    Coaster.prototype.getFreezed = function () {
                        return this.freezed;
                    };
                    Coaster.prototype.setFreezed = function (value) {
                        this.freezed = value;
                    };
                    Coaster.prototype.getStyle = function () {
                        return this.style;
                    };
                    Coaster.prototype.setStyle = function (value) {
                        this.style = value;
                    };
                    Coaster.prototype.finalize = function () {
                        for (var i = 0; i < this.trains.length; i++) {
                            var train = this.trains[i];
                            if (train.getCars().length && this.numberOfCarsPerTrain != train.getCars().length) {
                                train.getCars()[0].setIsZeroCar(true);
                            }
                        }
                        for (var i = 0; i < this.tracks.length; i++) {
                            if (this.tracks[i].getTrackType() == TrackType.Custom) {
                                var customTrack = (this.tracks[i]);
                                for (var j = 0; j < customTrack.getRailNodes().length; j++) {
                                    this.getSupports().insertRailNode(customTrack.getRailNodes()[j]);
                                }
                            }
                        }
                    };
                    return Coaster;
                }());
                Coaster_1.Coaster = Coaster;
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Support;
                (function (Support) {
                    var FreeNodes = (function (_super) {
                        __extends(FreeNodes, _super);
                        function FreeNodes() {
                            _super.apply(this, arguments);
                        }
                        FreeNodes.prototype.read = function (reader) {
                            reader.readNull(8);
                            var numberOfFreeNodes = reader.readInt();
                            for (var i = 0; i < numberOfFreeNodes; i++) {
                                var freeNode = new NoLimits.Chunks.Coaster.Support.FreeNode();
                                freeNode.setPosition(reader.readDoubleVec3());
                                this.data.insertFreeNode(freeNode);
                                reader.readNull(4);
                            }
                        };
                        return FreeNodes;
                    }(Stream.ChunkStream));
                    Support.FreeNodes = FreeNodes;
                })(Support = Coaster.Support || (Coaster.Support = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Support;
                (function (Support) {
                    var Footers = (function (_super) {
                        __extends(Footers, _super);
                        function Footers() {
                            _super.apply(this, arguments);
                        }
                        Footers.prototype.read = function (reader) {
                            reader.readNull(8);
                            var numberOfFooters = reader.readInt();
                            for (var i = 0; i < numberOfFooters; i++) {
                                var footer = new NoLimits.Chunks.Coaster.Support.Footer();
                                footer.setPosition(reader.readDoubleVec3());
                                footer.setRotationAngle(reader.readFloat());
                                footer.setAboveGround(reader.readFloat());
                                reader.readNull(3);
                                footer.setConnectionStyle(reader.readByte());
                                reader.readNull(3);
                                footer.setColorMode(reader.readByte());
                                footer.setCustomColor(reader.readColor());
                                reader.readNull(3);
                                footer.setBaseStyle(reader.readByte());
                                reader.readNull(9);
                                this.data.insertFooter(footer);
                            }
                        };
                        return Footers;
                    }(Stream.ChunkStream));
                    Support.Footers = Footers;
                })(Support = Coaster.Support || (Coaster.Support = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Support;
                (function (Support) {
                    var BeamConnection = NLParkViewer.NoLimits.Chunks.Coaster.Support.BeamConnection;
                    var Beam = NLParkViewer.NoLimits.Chunks.Coaster.Support.Beam;
                    var BeamNode = NLParkViewer.NoLimits.Chunks.Coaster.Support.BeamNode;
                    var Beams = (function (_super) {
                        __extends(Beams, _super);
                        function Beams() {
                            _super.apply(this, arguments);
                        }
                        Beams.prototype.read = function (reader) {
                            reader.readNull(8);
                            var numberOfBeams = reader.readInt();
                            for (var i = 0; i < numberOfBeams; i++) {
                                var beam = new Beam();
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
                                var numberOfBeamNodes = reader.readInt();
                                for (var j = 0; j < numberOfBeamNodes; j++) {
                                    var beamNode = new BeamNode();
                                    beamNode.setPosition(reader.readFloat());
                                    beamNode.setIsFlange(reader.readBoolean());
                                    beam.insertBeamNodes(beamNode);
                                    reader.readNull(11);
                                }
                                this.data.insertBeam(beam);
                            }
                        };
                        Beams.prototype.readBeamConnection = function (reader) {
                            var bc = new BeamConnection();
                            bc.setType(reader.readInt());
                            bc.setIndex(reader.readInt());
                            bc.setIndexOnBeam(reader.readInt());
                            bc.setIndexOnRailConnector(reader.readInt());
                            return bc;
                        };
                        return Beams;
                    }(Stream.ChunkStream));
                    Support.Beams = Beams;
                })(Support = Coaster.Support || (Coaster.Support = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Support;
                (function (Support_2) {
                    var Support = (function (_super) {
                        __extends(Support, _super);
                        function Support() {
                            _super.apply(this, arguments);
                        }
                        Support.prototype.read = function (reader) {
                            for (var i = 0; i <= reader.getFilesize(); i++) {
                                reader.setStreamPosition(i);
                                var chunk = reader.readChunkName();
                                if (chunk == "FREE") {
                                    (new Support_2.FreeNodes(reader.getChunkStreamReader(), this.data)).readChunk();
                                    i = reader.getStreamPosition() - 1;
                                }
                                if (chunk == "FOOT") {
                                    (new Support_2.Footers(reader.getChunkStreamReader(), this.data)).readChunk();
                                    i = reader.getStreamPosition() - 1;
                                }
                                if (chunk == "BEAM") {
                                    (new Support_2.Beams(reader.getChunkStreamReader(), this.data)).readChunk();
                                    i = reader.getStreamPosition() - 1;
                                }
                                if (chunk == "PRFT") {
                                    reader.getChunkStreamReader();
                                    i = reader.getStreamPosition() - 1;
                                }
                            }
                        };
                        return Support;
                    }(Stream.ChunkStream));
                    Support_2.Support = Support;
                })(Support = Coaster.Support || (Coaster.Support = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Train;
                (function (Train_2) {
                    var Train = (function (_super) {
                        __extends(Train, _super);
                        function Train() {
                            _super.apply(this, arguments);
                        }
                        Train.prototype.read = function (reader) {
                            reader.readNull(1);
                            this.data.setStartBlock(reader.readString());
                            reader.readNull(1);
                            reader.readNull(7);
                            this.data.setRunBackward(reader.readBoolean());
                            this.data.setRemovedFromTrack(reader.readBoolean());
                            for (var i = 0; i <= reader.getFilesize(); i++) {
                                reader.setStreamPosition(i);
                                var chunk = reader.readChunkName();
                                if (chunk == "CAR ") {
                                    var car = new NoLimits.Chunks.Coaster.Train.Car();
                                    this.data.insertCar(car);
                                    var carStream = new Train_2.Car(reader.getChunkStreamReader(), car);
                                    carStream.readChunk();
                                }
                                if (chunk == "INDC") {
                                    var individualColor = new NoLimits.Chunks.Coaster.Train.IndividualColor();
                                    this.data.setIndividualColor(individualColor);
                                    var individualColorStream = new Train_2.IndividualColor(reader.getChunkStreamReader(), individualColor);
                                    individualColorStream.readChunk();
                                }
                            }
                        };
                        return Train;
                    }(Stream.ChunkStream));
                    Train_2.Train = Train;
                })(Train = Coaster.Train || (Coaster.Train = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster_2) {
                var Coaster = (function (_super) {
                    __extends(Coaster, _super);
                    function Coaster() {
                        _super.apply(this, arguments);
                    }
                    Coaster.prototype.read = function (reader) {
                        this.data.setName(reader.readString());
                        this.data.getColors().setWireframeTrack(reader.readColor());
                        this.data.getMode().setSplinePosition(reader.readByte());
                        this.data.getMode().setSplinePositionOffset(reader.readDoubleVec2());
                        this.data.setDescription(reader.readString());
                        reader.readNull(3);
                        this.data.getStyle().setStyleType(reader.readByte());
                        this.data.getColors().setRails(reader.readColor());
                        this.data.getColors().setCrossTies(reader.readColor());
                        this.data.getColors().setMainSpine(reader.readColor());
                        this.data.getColors().setCar(reader.readColor());
                        this.data.getColors().setSeat(reader.readColor());
                        this.data.getColors().setHarness(reader.readColor());
                        this.data.getColors().setBogie(reader.readColor());
                        this.data.setFreezed(reader.readBoolean());
                        this.data.getColors().setSpineColorScheme(reader.readByte());
                        this.data.getColors().setSupports(reader.readColor());
                        this.data.getColors().setTunnel(reader.readColor());
                        this.data.getStyle().setWornType(reader.readByte());
                        this.data.getColors().setChasiss(reader.readColor());
                        this.data.getMode().setOperationMode(reader.readByte());
                        this.data.getStyle().setRailType(reader.readByte());
                        this.data.getColors().setHandrails(reader.readColor());
                        this.data.getColors().setCatwalks(reader.readColor());
                        this.data.getMode().setPhysicsModel(reader.readByte());
                        this.data.setHideWireframe(reader.readBoolean());
                        this.data.setNumberOfCarsPerTrain(reader.readByte());
                        for (var i = 0; i <= reader.getFilesize(); i++) {
                            reader.setStreamPosition(i);
                            var chunk = reader.readChunkName();
                            if (chunk == "SUPP") {
                                var support = new NoLimits.Chunks.Coaster.Support.Support();
                                this.data.setSupports(support);
                                (new Coaster_2.Support.Support(reader.getChunkStreamReader(), support)).readChunk();
                                i = reader.getStreamPosition() - 1;
                            }
                            if (chunk == "TRAI") {
                                var train = new NoLimits.Chunks.Coaster.Train.Train();
                                this.data.insertTrain(train);
                                (new Coaster_2.Train.Train(reader.getChunkStreamReader(), train)).readChunk();
                                i = reader.getStreamPosition() - 1;
                            }
                            if (chunk == "SCRT") {
                                var script = new NoLimits.Chunks.Coaster.Script();
                                this.data.insertScript(script);
                                (new Coaster_2.Script(reader.getChunkStreamReader(), script)).readChunk();
                                i = reader.getStreamPosition() - 1;
                            }
                            if (chunk == "CUTK") {
                                var track = new NoLimits.Chunks.Coaster.Track.CustomTrack();
                                this.data.insertTrack(track);
                                var trackReader = new Coaster_2.Track.CustomTrack(reader.getChunkStreamReader(), track);
                                trackReader.trackIndex = this.data.getTracks().length - 1;
                                trackReader.readChunk();
                                i = reader.getStreamPosition() - 1;
                            }
                            if (chunk == "SPTK") {
                                (new Coaster_2.Track.SpecialTrack.SpecialTrack(reader.getChunkStreamReader(), this.data)).readChunk();
                                i = reader.getStreamPosition() - 1;
                            }
                            if (chunk == "FSCR") {
                                var scriptStream = reader.getChunkStreamReader();
                                scriptStream.readNull(4);
                                var numScripts = scriptStream.readInt();
                                for (var k = 0; k < numScripts; k++) {
                                    this.data.insertFileScripts(scriptStream.readString());
                                    scriptStream.readNull(8);
                                }
                                i = reader.getStreamPosition() - 1;
                            }
                            if (chunk == "CUFR") {
                                var customFrictionReader = reader.getChunkStreamReader();
                                customFrictionReader.readNull(4);
                                this.data.getMode().getCustomFriction().setConstFrictionParameter(customFrictionReader.readDouble());
                                this.data.getMode().getCustomFriction().setAirResistanceParameter(customFrictionReader.readDouble());
                                i = reader.getStreamPosition() - 1;
                            }
                        }
                        this.data.finalize();
                    };
                    return Coaster;
                }(Stream.ChunkStream));
                Coaster_2.Coaster = Coaster;
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Park = (function (_super) {
                __extends(Park, _super);
                function Park() {
                    _super.apply(this, arguments);
                }
                Park.prototype.read = function (reader) {
                    for (var i = 0; i <= reader.getFilesize(); i++) {
                        reader.setStreamPosition(i);
                        var chunk = reader.readChunkName();
                        if (chunk == "INFO") {
                            (new Stream.Info(reader.getChunkStreamReader(), this.data.getInfo())).readChunk();
                            i = reader.getStreamPosition() - 1;
                        }
                        if (chunk == "COAS") {
                            var coaster = new NoLimits.Chunks.Coaster.Coaster();
                            this.data.setCoaster(coaster);
                            var coasterStream = new Stream.Coaster.Coaster(reader.getChunkStreamReader(), coaster);
                            coasterStream.readChunk();
                            i = reader.getStreamPosition() - 1;
                        }
                        if (chunk == "TERC") {
                            reader.getChunkStreamReader();
                            i = reader.getStreamPosition() - 1;
                        }
                        if (chunk == "SCEN") {
                            reader.getChunkStreamReader();
                            i = reader.getStreamPosition() - 1;
                        }
                        if (chunk == "USPK") {
                            reader.getChunkStreamReader();
                            i = reader.getStreamPosition() - 1;
                        }
                    }
                };
                return Park;
            }(Stream.ChunkStream));
            Stream.Park = Park;
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var ParkStream = (function (_super) {
            __extends(ParkStream, _super);
            function ParkStream() {
                _super.apply(this, arguments);
                this.startTime = null;
            }
            ParkStream.prototype.open = function (data, name) {
                var reader = new NoLimits.Stream.Reader(data);
                var park = new NoLimits.Chunks.Park();
                var parkReader = new NoLimits.Stream.Park(reader, park);
                parkReader.readChunk();
                console.log("Parsed", name, "Successfully (", ((new Date()) - this.startTime), "ms )");
                this.dispatchEvent(new NLParkViewer.Event("load", park));
            };
            ParkStream.prototype.openFormURL = function (url) {
                var _this = this;
                this.startTime = new Date();
                var request = new XMLHttpRequest();
                request.responseType = "arraybuffer";
                request.addEventListener("load", function () {
                    if (request.status >= 200 && request.status < 400) {
                        var data = new Int8Array(request.response);
                        _this.open(data, url);
                    }
                });
                request.open('GET', url, true);
                request.send();
            };
            ParkStream.prototype.openFromFile = function (files) {
                var _this = this;
                this.startTime = new Date();
                if (files.length) {
                    var fileReader_1 = new FileReader();
                    fileReader_1.addEventListener("load", function (event) {
                        var data = new Int8Array(fileReader_1.result);
                        _this.open(data, files[0].name);
                    });
                    fileReader_1.readAsArrayBuffer(files[0]);
                }
            };
            return ParkStream;
        }(NLParkViewer.EventDispatcher));
        NoLimits.ParkStream = ParkStream;
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var Maths;
    (function (Maths) {
        var MathUtils = (function () {
            function MathUtils() {
            }
            MathUtils.getEpsilon = function () {
                var e = 1.0;
                while ((1.0 + 0.5 * e) !== 1.0)
                    e *= 0.5;
                return e;
            };
            MathUtils.init = function () {
                MathUtils.epsilon = MathUtils.getEpsilon();
            };
            MathUtils.radians = function (a) {
                return a * Math.PI / 180.0;
            };
            MathUtils.degrees = function (a) {
                return a * (180 / Math.PI);
            };
            MathUtils.multiplyQuatVec3 = function (q, v) {
                var uv;
                var uuv;
                var quatVector = vec3.fromValues(q[0], q[1], q[2]);
                uv = vec3.cross(vec3.create(), quatVector, v);
                uuv = vec3.cross(vec3.create(), quatVector, uv);
                uv = vec3.scale(vec3.create(), uv, (2.0 * q[3]));
                uuv = vec3.scale(vec3.create(), uuv, 2.0);
                return vec3.add(vec3.create(), vec3.add(vec3.create(), v, uv), uuv);
            };
            MathUtils.multiplyMat4Vec4 = function (lhs, rhs) {
                return vec4.fromValues(lhs[0] * rhs[0] + lhs[4] * rhs[1] + lhs[8] * rhs[2] + lhs[12] * rhs[3], lhs[1] * rhs[0] + lhs[5] * rhs[1] + lhs[9] * rhs[2] + lhs[13] * rhs[3], lhs[2] * rhs[0] + lhs[6] * rhs[1] + lhs[10] * rhs[2] + lhs[14] * rhs[3], lhs[3] * rhs[0] + lhs[7] * rhs[1] + lhs[11] * rhs[2] + lhs[15] * rhs[3]);
            };
            MathUtils.multiplyMat4Vec4ToVec3 = function (lhs, rhs) {
                return vec3.fromValues(lhs[0] * rhs[0] + lhs[4] * rhs[1] + lhs[8] * rhs[2] + lhs[12] * rhs[3], lhs[1] * rhs[0] + lhs[5] * rhs[1] + lhs[9] * rhs[2] + lhs[13] * rhs[3], lhs[2] * rhs[0] + lhs[6] * rhs[1] + lhs[10] * rhs[2] + lhs[14] * rhs[3]);
            };
            MathUtils.debugMat4 = function (mat) {
                console.log(mat[0], mat[4], mat[8], mat[12], "\n", mat[1], mat[5], mat[9], mat[13], "\n", mat[2], mat[6], mat[10], mat[14], "\n", mat[3], mat[7], mat[11], mat[15], "\n");
            };
            MathUtils.epsilon = 0;
            return MathUtils;
        }());
        Maths.MathUtils = MathUtils;
    })(Maths = NLParkViewer.Maths || (NLParkViewer.Maths = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var Core;
    (function (Core) {
        var BinarySearch = (function () {
            function BinarySearch() {
            }
            BinarySearch.lowerBound = function (a, x) {
                var l = 0;
                var h = a.length;
                while (l < h) {
                    var mid = Math.floor((l + h) / 2);
                    if (x >= a[mid]) {
                        l = mid + 1;
                    }
                    else {
                        h = mid;
                    }
                }
                return l;
            };
            return BinarySearch;
        }());
        Core.BinarySearch = BinarySearch;
    })(Core = NLParkViewer.Core || (NLParkViewer.Core = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Document;
        (function (Document) {
            var TrackNode = (function () {
                function TrackNode(obj) {
                    if (obj === void 0) { obj = null; }
                    this.pos = vec3.fromValues(0, 0, 0);
                    this.angle = vec3.fromValues(0, 0, 0);
                    this.mat = mat4.fromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                    this.dist = 0;
                    this.roll = 0;
                    if (obj !== null)
                        this.setFromObject(obj);
                }
                TrackNode.prototype.setFromObject = function (obj) {
                    this.pos = vec3.fromValues(obj.pos[0], obj.pos[1], obj.pos[2]);
                    this.angle = vec3.fromValues(obj.angle[0], obj.angle[1], obj.angle[2]);
                    this.roll = obj.roll;
                    this.dist = obj.dist;
                    this.mat = mat4.fromValues(obj.mat[0], obj.mat[1], obj.mat[2], obj.mat[3], obj.mat[4], obj.mat[5], obj.mat[6], obj.mat[7], obj.mat[8], obj.mat[9], obj.mat[10], obj.mat[11], obj.mat[12], obj.mat[13], obj.mat[14], obj.mat[15]);
                };
                return TrackNode;
            }());
            Document.TrackNode = TrackNode;
        })(Document = NoLimits.Document || (NoLimits.Document = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Document;
        (function (Document) {
            var BinarySearch = NLParkViewer.Core.BinarySearch;
            var MathUtils = NLParkViewer.Maths.MathUtils;
            var CustomTrackSpline = (function () {
                function CustomTrackSpline(track) {
                    this.nodes = [];
                    this.nodesLen = [];
                    this.segmentLengths = [];
                    this.splineLength = 0;
                    this.vertices = [];
                    this.knots = [];
                    this.track = track;
                    this.vertices = this.track.getVertices();
                    this.update();
                }
                ;
                CustomTrackSpline.prototype.deBoor = function (k, degree, i, x, knotIndex, startIndex) {
                    if (k == 0) {
                        return [
                            this.vertices[startIndex + i].position[0] * this.vertices[startIndex + i].position[3],
                            this.vertices[startIndex + i].position[1] * this.vertices[startIndex + i].position[3],
                            this.vertices[startIndex + i].position[2] * this.vertices[startIndex + i].position[3],
                            this.vertices[startIndex + i].position[3]
                        ];
                    }
                    else {
                        var alpha = (x - this.knots[knotIndex][i]) / (this.knots[knotIndex][i + degree + 1 - k] - this.knots[knotIndex][i]);
                        return vec4.add(vec4.create(), vec4.scale(vec4.create(), this.deBoor(k - 1, degree, i - 1, x, knotIndex, startIndex), (1.0 - alpha)), vec4.scale(vec4.create(), this.deBoor(k - 1, degree, i, x, knotIndex, startIndex), alpha));
                    }
                };
                CustomTrackSpline.prototype.whichInterval = function (x, knotIndex, degree) {
                    for (var i = 1; i < this.knots[knotIndex].length - 1; i++) {
                        if (x < this.knots[knotIndex][i])
                            return i - 1;
                        else if (x == this.knots[knotIndex][this.knots[knotIndex].length - 1])
                            return this.knots[knotIndex].length - degree - 2;
                    }
                    return -1;
                };
                CustomTrackSpline.prototype.interpolate = function (t, degree, knotIndex, startIndex) {
                    var pos = this.deBoor(degree, degree, this.whichInterval(t, knotIndex, degree), t, knotIndex, startIndex);
                    return vec3.fromValues(pos[0] / pos[3], pos[1] / pos[3], pos[2] / pos[3]);
                };
                CustomTrackSpline.prototype.estimateSplineSectionLength = function (fromIndex, knotIndex, degree) {
                    var lastPos = vec3.fromValues(this.vertices[fromIndex].position[0], this.vertices[fromIndex].position[1], this.vertices[fromIndex].position[2]);
                    var length = 0.0;
                    var highestKnotValue = this.knots[knotIndex][this.knots[knotIndex].length - 1];
                    for (var i = 0; i < 15; i++) {
                        var t1 = (highestKnotValue * i) / 14.0;
                        var pos = this.interpolate(t1, degree, knotIndex, fromIndex);
                        length += vec3.distance(pos, lastPos);
                        lastPos = pos;
                    }
                    return length;
                };
                CustomTrackSpline.prototype.arcLength = function (alpha, beta, degree, knotIndex, startIndex) {
                    var gamma = (alpha + beta) / 2.0;
                    var a = this.interpolate(alpha, degree, knotIndex, startIndex);
                    var b = this.interpolate(beta, degree, knotIndex, startIndex);
                    var ci = vec3.fromValues((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2);
                    var c = this.interpolate(gamma, degree, knotIndex, startIndex);
                    if (vec3.distance(c, ci) / vec3.distance(a, b) > 0.001) {
                        return this.arcLength(alpha, gamma, degree, knotIndex, startIndex) + this.arcLength(gamma, beta, degree, knotIndex, startIndex);
                    }
                    else {
                        return vec3.distance(a, b);
                    }
                };
                CustomTrackSpline.prototype.generateKnotVectors = function (verticesSize, degree) {
                    var n = verticesSize - 1;
                    var p = degree;
                    var nKnots = (n + p + 1) + 1;
                    var m = nKnots - 1;
                    var knots = [];
                    knots.length = nKnots;
                    for (var u = 0; u <= p; u++) {
                        knots[u] = 0.0;
                        knots[m - u] = 1.0 * n;
                    }
                    for (var i = 1; i <= n - p; i++) {
                        knots[p + i] = (i / (n - p + 1)) * n;
                    }
                    return knots;
                };
                CustomTrackSpline.prototype.update = function () {
                    this.nodes.length = 0;
                    this.nodesLen.length = 0;
                    this.segmentLengths.length = 0;
                    var sections = this.getSplineSections();
                    if (sections.length < 2)
                        return;
                    this.splineLength = 0.0;
                    for (var i = 0; i < sections.length - 1; i++) {
                        var fromIndex = sections[i];
                        var toIndex = sections[i + 1];
                        var numVertices = toIndex - fromIndex + 1;
                        if (numVertices < 2)
                            return;
                        var degree = Math.min(numVertices - 1, 3);
                        var knotIndex = this.knots.length;
                        this.knots.push(this.generateKnotVectors(numVertices, degree));
                        var highestKnotValue = this.knots[knotIndex][this.knots[knotIndex].length - 1];
                        var length_1 = this.estimateSplineSectionLength(fromIndex, knotIndex, degree);
                        var flatLengthEstimated = Math.floor(length_1 * 100);
                        var lastPos = vec3.fromValues(this.vertices[fromIndex].position[0], this.vertices[fromIndex].position[1], this.vertices[fromIndex].position[2]);
                        var secLen = 0.0;
                        for (var k = 0; k < flatLengthEstimated; k++) {
                            var t = (highestKnotValue * k) / (flatLengthEstimated - 1);
                            var pos = this.interpolate(t, degree, knotIndex, fromIndex);
                            secLen += vec3.distance(pos, lastPos);
                            lastPos = pos;
                            var node = new Document.TrackNode();
                            node.pos = pos;
                            node.dist = this.splineLength + secLen;
                            this.nodesLen.push(node.dist);
                            this.nodes.push(node);
                        }
                        this.segmentLengths.push(this.splineLength);
                        if (numVertices >= 4) {
                            var lastLength = 0;
                            var subdivisionRollPoints = (numVertices - 1) / (numVertices - 3);
                            var divideBy = 2;
                            if (numVertices == 4)
                                divideBy = 3;
                            this.segmentLengths.push(this.splineLength + (this.arcLength(0, subdivisionRollPoints, degree, knotIndex, fromIndex) / divideBy));
                            var lastParameter = 0;
                            for (var o = 2; o < numVertices - 2; o++) {
                                var parameter = (o - 1) * subdivisionRollPoints;
                                lastLength = this.segmentLengths[this.segmentLengths.length - 1];
                                if (o == 2) {
                                    this.segmentLengths.push(this.splineLength + this.arcLength(lastParameter, parameter, degree, knotIndex, fromIndex));
                                }
                                else {
                                    this.segmentLengths.push(lastLength + this.arcLength(lastParameter, parameter, degree, knotIndex, fromIndex));
                                }
                                lastParameter = parameter;
                            }
                            lastLength = this.segmentLengths[this.segmentLengths.length - 1];
                            this.segmentLengths.push(lastLength + (this.arcLength(numVertices - 1 - subdivisionRollPoints, numVertices - 1, degree, knotIndex, fromIndex) / divideBy));
                        }
                        this.splineLength += secLen;
                        if (numVertices == 3) {
                            var length_2 = this.splineLength - this.segmentLengths[this.segmentLengths.length - 1];
                            this.segmentLengths.push(this.segmentLengths[this.segmentLengths.length - 1] + (length_2 / 2));
                        }
                        if (i >= sections.length - 2)
                            this.segmentLengths.push(this.splineLength);
                    }
                };
                CustomTrackSpline.prototype.getSplineSections = function () {
                    var res = [];
                    for (var i = 0; i < this.track.getVertices().length; i++) {
                        if (!i || i == this.track.getVertices().length - 1 || this.track.getVertices()[i].isStrict())
                            res.push(i);
                    }
                    return res;
                };
                CustomTrackSpline.prototype.getDistanceOnParameter = function (t) {
                    var index = Math.floor(t);
                    if (index >= this.segmentLengths.length - 1)
                        return this.segmentLengths[this.segmentLengths.length - 1];
                    var s1 = this.segmentLengths[index];
                    var s2 = this.segmentLengths[index + 1];
                    return s1 + ((s2 - s1) * (t - index));
                };
                CustomTrackSpline.prototype.getPositionAtDistance = function (at) {
                    var index = BinarySearch.lowerBound(this.nodesLen, at);
                    index--;
                    if (index < 0)
                        index = 0;
                    if (index >= this.nodes.length - 1) {
                        return this.nodes[this.nodes.length - 1].pos;
                    }
                    var currentNode = this.nodes[index];
                    var nextNode = this.nodes[index + 1];
                    if (at < currentNode.dist || at > nextNode.dist) {
                        console.log("something is terribly wrong", at, currentNode.dist, nextNode.dist);
                    }
                    var t = 0;
                    var nodesDistanceDiff = nextNode.dist - currentNode.dist;
                    var distanceDiff = at - currentNode.dist;
                    if (nodesDistanceDiff > MathUtils.epsilon) {
                        t = Math.max(Math.min(distanceDiff / nodesDistanceDiff, 1.0), 0.0);
                    }
                    else
                        t = 0.5;
                    return vec3.lerp(vec3.create(), currentNode.pos, nextNode.pos, t);
                };
                CustomTrackSpline.prototype.getNumberOfNodes = function () {
                    return this.nodes.length;
                };
                CustomTrackSpline.prototype.getNodetAt = function (at) {
                    return this.nodes[at];
                };
                CustomTrackSpline.prototype.getSplineLength = function () {
                    return this.splineLength;
                };
                CustomTrackSpline.prototype.getSegmentLengths = function () {
                    return this.segmentLengths;
                };
                return CustomTrackSpline;
            }());
            Document.CustomTrackSpline = CustomTrackSpline;
        })(Document = NoLimits.Document || (NoLimits.Document = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Document;
        (function (Document) {
            var MathUtils = NLParkViewer.Maths.MathUtils;
            var BinarySearch = NLParkViewer.Core.BinarySearch;
            var CustomTrackDocument = (function () {
                function CustomTrackDocument(track) {
                    if (track === void 0) { track = null; }
                    this.track = null;
                    this.trackSpline = null;
                    this.nodes = [];
                    this.nodesLen = [];
                    this.rollPointSectionNodes = [];
                    this.segmentLengths = [];
                    this.totalLength = 0;
                    if (track === null)
                        return;
                    this.track = track;
                    this.update();
                }
                CustomTrackDocument.prototype.update = function () {
                    this.trackSpline = new Document.CustomTrackSpline(this.track);
                    this.segmentLengths = this.trackSpline.getSegmentLengths();
                    this.nodes.length = 0;
                    this.nodesLen.length = 0;
                    this.rollPointSectionNodes.length = 0;
                    this.totalLength = 0;
                    var tmpRollPoints = this.track.getRollPoints().slice(0);
                    var rollPoints = [];
                    tmpRollPoints.push(this.track.getFirstRollPoint());
                    tmpRollPoints.push(this.track.getLastRollPoint());
                    tmpRollPoints.sort(function (a, b) {
                        return a.getPosition() > b.getPosition() ? 1 : -1;
                    });
                    for (var i = 0; i < tmpRollPoints.length; i++) {
                        tmpRollPoints[i].setPosition(this.trackSpline.getDistanceOnParameter(tmpRollPoints[i].getPosition()));
                    }
                    tmpRollPoints[0].setPosition(0);
                    tmpRollPoints[tmpRollPoints.length - 1].setPosition(this.trackSpline.getSplineLength());
                    for (var i = 0; i < tmpRollPoints.length - 1; i++) {
                        if (tmpRollPoints[i + 1].getPosition() - tmpRollPoints[i].getPosition() > MathUtils.epsilon) {
                            rollPoints.push(tmpRollPoints[i]);
                        }
                    }
                    if (tmpRollPoints.length > 1)
                        rollPoints.push(tmpRollPoints[tmpRollPoints.length - 1]);
                    for (var i = 0; i < rollPoints.length - 1; i++) {
                        var sectionNodes = [];
                        var rp1 = rollPoints[i];
                        var rp2 = rollPoints[i + 1];
                        var rollLength = rp2.getPosition() - rp1.getPosition();
                        var numNodes = Math.floor(rollLength / 0.01);
                        var sectionLength = 0.0;
                        var lastPos = vec3.fromValues(0, 0, 0);
                        for (var k = 0; k < numNodes; k++) {
                            var atDistance = rp1.getPosition() + ((k / (numNodes - 1)) * rollLength);
                            var pos = this.trackSpline.getPositionAtDistance(atDistance);
                            var trackNode = new Document.TrackNode();
                            if (k) {
                                sectionLength += vec3.distance(pos, lastPos);
                            }
                            else {
                                var atNextDistance = rp1.getPosition() + (((k + 1) / (numNodes - 1)) * rollLength);
                                var pos2 = this.trackSpline.getPositionAtDistance(atNextDistance);
                                var normal = vec3.subtract(vec3.create(), pos2, pos);
                                var mat = this.initMatrix(normal);
                                mat4.rotateZ(mat, mat, MathUtils.radians(rp1.getRoll()));
                                mat[12] = pos[0];
                                mat[13] = pos[1];
                                mat[14] = pos[2];
                                trackNode.angle = vec3.fromValues(0, 0, 0);
                                trackNode.roll = Math.sin(Math.atan2(normal[1], vec2.len(vec2.fromValues(normal[0], normal[2]))));
                                trackNode.mat = mat;
                            }
                            trackNode.pos = pos;
                            trackNode.dist = this.totalLength + sectionLength;
                            this.nodesLen.push(trackNode.dist);
                            sectionNodes.push(trackNode);
                            lastPos = pos;
                        }
                        if (!sectionNodes.length) {
                            this.rollPointSectionNodes.push(sectionNodes);
                            continue;
                        }
                        this.totalLength += sectionLength;
                        var prevNodeMatrix = mat4.clone(sectionNodes[0].mat);
                        prevNodeMatrix[12] = 0;
                        prevNodeMatrix[13] = 0;
                        prevNodeMatrix[14] = 0;
                        for (var k = 1; k < sectionNodes.length; k++) {
                            var currentNode = sectionNodes[k];
                            var prevNode = sectionNodes[k - 1];
                            var nodesNormal = vec3.subtract(vec3.create(), currentNode.pos, prevNode.pos);
                            currentNode.roll = Math.sin(Math.atan2(nodesNormal[1], vec2.len(vec2.fromValues(nodesNormal[0], nodesNormal[2]))));
                            var newMatrix = mat4.clone(prevNodeMatrix);
                            newMatrix[15] = 1.0;
                            var b0 = newMatrix[4];
                            newMatrix[4] = newMatrix[1];
                            newMatrix[1] = b0;
                            b0 = newMatrix[8];
                            newMatrix[8] = newMatrix[2];
                            newMatrix[2] = b0;
                            b0 = newMatrix[9];
                            newMatrix[9] = newMatrix[6];
                            newMatrix[6] = b0;
                            var nn = MathUtils.multiplyMat4Vec4(newMatrix, vec4.fromValues(nodesNormal[0], nodesNormal[1], nodesNormal[2], 1.0));
                            nodesNormal = vec3.fromValues(nn[0], nn[1], nn[2]);
                            currentNode.angle[0] = Math.atan2(nodesNormal[1], vec2.len(vec2.fromValues(nodesNormal[0], nodesNormal[2])));
                            currentNode.angle[1] = Math.atan2(nodesNormal[0] * -1, nodesNormal[2] * -1);
                            currentNode.angle[2] = 0.0;
                            mat4.rotateY(prevNodeMatrix, prevNodeMatrix, currentNode.angle[1]);
                            mat4.rotateX(prevNodeMatrix, prevNodeMatrix, currentNode.angle[0]);
                            currentNode.mat = mat4.clone(prevNodeMatrix);
                            currentNode.mat[12] = currentNode.pos[0];
                            currentNode.mat[13] = currentNode.pos[1];
                            currentNode.mat[14] = currentNode.pos[2];
                        }
                        var lastNode = sectionNodes[sectionNodes.length - 1];
                        var rollOffset = MathUtils.radians(rp2.getRoll()) - Math.atan2(lastNode.mat[1], lastNode.mat[5]);
                        if (Math.abs(rollOffset) > MathUtils.radians(180.0)) {
                            if (rollOffset > 0.0)
                                rollOffset -= MathUtils.radians(360.0);
                            else
                                rollOffset += MathUtils.radians(360.0);
                        }
                        rp2.setRollOffset(rollOffset);
                        this.rollPointSectionNodes.push(sectionNodes);
                    }
                    var rollSections = this.getRollSections(rollPoints);
                    var sectionX = [];
                    var sectionY = [];
                    sectionX.length = sectionY.length = rollSections.length;
                    for (var k = 0; k < rollSections.length - 1; k++) {
                        var totalOffset = 0.0;
                        sectionX[k] = [];
                        sectionY[k] = [];
                        for (var i = rollSections[k]; i < rollSections[k + 1] + 1; i++) {
                            var rp = rollPoints[i];
                            var rollOffset = rp.getRollOffset();
                            var roll = rollOffset + totalOffset;
                            if (i == rollSections[k]) {
                                sectionX[k].push(rp.getPosition() - (MathUtils.epsilon * 10000.0));
                                sectionY[k].push(roll);
                            }
                            sectionX[k].push(rp.getPosition());
                            sectionY[k].push(roll);
                            if (i == rollSections[k + 1]) {
                                sectionX[k].push(rp.getPosition() + (MathUtils.epsilon * 10000.0));
                                sectionY[k].push(roll);
                            }
                            rp.setNodeIndex(k);
                            totalOffset += rollOffset;
                        }
                    }
                    for (var i = 0; i < rollPoints.length - 1; i++) {
                        var rp1 = rollPoints[i];
                        var rp2 = rollPoints[i + 1];
                        var sectionNodes = this.rollPointSectionNodes[i];
                        var segmentLength = rp2.getPosition() - rp1.getPosition();
                        var xValues = sectionX[rp1.getNodeIndex()];
                        var yValues = sectionY[rp1.getNodeIndex()];
                        var spline = new NLParkViewer.Tk.Spline();
                        spline.setPoints(xValues, yValues);
                        var firstAngle = spline.get(rp1.getPosition());
                        if (sectionNodes.length - 1 > 1) {
                            for (var k = 0; k < sectionNodes.length; k++) {
                                var atDistance = rp1.getPosition() + ((k / (sectionNodes.length - 1)) * segmentLength);
                                var currNode = sectionNodes[k];
                                currNode.angle[2] = spline.get(atDistance) - firstAngle;
                                this.nodes.push(currNode);
                            }
                        }
                    }
                };
                CustomTrackDocument.prototype.getRollSections = function (rollPoints) {
                    var res = [];
                    for (var i = 0; i < rollPoints.length; i++) {
                        if (!i || i == rollPoints.length - 1 || rollPoints[i].isStrict())
                            res.push(i);
                    }
                    return res;
                };
                CustomTrackDocument.prototype.initMatrix = function (normal) {
                    var mat = mat4.fromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                    var normalLen = vec2.len(vec2.fromValues(normal[0], normal[2]));
                    var angle1 = Math.atan2(normal[1], normalLen);
                    var angle2 = Math.atan2(normal[0] * -1, normal[2] * -1);
                    mat4.rotateY(mat, mat, angle2);
                    mat4.rotateX(mat, mat, angle1);
                    return mat;
                };
                CustomTrackDocument.prototype.getMatrixAtDistance = function (at) {
                    var index = BinarySearch.lowerBound(this.nodesLen, at);
                    index--;
                    if (index < 0)
                        index = 0;
                    if (index >= this.nodes.length - 1) {
                        var lastNode = this.nodes[this.nodes.length - 1];
                        var res_1 = mat4.clone(lastNode.mat);
                        mat4.rotateZ(res_1, res_1, lastNode.angle[2]);
                        return res_1;
                    }
                    var n1 = this.nodes[index];
                    var n2 = this.nodes[index + 1];
                    var t = 0;
                    var nodesDistanceDiff = n2.dist - n1.dist;
                    var distanceDiff = at - n1.dist;
                    if (nodesDistanceDiff > MathUtils.epsilon) {
                        t = Math.max(Math.min(distanceDiff / nodesDistanceDiff, 1.0), 0.0);
                    }
                    else
                        t = 0.5;
                    var newPos = vec3.lerp(vec3.create(), n1.pos, n2.pos, t);
                    var res = mat4.clone(n1.mat);
                    res[12] = newPos[0];
                    res[13] = newPos[1];
                    res[14] = newPos[2];
                    mat4.rotateY(res, res, n1.angle[1] * t);
                    mat4.rotateX(res, res, n1.angle[0] * t);
                    mat4.rotateZ(res, res, n1.angle[2] + ((n2.angle[2] - n1.angle[2]) * t));
                    return res;
                };
                CustomTrackDocument.prototype.getMatrixOfTrackNode = function (at) {
                    var trackNode = this.nodes[at];
                    var mat = mat4.clone(trackNode.mat);
                    mat4.rotateZ(mat, mat, trackNode.angle[2]);
                    return mat;
                };
                CustomTrackDocument.prototype.getDistanceOnParameter = function (t) {
                    var index = Math.floor(t);
                    if (index >= this.segmentLengths.length - 1)
                        return this.segmentLengths[this.segmentLengths.length - 1];
                    var s1 = this.segmentLengths[index];
                    var s2 = this.segmentLengths[index + 1];
                    return s1 + ((s2 - s1) * (t - index));
                };
                CustomTrackDocument.prototype.initFromWorker = function (obj) {
                    this.nodes = obj.nodes;
                    this.nodesLen = obj.nodesLen;
                    this.totalLength = obj.totalLength;
                    this.segmentLengths = obj.segmentLengths;
                };
                CustomTrackDocument.prototype.getLength = function () {
                    return this.totalLength;
                };
                CustomTrackDocument.prototype.getNodeAt = function (at) {
                    return this.nodes[at];
                };
                CustomTrackDocument.prototype.setTrack = function (track, update) {
                    if (update === void 0) { update = true; }
                    this.track = track;
                    if (update)
                        this.update();
                };
                CustomTrackDocument.prototype.getNumberOfNodes = function () {
                    return this.nodes.length;
                };
                CustomTrackDocument.prototype.getRawTrack = function () {
                    return this.track;
                };
                return CustomTrackDocument;
            }());
            Document.CustomTrackDocument = CustomTrackDocument;
        })(Document = NoLimits.Document || (NoLimits.Document = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Document;
        (function (Document) {
            var TrackType = NoLimits.Chunks.Coaster.Track.TrackType;
            var CoasterDocument = (function (_super) {
                __extends(CoasterDocument, _super);
                function CoasterDocument(coaster) {
                    _super.call(this);
                    this.coaster = null;
                    this.trackDocuments = [];
                    this.numberOfTracks = 0;
                    this.coaster = coaster;
                }
                CoasterDocument.prototype.open = function () {
                    var _this = this;
                    var customTrackWorker = new Worker("js/NoLimitsParkViewer.customTrack.worker.js");
                    var finishedTracks = 0;
                    var startTime = new Date();
                    var firstTime = new Date();
                    var processCoasterFromWorker = function (e) {
                        console.log("Received interpolated track from worker ( took " + ((new Date()) - startTime) + "ms after sending the track to worker )");
                        finishedTracks++;
                        var data = new Float64Array(e.data);
                        var dataPos = 0;
                        var totalLength = data[0];
                        var numNodes = data[1];
                        dataPos += 2;
                        var nodes = new Array(numNodes);
                        var nodesLen = new Array(numNodes);
                        startTime = new Date();
                        console.log("Parsing received interpolated track from worker");
                        for (var i_1 = 0; i_1 < numNodes; i_1++) {
                            var trackNode = new Document.TrackNode();
                            trackNode.pos[0] = data[dataPos + ((i_1 * 25) + 0)];
                            trackNode.pos[1] = data[dataPos + ((i_1 * 25) + 1)];
                            trackNode.pos[2] = data[dataPos + ((i_1 * 25) + 2)];
                            trackNode.angle[0] = data[dataPos + ((i_1 * 25) + 3)];
                            trackNode.angle[1] = data[dataPos + ((i_1 * 25) + 4)];
                            trackNode.angle[2] = data[dataPos + ((i_1 * 25) + 5)];
                            trackNode.mat[0] = data[dataPos + ((i_1 * 25) + 6)];
                            trackNode.mat[1] = data[dataPos + ((i_1 * 25) + 7)];
                            trackNode.mat[2] = data[dataPos + ((i_1 * 25) + 8)];
                            trackNode.mat[3] = data[dataPos + ((i_1 * 25) + 9)];
                            trackNode.mat[4] = data[dataPos + ((i_1 * 25) + 10)];
                            trackNode.mat[5] = data[dataPos + ((i_1 * 25) + 11)];
                            trackNode.mat[6] = data[dataPos + ((i_1 * 25) + 12)];
                            trackNode.mat[7] = data[dataPos + ((i_1 * 25) + 13)];
                            trackNode.mat[8] = data[dataPos + ((i_1 * 25) + 14)];
                            trackNode.mat[9] = data[dataPos + ((i_1 * 25) + 15)];
                            trackNode.mat[10] = data[dataPos + ((i_1 * 25) + 16)];
                            trackNode.mat[11] = data[dataPos + ((i_1 * 25) + 17)];
                            trackNode.mat[12] = data[dataPos + ((i_1 * 25) + 18)];
                            trackNode.mat[13] = data[dataPos + ((i_1 * 25) + 19)];
                            trackNode.mat[14] = data[dataPos + ((i_1 * 25) + 20)];
                            trackNode.mat[15] = data[dataPos + ((i_1 * 25) + 21)];
                            trackNode.dist = data[dataPos + ((i_1 * 25) + 22)];
                            trackNode.roll = data[dataPos + ((i_1 * 25) + 23)];
                            nodes[i_1] = trackNode;
                            nodesLen[i_1] = data[dataPos + ((i_1 * 25) + 24)];
                        }
                        dataPos += numNodes * 25;
                        var numberSegmentLengths = data[dataPos];
                        var segmentLengths = new Array(numberSegmentLengths);
                        dataPos++;
                        for (var i_2 = 0; i_2 < numberSegmentLengths; i_2++) {
                            segmentLengths[i_2] = data[dataPos + i_2];
                        }
                        dataPos += numberSegmentLengths;
                        var i = data[dataPos + 0];
                        console.log("Successfully parsed received interpolated track (#" + i + ") from worker ( " + ((new Date()) - startTime) + "ms )");
                        var track = new Document.CustomTrackDocument();
                        track.initFromWorker({
                            nodes: nodes,
                            nodesLen: nodesLen,
                            totalLength: totalLength,
                            segmentLengths: segmentLengths
                        });
                        track.setTrack(_this.coaster.getTracks()[i], false);
                        _this.trackDocuments[i] = track;
                        if (finishedTracks >= _this.numberOfTracks) {
                            console.log("Finished coaster interpolation of all tracks ( " + ((new Date()) - firstTime) + "ms )");
                            _this.dispatchEvent(new NLParkViewer.Event("finished", null));
                            customTrackWorker.removeEventListener("message", processCoasterFromWorker);
                            customTrackWorker.terminate();
                        }
                    };
                    customTrackWorker.addEventListener("message", processCoasterFromWorker);
                    for (var i = 0; i < this.coaster.getTracks().length; i++) {
                        if (this.coaster.getTracks()[i].getTrackType() == TrackType.Custom) {
                            this.numberOfTracks++;
                            var cTrack = this.coaster.getTracks()[i];
                            var vertices = cTrack.getVertices();
                            var rollPoints = cTrack.getRollPoints();
                            var firstRollPoint = cTrack.getFirstRollPoint();
                            var lastRollPoint = cTrack.getLastRollPoint();
                            var dataPos = 0;
                            var dataArray = new Float64Array(2 + (vertices.length * 6) + (rollPoints.length * 4) + 9);
                            dataArray[dataPos + 0] = vertices.length;
                            dataArray[dataPos + 1] = rollPoints.length;
                            dataPos += 2;
                            for (var i_3 = 0; i_3 < vertices.length; i_3++) {
                                dataArray[dataPos + 0] = vertices[i_3].position[0];
                                dataArray[dataPos + 1] = vertices[i_3].position[1];
                                dataArray[dataPos + 2] = vertices[i_3].position[2];
                                dataArray[dataPos + 3] = vertices[i_3].position[3];
                                dataArray[dataPos + 4] = vertices[i_3].locked ? 1 : 0;
                                dataArray[dataPos + 5] = vertices[i_3].strict ? 1 : 0;
                                dataPos += 6;
                            }
                            for (var i_4 = 0; i_4 < rollPoints.length; i_4++) {
                                dataArray[dataPos + 0] = rollPoints[i_4].getPosition();
                                dataArray[dataPos + 1] = rollPoints[i_4].getRoll();
                                dataArray[dataPos + 2] = rollPoints[i_4].getVertical() ? 1 : 0;
                                dataArray[dataPos + 3] = rollPoints[i_4].isStrict() ? 1 : 0;
                                dataPos += 4;
                            }
                            dataArray[dataPos + 0] = firstRollPoint.getPosition();
                            dataArray[dataPos + 1] = firstRollPoint.getRoll();
                            dataArray[dataPos + 2] = firstRollPoint.getVertical() ? 1 : 0;
                            dataArray[dataPos + 3] = firstRollPoint.isStrict() ? 1 : 0;
                            dataPos += 4;
                            dataArray[dataPos + 0] = lastRollPoint.getPosition();
                            dataArray[dataPos + 1] = lastRollPoint.getRoll();
                            dataArray[dataPos + 2] = lastRollPoint.getVertical() ? 1 : 0;
                            dataArray[dataPos + 3] = lastRollPoint.isStrict() ? 1 : 0;
                            dataPos += 4;
                            dataArray[dataPos + 0] = i;
                            customTrackWorker.postMessage(dataArray.buffer, [dataArray.buffer]);
                        }
                    }
                    if (!this.numberOfTracks) {
                        this.dispatchEvent(new NLParkViewer.Event("finished", null));
                    }
                };
                CoasterDocument.prototype.getTrackDocuments = function () {
                    return this.trackDocuments;
                };
                CoasterDocument.prototype.getRawCoasterData = function () {
                    return this.coaster;
                };
                return CoasterDocument;
            }(NLParkViewer.EventDispatcher));
            Document.CoasterDocument = CoasterDocument;
        })(Document = NoLimits.Document || (NoLimits.Document = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Document;
        (function (Document) {
            var ParkDocument = (function (_super) {
                __extends(ParkDocument, _super);
                function ParkDocument(park) {
                    _super.call(this);
                    this.coasterDocuments = [];
                    this.park = null;
                    this.park = park;
                }
                ParkDocument.prototype.open = function () {
                    var _this = this;
                    var finishedCoasters = 0;
                    var _loop_1 = function(i) {
                        var coaster = this_1.park.getCoasters()[i];
                        var coasterDocument = new Document.CoasterDocument(coaster);
                        coasterDocument.addEventListener("finished", function () {
                            finishedCoasters++;
                            _this.coasterDocuments.push(coasterDocument);
                            if (finishedCoasters >= _this.park.getCoasters().length) {
                                _this.dispatchEvent(new NLParkViewer.Event("finished", null));
                            }
                        });
                        coasterDocument.open();
                    };
                    var this_1 = this;
                    for (var i = 0; i < this.park.getCoasters().length; i++) {
                        _loop_1(i);
                    }
                    if (!this.park.getCoasters().length) {
                        this.dispatchEvent(new NLParkViewer.Event("finished", null));
                    }
                };
                ParkDocument.prototype.getCoasterDocuments = function () {
                    return this.coasterDocuments;
                };
                ParkDocument.prototype.getPark = function () {
                    return this.park;
                };
                return ParkDocument;
            }(NLParkViewer.EventDispatcher));
            Document.ParkDocument = ParkDocument;
        })(Document = NoLimits.Document || (NoLimits.Document = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var View;
    (function (View_1) {
        var View = (function (_super) {
            __extends(View, _super);
            function View(view) {
                _super.call(this);
                this.view = view;
                this.view.className = this.constructor.name;
                this.view.classList.add("animate");
            }
            View.prototype.show = function () {
                this.view.classList.add("show");
            };
            View.prototype.hide = function () {
                this.view.classList.remove("show");
            };
            View.prototype.getView = function () {
                return this.view;
            };
            return View;
        }(NLParkViewer.EventDispatcher));
        View_1.View = View;
    })(View = NLParkViewer.View || (NLParkViewer.View = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var View;
    (function (View) {
        var ActiveCoasterTrackView = (function (_super) {
            __extends(ActiveCoasterTrackView, _super);
            function ActiveCoasterTrackView() {
                _super.call(this, document.createElement("div"));
                this.parkDocument = null;
                this.coasterSelection = document.createElement("select");
                this.trackSelection = document.createElement("select");
                this.view.appendChild(this.coasterSelection);
                this.view.appendChild(this.trackSelection);
                this.initEvents();
                this.initSelections();
                this.setViewVisibility();
            }
            ActiveCoasterTrackView.prototype.setViewVisibility = function () {
            };
            ActiveCoasterTrackView.prototype.getActiveCoaster = function () {
                return parseInt(this.coasterSelection.value);
            };
            ActiveCoasterTrackView.prototype.getActiveTrack = function () {
                return parseInt(this.trackSelection.value);
            };
            ActiveCoasterTrackView.prototype.initEvents = function () {
                var _this = this;
                this.coasterSelection.addEventListener("change", function () {
                    _this.initTrackSelection();
                    _this.dispatchEvent(new NLParkViewer.Event("activated", _this));
                });
                this.trackSelection.addEventListener("change", function () {
                    _this.dispatchEvent(new NLParkViewer.Event("activated", _this));
                });
            };
            ActiveCoasterTrackView.prototype.initCoasterSelection = function () {
                this.coasterSelection.innerHTML = "";
                var minTrackLength = 0;
                if (this.parkDocument === null || !this.parkDocument.getCoasterDocuments().length) {
                    this.coasterSelection.style.display = "none";
                    return;
                }
                else {
                    this.coasterSelection.style.display = null;
                }
                for (var i = 0; i < this.parkDocument.getCoasterDocuments().length; i++) {
                    var coasterOption = document.createElement("option");
                    coasterOption.text = this.parkDocument.getCoasterDocuments()[i].getRawCoasterData().getName();
                    coasterOption.value = i.toString();
                    var tracks = this.parkDocument.getCoasterDocuments()[i].getTrackDocuments();
                    for (var k = 0; k < tracks.length; k++) {
                        if (tracks[k].getLength() > minTrackLength) {
                            coasterOption.selected = true;
                            minTrackLength = tracks[k].getLength();
                        }
                    }
                    this.coasterSelection.appendChild(coasterOption);
                }
            };
            ActiveCoasterTrackView.prototype.initTrackSelection = function () {
                this.trackSelection.innerHTML = "";
                var minTrackLength = 0;
                var selectedCoaster = parseInt(this.coasterSelection.value);
                if (isNaN(selectedCoaster)) {
                    this.trackSelection.style.display = "none";
                    return;
                }
                else {
                    this.trackSelection.style.display = null;
                }
                var tracks = this.parkDocument.getCoasterDocuments()[selectedCoaster].getTrackDocuments();
                if (!tracks.length)
                    this.trackSelection.style.display = "none";
                for (var i = 0; i < tracks.length; i++) {
                    var trackOption = document.createElement("option");
                    trackOption.text = "Track #" + i;
                    trackOption.value = i.toString();
                    if (tracks[i].getLength() > minTrackLength) {
                        trackOption.selected = true;
                        minTrackLength = tracks[i].getLength();
                    }
                    this.trackSelection.appendChild(trackOption);
                }
            };
            ActiveCoasterTrackView.prototype.initSelections = function () {
                this.initCoasterSelection();
                this.initTrackSelection();
            };
            ActiveCoasterTrackView.prototype.onParkDocumentLoad = function (e) {
                this.parkDocument = e.getTarget();
                this.initSelections();
                this.dispatchEvent(new NLParkViewer.Event("activated", this));
            };
            return ActiveCoasterTrackView;
        }(View.View));
        View.ActiveCoasterTrackView = ActiveCoasterTrackView;
    })(View = NLParkViewer.View || (NLParkViewer.View = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var View;
    (function (View) {
        var CameraSwitchView = (function (_super) {
            __extends(CameraSwitchView, _super);
            function CameraSwitchView() {
                _super.call(this, document.createElement("div"));
                this.view.innerHTML = "\n            <div><input type=\"radio\" name=\"CameraSwitchView\" checked/> Perspective Camera</div>\n            <div><input type=\"radio\" name=\"CameraSwitchView\"/> POV Camera</div>\n            ";
                this.inputPerspective = this.view.querySelectorAll("input")[0];
                this.inputPOV = this.view.querySelectorAll("input")[1];
                this.inputPOV.parentElement.style.display = "none";
                this.inputPerspective.addEventListener("change", this.stateChanged.bind(this));
                this.inputPOV.addEventListener("change", this.stateChanged.bind(this));
            }
            CameraSwitchView.prototype.onParkDocumentLoad = function (e) {
                this.inputPerspective.checked = true;
                this.stateChanged();
            };
            CameraSwitchView.prototype.stateChanged = function () {
                this.dispatchEvent(new NLParkViewer.Event("change", this));
            };
            CameraSwitchView.prototype.getActiveCamera = function () {
                if (this.inputPerspective.checked)
                    return "Perspective";
                if (this.inputPOV.checked)
                    return "POV";
            };
            CameraSwitchView.prototype.onTrackOrCoasterActivated = function (e) {
                var activeCoasterTrack = e.getTarget();
                if (isNaN(activeCoasterTrack.getActiveTrack())) {
                    this.inputPOV.parentElement.style.display = "none";
                    this.inputPerspective.checked = true;
                }
                else {
                    this.inputPOV.parentElement.style.display = null;
                }
                this.stateChanged();
            };
            return CameraSwitchView;
        }(View.View));
        View.CameraSwitchView = CameraSwitchView;
    })(View = NLParkViewer.View || (NLParkViewer.View = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var Core;
    (function (Core) {
        var ShaderProgram = (function () {
            function ShaderProgram(gl, shader) {
                this.gl = gl;
                this.shader = shader;
                var vertexShader = this.compileShader(shader.vertex(), gl.VERTEX_SHADER);
                var fragmentShader = this.compileShader(shader.fragment(), gl.FRAGMENT_SHADER);
                this.program = gl.createProgram();
                if (this.program == 0) {
                    console.log("Unable to create program");
                }
                gl.attachShader(this.program, vertexShader);
                gl.attachShader(this.program, fragmentShader);
                gl.bindAttribLocation(this.program, 0, "vPosition");
                gl.linkProgram(this.program);
            }
            ShaderProgram.prototype.getShaderTypeString = function (shadeType) {
                switch (shadeType) {
                    case this.gl.VERTEX_SHADER:
                        return "Vertex";
                    case this.gl.FRAGMENT_SHADER:
                        return "Fragment";
                }
            };
            ShaderProgram.prototype.compileShader = function (source, shaderType) {
                var gl = this.gl;
                var shader = gl.createShader(shaderType);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                var info = gl.getShaderInfoLog(shader);
                console.log("Compile Result of " + this.shader.constructor.name + "::" + this.getShaderTypeString(shaderType) + ": ", (info ? info : "No Errors"));
                return shader;
            };
            ShaderProgram.prototype.use = function () {
                this.gl.useProgram(this.program);
            };
            ShaderProgram.prototype.uniformMat4 = function (name, value) {
                this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.program, name), false, new Float32Array(value));
            };
            ShaderProgram.prototype.uniformVec4 = function (name, value) {
                this.gl.uniform4fv(this.gl.getUniformLocation(this.program, name), new Float32Array(value));
            };
            ShaderProgram.prototype.uniformVec3 = function (name, value) {
                this.gl.uniform3fv(this.gl.getUniformLocation(this.program, name), new Float32Array(value));
            };
            ShaderProgram.prototype.uniformVec2 = function (name, value) {
                this.gl.uniform2fv(this.gl.getUniformLocation(this.program, name), new Float32Array(value));
            };
            ShaderProgram.prototype.uniformNumber = function (name, value) {
                this.gl.uniform1f(this.gl.getUniformLocation(this.program, name), value);
            };
            return ShaderProgram;
        }());
        Core.ShaderProgram = ShaderProgram;
    })(Core = NLParkViewer.Core || (NLParkViewer.Core = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var Camera;
    (function (Camera) {
        var CameraManager = (function () {
            function CameraManager(view) {
                this.cameras = [];
                this.currentCamera = null;
                this.currentIndex = 0;
                this.lastViewPortWidth = 0;
                this.lastViewPortHeight = 0;
                this.eventHandlers = [];
                this.changeSpeed = 0.03;
                this.view = view;
            }
            CameraManager.prototype.getActiveCamera = function () {
                return this.cameras[this.currentIndex].identifier;
            };
            CameraManager.prototype.addCamera = function (cam, identifier) {
                this.cameras.push(new CameraInstance(cam, identifier));
            };
            CameraManager.prototype.getCameraInstance = function (identifier) {
                for (var i = 0; i < this.cameras.length; i++) {
                    if (this.cameras[i].identifier == identifier) {
                        return this.cameras[i];
                    }
                }
                return null;
            };
            CameraManager.prototype.removeAllCameras = function () {
                this.currentIndex = 0;
                this.currentCamera = null;
                this.cameras = [];
            };
            CameraManager.prototype.getCamera = function (identifier) {
                for (var i = 0; i < this.cameras.length; i++) {
                    if (this.cameras[i].identifier == identifier) {
                        return this.cameras[i].cam;
                    }
                }
                return null;
            };
            CameraManager.prototype.getIndexOfCameraInstance = function (camInstance) {
                for (var i = 0; i < this.cameras.length; i++) {
                    if (this.cameras[i] == camInstance) {
                        return i;
                    }
                }
                return -1;
            };
            CameraManager.prototype.getIndexOfCameraInstanceByIdentifier = function (identifier) {
                return this.getIndexOfCameraInstance(this.getCameraInstance(identifier));
            };
            CameraManager.prototype.replaceCamera = function (identifier, cam) {
                var index = this.getIndexOfCameraInstanceByIdentifier(identifier);
                cam.setViewPort(this.cameras[index].cam.viewPortWidth, this.cameras[index].cam.viewPortHeight);
                if (this.currentCamera == this.cameras[index].cam) {
                    this.currentIndex = index;
                    this.currentCamera = cam;
                }
                this.cameras[index].cam = cam;
            };
            CameraManager.prototype.registerEvents = function (cam) {
                this.eventHandlers.push(cam.onMouseDown.bind(cam));
                this.eventHandlers.push(cam.onMouseUp.bind(cam));
                this.eventHandlers.push(cam.onMouseMove.bind(cam));
                this.eventHandlers.push(cam.onMouseWheel.bind(cam));
                this.eventHandlers.push(cam.onKeyDown.bind(cam));
                this.eventHandlers.push(cam.onKeyUp.bind(cam));
                this.view.getView().addEventListener("mousedown", this.eventHandlers[0]);
                this.view.getView().addEventListener("mouseup", this.eventHandlers[1]);
                this.view.getView().addEventListener("mousemove", this.eventHandlers[2]);
                this.view.getView().addEventListener("mousewheel", this.eventHandlers[3]);
                this.view.getView().addEventListener("keydown", this.eventHandlers[4]);
                this.view.getView().addEventListener("keyup", this.eventHandlers[5]);
                cam.setCameraManager(this);
            };
            CameraManager.prototype.removeEvents = function (cam) {
                if (!this.eventHandlers.length)
                    return;
                this.view.getView().removeEventListener("mousedown", this.eventHandlers[0]);
                this.view.getView().removeEventListener("mouseup", this.eventHandlers[1]);
                this.view.getView().removeEventListener("mousemove", this.eventHandlers[2]);
                this.view.getView().removeEventListener("mousewheel", this.eventHandlers[3]);
                this.view.getView().removeEventListener("keydown", this.eventHandlers[4]);
                this.view.getView().removeEventListener("keyup", this.eventHandlers[5]);
                this.eventHandlers.length = 0;
            };
            CameraManager.prototype.activateNext = function () {
                this.currentIndex++;
                if (this.currentIndex >= this.cameras.length)
                    this.currentIndex = 0;
                this.activate(this.cameras[this.currentIndex].identifier);
                return this.cameras[this.currentIndex].identifier;
            };
            CameraManager.prototype.activate = function (identifier) {
                this.setViewPort(this.lastViewPortWidth, this.lastViewPortHeight);
                var camInstance = this.getCameraInstance(identifier);
                if (camInstance != null) {
                    if (this.currentCamera != null) {
                        this.removeEvents(this.currentCamera);
                    }
                    camInstance.cam.stopMovement();
                    this.currentCamera = camInstance.cam;
                    this.currentIndex = this.getIndexOfCameraInstance(camInstance);
                    this.registerEvents(this.currentCamera);
                }
            };
            CameraManager.prototype.setViewPort = function (w, h) {
                this.lastViewPortWidth = w;
                this.lastViewPortHeight = h;
                for (var i = 0; i < this.cameras.length; i++) {
                    this.cameras[i].cam.setViewPort(w, h);
                }
            };
            CameraManager.prototype.getRenderTimeInSeconds = function () {
                return this.view.renderTimeInSec;
            };
            return CameraManager;
        }());
        Camera.CameraManager = CameraManager;
        var CameraInstance = (function () {
            function CameraInstance(cam, identifier) {
                this.cam = cam;
                this.identifier = identifier;
            }
            return CameraInstance;
        }());
    })(Camera = NLParkViewer.Camera || (NLParkViewer.Camera = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var Camera;
    (function (Camera_1) {
        var Camera = (function () {
            function Camera() {
                this.fov = 90.0;
                this.near = 0.1;
                this.far = 1000.0;
                this.cameraPos = vec3.fromValues(5.0, 5.0, 7.0);
                this.cameraIsMoving = false;
                this.changeSpeed = 0.03;
                this.cameraManager = null;
            }
            Camera.prototype.setViewPort = function (w, h) {
                this.viewPortHeight = h;
                this.viewPortWidth = w;
            };
            Camera.prototype.setCameraManager = function (cameraManager) {
                this.cameraManager = cameraManager;
            };
            Camera.prototype.getRenderTimeInSeconds = function () {
                return this.cameraManager.getRenderTimeInSeconds();
            };
            return Camera;
        }());
        Camera_1.Camera = Camera;
    })(Camera = NLParkViewer.Camera || (NLParkViewer.Camera = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var Camera;
    (function (Camera) {
        var MathUtils = NLParkViewer.Maths.MathUtils;
        var PerspectiveCamera = (function (_super) {
            __extends(PerspectiveCamera, _super);
            function PerspectiveCamera() {
                _super.call(this);
                this.cameraSide = vec3.fromValues(1.0, 0.0, 0.0);
                this.cameraDir = vec3.fromValues(0.0, 0.0, -1.0);
                this.moveToCameraPos = vec3.fromValues(0, 0, 0);
                this.moveToCameraDir = vec3.fromValues(0, 0, 0);
                this.moveToCameraSide = vec3.fromValues(0, 0, 0);
                this.cameraMov = vec4.fromValues(0, 0, 0, 0);
                this.cameraBoost = 1;
                this.cameraJump = 0;
                this.rotateMode = false;
                this.hasMoved = false;
                this.lastX = 0;
                this.lastY = 0;
                this.stopMovement();
            }
            PerspectiveCamera.prototype.onMouseDown = function (e) {
                if (e.button == 0) {
                    this.hasMoved = false;
                    this.rotateMode = true;
                    this.lastX = e.clientX;
                    this.lastY = e.clientY;
                }
            };
            PerspectiveCamera.prototype.onMouseUp = function (e) {
                this.rotateMode = false;
                if (!this.hasMoved) {
                    this.stopMovement();
                }
            };
            PerspectiveCamera.prototype.onMouseMove = function (e) {
                e.stopImmediatePropagation();
                e.preventDefault();
                if (this.rotateMode) {
                    this.hasMoved = true;
                    this.rotate(vec2.fromValues((this.lastX - e.clientX) * 0.4, (this.lastY - e.clientY) * 0.4));
                    this.lastX = e.clientX;
                    this.lastY = e.clientY;
                }
            };
            PerspectiveCamera.prototype.onMouseWheel = function (e) {
                e.stopImmediatePropagation();
                e.preventDefault();
                this.cameraJump -= e.wheelDeltaY * 0.5;
                this.moveCamera();
            };
            PerspectiveCamera.prototype.onKeyDown = function (e) {
                e.stopImmediatePropagation();
                e.preventDefault();
                switch (e.key) {
                    case "w":
                    case "W":
                        this.cameraMov[0] = 1;
                        break;
                    case "A":
                    case "a":
                        this.cameraMov[1] = 1;
                        break;
                    case "S":
                    case "s":
                        this.cameraMov[2] = 1;
                        break;
                    case "D":
                    case "d":
                        this.cameraMov[3] = 1;
                        break;
                    case "Shift":
                        this.cameraBoost = 2;
                        break;
                }
            };
            PerspectiveCamera.prototype.onKeyUp = function (e) {
                e.stopImmediatePropagation();
                e.preventDefault();
                switch (e.key) {
                    case "w":
                    case "W":
                        this.cameraMov[0] = 0;
                        break;
                    case "A":
                    case "a":
                        this.cameraMov[1] = 0;
                        break;
                    case "S":
                    case "s":
                        this.cameraMov[2] = 0;
                        break;
                    case "D":
                    case "d":
                        this.cameraMov[3] = 0;
                        break;
                    case "Shift":
                        this.cameraBoost = 1;
                        break;
                }
            };
            PerspectiveCamera.prototype.moveCamera = function () {
                this.moveToCameraPos = vec3.add(vec3.create(), this.moveToCameraPos, vec3.sub(vec3.create(), vec3.scale(vec3.create(), this.cameraDir, 0.3 * this.cameraBoost * (this.cameraMov[0] - this.cameraMov[2])), vec3.scale(vec3.create(), vec3.normalize(vec3.create(), vec3.cross(vec3.create(), this.cameraDir, vec3.fromValues(0, 1, 0))), (0.3 * this.cameraBoost * (this.cameraMov[1] - this.cameraMov[3])))));
                this.moveToCameraPos = vec3.add(vec3.create(), this.moveToCameraPos, vec3.scale(vec3.create(), vec3.cross(vec3.create(), this.cameraDir, vec3.normalize(vec3.create(), vec3.cross(vec3.create(), this.cameraDir, vec3.fromValues(0, 1, 0)))), 0.01 * this.cameraJump * this.cameraBoost));
                this.cameraJump = 0.0;
            };
            PerspectiveCamera.prototype.rotate = function (v) {
                var sign = 1.0;
                var up = vec3.cross(vec3.create(), this.moveToCameraSide, this.moveToCameraDir);
                if (up[1] < 0)
                    sign = -1.0;
                this.moveToCameraDir = MathUtils.multiplyQuatVec3(quat.setAxisAngle(quat.create(), vec3.fromValues(0 * sign, 1 * sign, 0 * sign), MathUtils.radians(v[0])), this.moveToCameraDir);
                this.moveToCameraSide = MathUtils.multiplyQuatVec3(quat.setAxisAngle(quat.create(), vec3.fromValues(0 * sign, 1 * sign, 0 * sign), MathUtils.radians(v[0])), this.moveToCameraSide);
                this.moveToCameraDir = MathUtils.multiplyQuatVec3(quat.setAxisAngle(quat.create(), this.moveToCameraSide, MathUtils.radians(v[1])), this.moveToCameraDir);
            };
            PerspectiveCamera.prototype.update = function () {
                if (vec4.length(this.cameraMov) > 0.5) {
                    this.moveCamera();
                }
                this.cameraPos = vec3.add(vec3.create(), vec3.scale(vec3.create(), vec3.subtract(vec3.create(), this.moveToCameraPos, this.cameraPos), this.changeSpeed), this.cameraPos);
                this.cameraSide = vec3.add(vec3.create(), vec3.scale(vec3.create(), vec3.subtract(vec3.create(), this.moveToCameraSide, this.cameraSide), this.changeSpeed), this.cameraSide);
                this.cameraDir = vec3.add(vec3.create(), vec3.scale(vec3.create(), vec3.subtract(vec3.create(), this.moveToCameraDir, this.cameraDir), this.changeSpeed), this.cameraDir);
                if (vec3.distance(this.moveToCameraPos, this.cameraPos) < MathUtils.epsilon) {
                    this.cameraIsMoving = false;
                }
                else {
                    this.cameraIsMoving = true;
                }
                var offset = 0.0;
                var scew = 0.0;
                var side = Math.tan(this.fov * Math.PI / 360.0) * (this.near);
                var pos = vec3.add(vec3.create(), this.cameraPos, vec3.scale(vec3.create(), this.cameraSide, offset));
                this.projectionMatrix = mat4.frustum(mat4.create(), -side + scew, side + scew, -this.viewPortHeight / this.viewPortWidth * side, this.viewPortHeight / this.viewPortWidth * side, this.near, this.far);
                this.modelMatrix = mat4.lookAt(mat4.create(), pos, vec3.add(vec3.create(), pos, this.cameraDir), vec3.cross(vec3.create(), this.cameraSide, this.cameraDir));
                this.projectionModelMatrix = mat4.multiply(mat4.create(), this.projectionMatrix, this.modelMatrix);
            };
            PerspectiveCamera.prototype.stopMovement = function () {
                this.moveToCameraPos = vec3.clone(this.cameraPos);
                this.moveToCameraDir = vec3.clone(this.cameraDir);
                this.moveToCameraSide = vec3.clone(this.cameraSide);
            };
            return PerspectiveCamera;
        }(Camera.Camera));
        Camera.PerspectiveCamera = PerspectiveCamera;
    })(Camera = NLParkViewer.Camera || (NLParkViewer.Camera = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var Camera;
    (function (Camera) {
        var MathUtils = NLParkViewer.Maths.MathUtils;
        var POVCamera = (function (_super) {
            __extends(POVCamera, _super);
            function POVCamera(tackDocument) {
                _super.call(this);
                this.cameraMov = vec4.fromValues(0, 0, 0, 0);
                this.cameraBoost = 1;
                this.moveToNodeIndex = 0;
                this.nodeIndex = 0;
                this.numberOfNodes = 0;
                this.moveMode = false;
                this.hasMoved = false;
                this.lastX = 0;
                this.lastY = 0;
                this.stopMovement();
                this.trackDocument = tackDocument;
                this.cameraIsMoving = true;
                this.numberOfNodes = tackDocument.getNumberOfNodes();
            }
            POVCamera.prototype.onMouseDown = function (e) {
                if (e.button == 0) {
                    this.hasMoved = false;
                    this.moveMode = true;
                    this.lastX = e.clientX;
                    this.lastY = e.clientY;
                }
            };
            POVCamera.prototype.onMouseUp = function (e) {
                this.moveMode = false;
                if (!this.hasMoved) {
                    this.stopMovement();
                }
            };
            POVCamera.prototype.onMouseMove = function (e) {
                e.stopImmediatePropagation();
                e.preventDefault();
                if (this.moveMode) {
                    this.hasMoved = true;
                    this.incrementNodePosition(Math.floor(1000 * this.getRenderTimeInSeconds() * ((e.clientY - this.lastY))));
                    this.lastX = e.clientX;
                    this.lastY = e.clientY;
                }
            };
            POVCamera.prototype.onMouseWheel = function (e) {
                e.stopImmediatePropagation();
                e.preventDefault();
            };
            POVCamera.prototype.onKeyDown = function (e) {
                e.stopImmediatePropagation();
                e.preventDefault();
                switch (e.key) {
                    case "w":
                    case "W":
                        this.cameraMov[0] = 1;
                        break;
                    case "A":
                    case "a":
                        this.cameraMov[1] = 1;
                        break;
                    case "S":
                    case "s":
                        this.cameraMov[2] = 1;
                        break;
                    case "D":
                    case "d":
                        this.cameraMov[3] = 1;
                        break;
                    case "Shift":
                        this.cameraBoost = 2;
                        break;
                }
            };
            POVCamera.prototype.onKeyUp = function (e) {
                e.stopImmediatePropagation();
                e.preventDefault();
                switch (e.key) {
                    case "w":
                    case "W":
                        this.cameraMov[0] = 0;
                        break;
                    case "A":
                    case "a":
                        this.cameraMov[1] = 0;
                        break;
                    case "S":
                    case "s":
                        this.cameraMov[2] = 0;
                        break;
                    case "D":
                    case "d":
                        this.cameraMov[3] = 0;
                        break;
                    case "Shift":
                        this.cameraBoost = 1;
                        break;
                }
            };
            POVCamera.prototype.incrementNodePosition = function (amountOfNodes) {
                this.moveToNodeIndex += amountOfNodes;
            };
            POVCamera.prototype.update = function () {
                if (vec4.length(this.cameraMov) > 0.5) {
                    this.incrementNodePosition(Math.floor(1000 * this.getRenderTimeInSeconds() * this.cameraBoost * (this.cameraMov[0] - this.cameraMov[2]) * 2));
                }
                this.nodeIndex += Math.floor((this.moveToNodeIndex - this.nodeIndex) * this.changeSpeed);
                if (this.nodeIndex < 0) {
                    this.moveToNodeIndex = this.numberOfNodes - Math.abs(this.moveToNodeIndex);
                    this.nodeIndex += this.numberOfNodes;
                }
                if (this.nodeIndex > this.numberOfNodes) {
                    this.moveToNodeIndex = this.moveToNodeIndex - this.nodeIndex;
                    this.nodeIndex = 0;
                }
                if (this.moveToNodeIndex - this.nodeIndex == 0) {
                    this.cameraIsMoving = false;
                }
                else {
                    this.cameraIsMoving = true;
                }
                var povMat = this.trackDocument.getMatrixOfTrackNode(this.nodeIndex);
                var up = vec3.fromValues(povMat[4], povMat[5], povMat[6]);
                var front = vec3.fromValues(-povMat[8], -povMat[9], -povMat[10]);
                var pos4 = MathUtils.multiplyMat4Vec4(povMat, vec4.fromValues(0, 0.5, 0, 1));
                var pos = vec3.fromValues(pos4[0], pos4[1], pos4[2]);
                var scew = 0.0;
                var side = Math.tan(this.fov * Math.PI / 360.0) * (this.near);
                this.modelMatrix = mat4.lookAt(mat4.create(), pos, vec3.add(vec3.create(), pos, front), up);
                this.projectionMatrix = mat4.frustum(mat4.create(), -side + scew, side + scew, -this.viewPortHeight / this.viewPortWidth * side, this.viewPortHeight / this.viewPortWidth * side, this.near, this.far);
                this.projectionModelMatrix = mat4.multiply(mat4.create(), this.projectionMatrix, this.modelMatrix);
            };
            POVCamera.prototype.stopMovement = function () {
                this.moveToNodeIndex = this.nodeIndex;
            };
            return POVCamera;
        }(Camera.Camera));
        Camera.POVCamera = POVCamera;
    })(Camera = NLParkViewer.Camera || (NLParkViewer.Camera = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var Camera;
    (function (Camera) {
        var MathUtils = NLParkViewer.Maths.MathUtils;
        var SimulationCamera = (function (_super) {
            __extends(SimulationCamera, _super);
            function SimulationCamera(tackDocument) {
                _super.call(this);
                this.distance = 0;
                this.velocity = 0;
                this.energy = 0;
                this.stopMovement();
                this.trackDocument = tackDocument;
                this.distance = 0.0;
                var povMat = this.trackDocument.getMatrixAtDistance(this.distance);
                this.energy = 0.5 * this.velocity * this.velocity + 9.81 * povMat[13];
            }
            SimulationCamera.prototype.onMouseDown = function (e) {
            };
            SimulationCamera.prototype.onMouseUp = function (e) {
            };
            SimulationCamera.prototype.onMouseMove = function (e) {
            };
            SimulationCamera.prototype.onMouseWheel = function (e) {
            };
            SimulationCamera.prototype.onKeyDown = function (e) {
            };
            SimulationCamera.prototype.onKeyUp = function (e) {
            };
            SimulationCamera.prototype.update = function () {
                if (this.distance < 0)
                    this.distance = this.trackDocument.getLength();
                if (this.distance > this.trackDocument.getLength())
                    this.distance = 0;
                var povMat = this.trackDocument.getMatrixAtDistance(this.distance);
                var up = vec3.fromValues(povMat[4], povMat[5], povMat[6]);
                var front = vec3.fromValues(-povMat[8], -povMat[9], -povMat[10]);
                var pos4 = MathUtils.multiplyMat4Vec4(povMat, vec4.fromValues(0, 0.5, 0, 1));
                var pos = vec3.fromValues(pos4[0], pos4[1], pos4[2]);
                var scew = 0.0;
                var side = Math.tan(this.fov * Math.PI / 360.0) * (this.near);
                this.modelMatrix = mat4.lookAt(mat4.create(), pos, vec3.add(vec3.create(), pos, front), up);
                this.projectionMatrix = mat4.frustum(mat4.create(), -side + scew, side + scew, -this.viewPortHeight / this.viewPortWidth * side, this.viewPortHeight / this.viewPortWidth * side, this.near, this.far);
                this.projectionModelMatrix = mat4.multiply(mat4.create(), this.projectionMatrix, this.modelMatrix);
                this.energy -= (this.velocity * this.velocity * this.velocity);
                this.velocity = Math.sqrt(2 * (this.velocity + 9.81 * povMat[13]));
                this.distance += (this.velocity * this.getRenderTimeInSeconds()) / 1;
            };
            SimulationCamera.prototype.stopMovement = function () {
            };
            return SimulationCamera;
        }(Camera.Camera));
        Camera.SimulationCamera = SimulationCamera;
    })(Camera = NLParkViewer.Camera || (NLParkViewer.Camera = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var VertexTypes;
    (function (VertexTypes) {
        var AttributePointers = (function () {
            function AttributePointers(location, size, typeSize, type) {
                this.location = location;
                this.size = size;
                this.typeSize = typeSize;
                this.type = type;
            }
            return AttributePointers;
        }());
        VertexTypes.AttributePointers = AttributePointers;
    })(VertexTypes = NLParkViewer.VertexTypes || (NLParkViewer.VertexTypes = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var VertexTypes;
    (function (VertexTypes) {
        var Vertices = (function () {
            function Vertices() {
                this.numVertices = 0;
                this.data = [];
            }
            Vertices.prototype.getVertexSize = function (gl) {
                var size = 0;
                var attrPtrs = this.getAttributePointers(gl);
                for (var i = 0; i < attrPtrs.length; i++) {
                    var attrPtr = attrPtrs[i];
                    size += attrPtr.size * attrPtr.typeSize;
                }
                return size;
            };
            return Vertices;
        }());
        VertexTypes.Vertices = Vertices;
    })(VertexTypes = NLParkViewer.VertexTypes || (NLParkViewer.VertexTypes = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var VertexTypes;
    (function (VertexTypes) {
        var FloorVertices = (function (_super) {
            __extends(FloorVertices, _super);
            function FloorVertices() {
                _super.apply(this, arguments);
            }
            FloorVertices.prototype.setVertex = function (position, color) {
                this.data.push(position[0], position[1], position[2], position[3], color[0], color[1], color[2], color[3]);
                this.numVertices++;
            };
            FloorVertices.prototype.getAttributePointers = function (gl) {
                return [
                    new VertexTypes.AttributePointers(0, 4, 4, gl.FLOAT),
                    new VertexTypes.AttributePointers(1, 4, 4, gl.FLOAT)
                ];
            };
            return FloorVertices;
        }(VertexTypes.Vertices));
        VertexTypes.FloorVertices = FloorVertices;
    })(VertexTypes = NLParkViewer.VertexTypes || (NLParkViewer.VertexTypes = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var Core;
    (function (Core) {
        var VertexObject = (function () {
            function VertexObject(gl, vertices) {
                this.isFinalized = false;
                this.indices = [];
                this.glExt = gl.getExtension("OES_vertex_array_object");
                this.gl = gl;
                this.vertices = vertices;
            }
            VertexObject.prototype.finalizeData = function () {
                var gl = this.gl;
                var glExt = this.glExt;
                this.vertexArrayID = glExt.createVertexArrayOES();
                glExt.bindVertexArrayOES(this.vertexArrayID);
                this.vertexBuffer = gl.createBuffer();
                this.indexBuffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices.data), gl.STATIC_DRAW);
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(this.indices), gl.STATIC_DRAW);
                gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
                var attrPtrs = this.vertices.getAttributePointers(gl);
                var vertexSize = this.vertices.getVertexSize(gl);
                var currentOffset = 0;
                for (var i = 0; i < attrPtrs.length; i++) {
                    var attrPtr = attrPtrs[i];
                    gl.enableVertexAttribArray(attrPtr.location);
                    gl.vertexAttribPointer(attrPtr.location, attrPtr.size, attrPtr.type, false, vertexSize, currentOffset);
                    gl.disableVertexAttribArray(attrPtr.location);
                    currentOffset += attrPtr.typeSize * attrPtr.size;
                }
                this.isFinalized = true;
            };
            return VertexObject;
        }());
        Core.VertexObject = VertexObject;
    })(Core = NLParkViewer.Core || (NLParkViewer.Core = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var Renderer;
    (function (Renderer) {
        var FloorVertices = NLParkViewer.VertexTypes.FloorVertices;
        var VertexObject = NLParkViewer.Core.VertexObject;
        var FloorRenderer = (function () {
            function FloorRenderer(gl) {
                this.numPlanes = 500;
                this.planeSize = 10;
                this.planeSubDivision = 1;
                this.mainSegments = null;
                this.subSegments = null;
                this.ground = null;
                this.mainSegments = new FloorSegments(gl);
                this.subSegments = new FloorSegments(gl);
                this.ground = new FloorGround(gl);
                var totalSize = Math.floor(this.numPlanes * this.planeSubDivision);
                var halfSize = totalSize / 2.0;
                var verticesIndex = 0;
                var mainColor = vec4.fromValues(0.7, 0.7, 0.7, 1.0);
                var subColor = vec4.fromValues(0.95, 0.95, 0.95, 1.0);
                var groundColor = vec4.fromValues(1.0, 1.0, 1.0, 1.0);
                for (var z = 0; z <= this.numPlanes; z++) {
                    for (var x = 0; x <= this.numPlanes; x++) {
                        var position = vec4.fromValues(halfSize - (x * this.planeSubDivision), 0.0, halfSize - (z * this.planeSubDivision), 1.0);
                        this.mainSegments.vertices.setVertex(position, mainColor);
                        this.subSegments.vertices.setVertex(position, subColor);
                        this.ground.vertices.setVertex(vec4.subtract(vec4.create(), position, vec4.fromValues(0, 0.01, 0, 0)), groundColor);
                        if (x > 0 && z > 0) {
                            var a = Math.floor(verticesIndex - 1 - (this.numPlanes + 1));
                            var b = Math.floor(verticesIndex - 1);
                            var c = Math.floor(verticesIndex);
                            var d = Math.floor(verticesIndex - (this.numPlanes + 1));
                            this.ground.indices.push(a);
                            this.ground.indices.push(b);
                            this.ground.indices.push(c);
                            this.ground.indices.push(a);
                            this.ground.indices.push(c);
                            this.ground.indices.push(d);
                        }
                        if (x > 0) {
                            if (z % this.planeSize != 0) {
                                this.subSegments.indices.push(Math.floor(verticesIndex - 0));
                                this.subSegments.indices.push(Math.floor(verticesIndex - 1));
                            }
                            else {
                                this.mainSegments.indices.push(Math.floor(verticesIndex - 0));
                                this.mainSegments.indices.push(Math.floor(verticesIndex - 1));
                            }
                        }
                        if (z > 0) {
                            if (x % this.planeSize != 0) {
                                this.subSegments.indices.push(Math.floor(verticesIndex - 0));
                                this.subSegments.indices.push(Math.floor(verticesIndex - 0 - (this.numPlanes + 1)));
                            }
                            else {
                                this.mainSegments.indices.push(Math.floor(verticesIndex - 0));
                                this.mainSegments.indices.push(Math.floor(verticesIndex - 0 - (this.numPlanes + 1)));
                            }
                        }
                        verticesIndex++;
                    }
                }
                this.mainSegments.lineWidth = 2;
                this.mainSegments.finalizeData();
                this.subSegments.finalizeData();
                this.ground.finalizeData();
            }
            FloorRenderer.prototype.render = function (shader, cam) {
                shader.use();
                shader.uniformMat4("projectionMatrix", cam.projectionMatrix);
                shader.uniformMat4("modelMatrix", cam.modelMatrix);
                this.mainSegments.render();
                this.subSegments.render();
            };
            return FloorRenderer;
        }());
        Renderer.FloorRenderer = FloorRenderer;
        var FloorSegments = (function (_super) {
            __extends(FloorSegments, _super);
            function FloorSegments(gl) {
                _super.call(this, gl, new FloorVertices());
                this.lineWidth = 1;
            }
            FloorSegments.prototype.render = function () {
                this.glExt.bindVertexArrayOES(this.vertexArrayID);
                this.gl.lineWidth(this.lineWidth);
                this.gl.enableVertexAttribArray(0);
                this.gl.enableVertexAttribArray(1);
                this.gl.drawElements(this.gl.LINES, this.indices.length, this.gl.UNSIGNED_INT, 0);
                this.gl.disableVertexAttribArray(1);
                this.gl.disableVertexAttribArray(0);
            };
            return FloorSegments;
        }(VertexObject));
        var FloorGround = (function (_super) {
            __extends(FloorGround, _super);
            function FloorGround(gl) {
                _super.call(this, gl, new FloorVertices());
            }
            FloorGround.prototype.render = function () {
                this.glExt.bindVertexArrayOES(this.vertexArrayID);
                this.gl.enableVertexAttribArray(0);
                this.gl.enableVertexAttribArray(1);
                this.gl.drawElements(this.gl.TRIANGLES, this.indices.length, this.gl.UNSIGNED_INT, 0);
                this.gl.disableVertexAttribArray(1);
                this.gl.disableVertexAttribArray(0);
            };
            return FloorGround;
        }(VertexObject));
    })(Renderer = NLParkViewer.Renderer || (NLParkViewer.Renderer = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var Shader;
    (function (Shader) {
        var FloorShader = (function () {
            function FloorShader() {
            }
            FloorShader.prototype.vertex = function () {
                return "\nprecision highp float;\n\nattribute vec4 vPosition;\nattribute vec4 vColor;\n\nvarying vec4 oColor;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\n\nvoid main()   \n{\n\toColor = vColor;\n    gl_Position = projectionMatrix * modelMatrix * vec4(vPosition.xyz, 1.0);\n}\n            ";
            };
            FloorShader.prototype.fragment = function () {
                return "\nprecision highp float;\n\nvarying vec4 oColor;\n\nvoid main(void)\n{\n\tgl_FragColor = oColor;\n}\n            ";
            };
            return FloorShader;
        }());
        Shader.FloorShader = FloorShader;
    })(Shader = NLParkViewer.Shader || (NLParkViewer.Shader = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var Renderer;
    (function (Renderer) {
        var TrackStyles;
        (function (TrackStyles) {
            var StyleType = NLParkViewer.NoLimits.Chunks.Coaster.StyleType;
            var TrackStyle = (function () {
                function TrackStyle() {
                    this.heartline = 1.1;
                    this.spineTypes = [];
                }
                TrackStyle.prototype.getSpineType = function (spineType) {
                    if (!this.spineTypes.length)
                        return null;
                    if (spineType < 0 || spineType > this.spineTypes.length - 1)
                        spineType = 0;
                    return this.spineTypes[spineType];
                };
                TrackStyle.getTrackStyleInstance = function (style) {
                    switch (style) {
                        case StyleType.HyperCoaster:
                            return new TrackStyles.HyperCoaster();
                        default:
                            return new TrackStyles.HyperCoaster();
                    }
                };
                return TrackStyle;
            }());
            TrackStyles.TrackStyle = TrackStyle;
        })(TrackStyles = Renderer.TrackStyles || (Renderer.TrackStyles = {}));
    })(Renderer = NLParkViewer.Renderer || (NLParkViewer.Renderer = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var Renderer;
    (function (Renderer) {
        var VertexObject = NLParkViewer.Core.VertexObject;
        var FloorVertices = NLParkViewer.VertexTypes.FloorVertices;
        var FloorShader = NLParkViewer.Shader.FloorShader;
        var ShaderProgram = NLParkViewer.Core.ShaderProgram;
        var MathUtils = NLParkViewer.Maths.MathUtils;
        var CustomTrackRenderer = (function (_super) {
            __extends(CustomTrackRenderer, _super);
            function CustomTrackRenderer(gl, trackDocument, trackStyle) {
                _super.call(this, gl, new FloorVertices());
                this.shader = null;
                this.trackStyle = null;
                this.trackDocument = trackDocument;
                this.shader = new ShaderProgram(gl, new FloorShader());
                this.trackStyle = trackStyle;
                if (!trackDocument.getNumberOfNodes())
                    return;
                this.buildWireFrameTrack();
                this.finalizeData();
            }
            CustomTrackRenderer.prototype.buildWireFrameTrack = function () {
                var rawTrack = this.trackDocument.getRawTrack();
                var segments = [];
                var separators = rawTrack.getSeparators();
                var positions = [];
                var currentIndex = 0;
                var segIndex = 0;
                segments.push(rawTrack.getSegment());
                positions.push(0);
                separators.sort(function (a, b) {
                    return a.getPosition() > b.getPosition() ? 1 : -1;
                });
                for (var i = 0; i < separators.length; i++) {
                    segments.push(separators[i].getSegment());
                    positions.push(separators[i].getPosition());
                }
                positions.push(rawTrack.getVertices().length - 1);
                for (var i = 0; i < segments.length; i++) {
                    segIndex = 0;
                    var currentPosition = this.trackDocument.getDistanceOnParameter(positions[i]);
                    var nextPosition = this.trackDocument.getDistanceOnParameter(positions[i + 1]);
                    var segmentLength = nextPosition - currentPosition;
                    var spineType = this.trackStyle.getSpineType(segments[i].getSpineType());
                    if (spineType === null)
                        continue;
                    var numRailNodes = Math.floor(segmentLength / spineType.wireframeRailSpacing);
                    for (var j = 0; j < numRailNodes; j++) {
                        var dist = currentPosition + ((j / (numRailNodes - 1)) * segmentLength);
                        var nodeMatrix = this.trackDocument.getMatrixAtDistance(dist);
                        for (var k = 0; k < spineType.wireframeRails.length; k++) {
                            var pos = MathUtils.multiplyMat4Vec4(nodeMatrix, spineType.wireframeRails[k]);
                            pos[3] = 1;
                            this.vertices.setVertex(pos, vec4.fromValues(0.0, 0.5, 0.55, 1.0));
                            if (segIndex > 0) {
                                this.indices.push((currentIndex - spineType.wireframeRails.length) + k);
                                this.indices.push((currentIndex + k));
                            }
                        }
                        currentIndex += spineType.wireframeRails.length;
                        segIndex += spineType.wireframeRails.length;
                    }
                    var numCrosstieNodes = Math.floor(segmentLength / spineType.wireframeCrosstiesSpacing);
                    for (var j = 0; j < numCrosstieNodes; j++) {
                        var dist = currentPosition + ((j / (numCrosstieNodes - 1)) * segmentLength);
                        var nodeMatrix = this.trackDocument.getMatrixAtDistance(dist);
                        for (var k = 0; k < spineType.wireframeCrossties.length; k++) {
                            var pos = MathUtils.multiplyMat4Vec4(nodeMatrix, spineType.wireframeCrossties[k]);
                            pos[3] = 1;
                            this.vertices.setVertex(pos, vec4.fromValues(0.0, 0.5, 0.55, 1.0));
                            if (k < spineType.wireframeCrossties.length - 1) {
                                this.indices.push(currentIndex + k);
                                this.indices.push(currentIndex + k + 1);
                            }
                        }
                        currentIndex += spineType.wireframeCrossties.length;
                        segIndex += spineType.wireframeCrossties.length;
                    }
                }
            };
            CustomTrackRenderer.prototype.render = function (cam) {
                if (!this.isFinalized)
                    return;
                this.shader.use();
                this.shader.uniformMat4("projectionMatrix", cam.projectionMatrix);
                this.shader.uniformMat4("modelMatrix", cam.modelMatrix);
                this.glExt.bindVertexArrayOES(this.vertexArrayID);
                this.gl.enableVertexAttribArray(0);
                this.gl.enableVertexAttribArray(1);
                this.gl.lineWidth(2.0);
                this.gl.drawElements(this.gl.LINES, this.indices.length, this.gl.UNSIGNED_INT, 0);
                this.gl.disableVertexAttribArray(1);
                this.gl.disableVertexAttribArray(0);
            };
            return CustomTrackRenderer;
        }(VertexObject));
        Renderer.CustomTrackRenderer = CustomTrackRenderer;
    })(Renderer = NLParkViewer.Renderer || (NLParkViewer.Renderer = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var VertexTypes;
    (function (VertexTypes) {
        var NodeVertices = (function (_super) {
            __extends(NodeVertices, _super);
            function NodeVertices() {
                _super.apply(this, arguments);
            }
            NodeVertices.prototype.setVertex = function (position, normal, texCoordinate) {
                this.data.push(position[0], position[1], position[2], position[3], normal[0], normal[1], normal[2], normal[3], texCoordinate[0], texCoordinate[1]);
                this.numVertices++;
            };
            NodeVertices.prototype.getAttributePointers = function (gl) {
                return [
                    new VertexTypes.AttributePointers(0, 4, 4, gl.FLOAT),
                    new VertexTypes.AttributePointers(1, 4, 4, gl.FLOAT),
                    new VertexTypes.AttributePointers(2, 2, 4, gl.FLOAT)
                ];
            };
            return NodeVertices;
        }(VertexTypes.Vertices));
        VertexTypes.NodeVertices = NodeVertices;
    })(VertexTypes = NLParkViewer.VertexTypes || (NLParkViewer.VertexTypes = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var Shader;
    (function (Shader) {
        var NodeShader = (function () {
            function NodeShader() {
            }
            NodeShader.prototype.vertex = function () {
                return "\nprecision highp float;\n\nattribute vec4 vPosition;\nattribute vec4 vNormal;\nattribute vec2 vTexCoordinate;\n\nvarying vec4 oColor;\nvarying vec3 oNormal;\n\nuniform float connectionType;\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\n\nvoid main()   \n{\n    if(connectionType > 3.0) { // beam node\n        oColor = vec4(0.5, 0.0, 0.5, 1.0);\n    } else if(connectionType > 2.0) { // rail connector\n        oColor = vec4(0.8, 0.6, 0.0, 1.0);\n    } else if(connectionType > 1.0) { // footer\n        oColor = vec4(0.8, 0.6, 0.0, 1.0);\n    } else {\n        oColor = vec4(0.5, 0.0, 0.0, 1.0);\n    }\n    \n    oNormal = vec3(vNormal);\n    gl_Position = projectionMatrix * modelMatrix * vec4(vPosition.xyz, 1.0);\n}\n            ";
            };
            NodeShader.prototype.fragment = function () {
                return "\nprecision highp float;\n\nuniform vec3 reverseLightDirection;\n\nvarying vec4 oColor;\nvarying vec3 oNormal;\n\nvoid main(void)\n{\n   vec3 normal = normalize(oNormal); \n   float light = dot(normal, vec3(0.5, 0.7, 1.0));\n    \n    gl_FragColor = oColor;   \n    gl_FragColor.rgb *= light;\n}\n            ";
            };
            return NodeShader;
        }());
        Shader.NodeShader = NodeShader;
    })(Shader = NLParkViewer.Shader || (NLParkViewer.Shader = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Helper;
        (function (Helper) {
            var BeamConnectionType = NLParkViewer.NoLimits.Chunks.Coaster.Support.BeamConnectionType;
            var BinarySearch = NLParkViewer.Core.BinarySearch;
            var TrackStyle = NLParkViewer.Renderer.TrackStyles.TrackStyle;
            var SupportHelper = (function () {
                function SupportHelper(coasterDocument) {
                    this.calculatedRailConnectors = [];
                    this.originRailConnectors = [];
                    this.coasterDocument = coasterDocument;
                    this.supports = this.coasterDocument.getRawCoasterData().getSupports();
                    this.freeNodes = this.supports.getFreeNodes();
                    this.footerNodes = this.supports.getFooters();
                    this.railNodes = this.supports.getRailNodes();
                    this.beams = this.supports.getBeams();
                    this.calculateRailConnectors();
                }
                SupportHelper.prototype.calculateRailConnectors = function () {
                    var trackStyle = TrackStyle.getTrackStyleInstance(this.coasterDocument.getRawCoasterData().getStyle().getStyleType());
                    this.calculatedRailConnectors = new Array(this.coasterDocument.getTrackDocuments().length);
                    this.originRailConnectors = new Array(this.coasterDocument.getTrackDocuments().length);
                    for (var k = 0; k < this.coasterDocument.getTrackDocuments().length; k++) {
                        var trackDocument = this.coasterDocument.getTrackDocuments()[k];
                        var rawTrack = trackDocument.getRawTrack();
                        var segments = [];
                        var separators = rawTrack.getSeparators();
                        var railNodes = rawTrack.getRailNodes();
                        var positions = [];
                        segments.push(rawTrack.getSegment());
                        positions.push(0);
                        separators.sort(function (a, b) {
                            return a.getPosition() > b.getPosition() ? 1 : -1;
                        });
                        for (var i = 0; i < separators.length; i++) {
                            segments.push(separators[i].getSegment());
                            positions.push(separators[i].getPosition());
                        }
                        positions.push(rawTrack.getVertices().length - 1);
                        this.calculatedRailConnectors[k] = new Array(railNodes.length);
                        this.originRailConnectors[k] = new Array(railNodes.length);
                        for (var i = 0; i < railNodes.length; i++) {
                            var railNode = railNodes[i];
                            var positionIndex = Math.min(Math.max(0, BinarySearch.lowerBound(positions, railNode.getPosition()) - 1), segments.length - 1);
                            var spineType = trackStyle.getSpineType(segments[positionIndex].getSpineType());
                            var mat = trackDocument.getMatrixAtDistance(trackDocument.getDistanceOnParameter(railNode.getPosition()));
                            var nodes = spineType.getRailConnectorNodes(railNode.getConnectionStyle(), mat);
                            this.originRailConnectors[k][i] = vec3.fromValues(mat[12], mat[13], mat[14]);
                            if (nodes == null) {
                                this.calculatedRailConnectors[k][i] = [this.originRailConnectors[k][i]];
                            }
                            else {
                                this.calculatedRailConnectors[k][i] = nodes;
                            }
                        }
                    }
                };
                SupportHelper.prototype.getFreeNodePos = function (at) {
                    return this.freeNodes[at].getPosition();
                };
                SupportHelper.prototype.getFooterNodePos = function (at) {
                    var position = vec3.clone(this.footerNodes[at].getPosition());
                    return position;
                };
                SupportHelper.prototype.getAllFreeNodes = function () {
                    var freeNodes = [];
                    for (var i = 0; i < this.freeNodes.length; i++) {
                        freeNodes.push(this.getFreeNodePos(i));
                    }
                    return freeNodes;
                };
                SupportHelper.prototype.getAllFooterNodes = function () {
                    var footerNodes = [];
                    for (var i = 0; i < this.footerNodes.length; i++) {
                        footerNodes.push(this.getFooterNodePos(i));
                    }
                    return footerNodes;
                };
                SupportHelper.prototype.getBeamNodePos = function (atBeam, at) {
                    var beamNode = this.beams[atBeam].getBeamNodes()[at];
                    var beam = this.getBeam(atBeam);
                    return vec3.lerp(vec3.create(), beam[0], beam[1], beamNode.getPosition());
                };
                SupportHelper.prototype.getRailConnectorPos = function (atCoaster, atRailConnector, at) {
                    if (this.calculatedRailConnectors[atCoaster] !== null &&
                        this.calculatedRailConnectors[atCoaster][atRailConnector] !== null &&
                        this.calculatedRailConnectors[atCoaster][atRailConnector][at] !== null &&
                        at != -1) {
                        return this.calculatedRailConnectors[atCoaster][atRailConnector][at];
                    }
                    else {
                        var railConnectorNode = this.railNodes[atRailConnector];
                        var trackDocument = this.coasterDocument.getTrackDocuments()[atCoaster];
                        var mat = trackDocument.getMatrixAtDistance(trackDocument.getDistanceOnParameter(railConnectorNode.getPosition()));
                        return vec3.fromValues(mat[12], mat[13], mat[14]);
                    }
                };
                SupportHelper.prototype.getAllBeamNodes = function (flangesOnly) {
                    if (flangesOnly === void 0) { flangesOnly = false; }
                    var beamNodes = [];
                    for (var i = 0; i < this.beams.length; i++) {
                        for (var j = 0; j < this.beams[i].getBeamNodes().length; j++) {
                            if ((flangesOnly && this.beams[i].getBeamNodes()[j].isFlange()) || !flangesOnly)
                                beamNodes.push(this.getBeamNodePos(i, j));
                        }
                    }
                    return beamNodes;
                };
                SupportHelper.prototype.getPositionOfConnection = function (connection) {
                    switch (connection.getType()) {
                        case BeamConnectionType.FreeNode:
                            return this.getFreeNodePos(connection.getIndex());
                        case BeamConnectionType.Footer:
                            return this.getFooterNodePos(connection.getIndex());
                        case BeamConnectionType.BeamNode:
                            return this.getBeamNodePos(connection.getIndex(), connection.getIndexOnBeam());
                        case BeamConnectionType.RailConnector:
                            return this.getRailConnectorPos(connection.getIndex(), connection.getIndexOnBeam(), connection.getIndexOnRailConnector());
                    }
                    return null;
                };
                SupportHelper.prototype.getBeam = function (at) {
                    var beam = this.beams[at];
                    var pos1 = this.getPositionOfConnection(beam.getConnection1());
                    var pos2 = this.getPositionOfConnection(beam.getConnection2());
                    return [pos1, pos2];
                };
                SupportHelper.prototype.getAllBeams = function () {
                    var result = [];
                    for (var i = 0; i < this.beams.length; i++) {
                        var beamPos = this.getBeam(i);
                        if (beamPos[0] === null || beamPos[1] === null)
                            continue;
                        result.push(beamPos);
                    }
                    return result;
                };
                SupportHelper.prototype.getAllRailConnectorNodes = function () {
                    var railConnectorNodes = [];
                    for (var i = 0; i < this.calculatedRailConnectors.length; i++) {
                        for (var j = 0; j < this.calculatedRailConnectors[i].length; j++) {
                            railConnectorNodes.push([this.originRailConnectors[i][j]]);
                            for (var k = 0; k < this.calculatedRailConnectors[i][j].length; k++) {
                                railConnectorNodes[railConnectorNodes.length - 1].push(this.calculatedRailConnectors[i][j][k]);
                            }
                        }
                    }
                    return railConnectorNodes;
                };
                return SupportHelper;
            }());
            Helper.SupportHelper = SupportHelper;
        })(Helper = NoLimits.Helper || (NoLimits.Helper = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var Renderer;
    (function (Renderer) {
        var VertexObject = NLParkViewer.Core.VertexObject;
        var ShaderProgram = NLParkViewer.Core.ShaderProgram;
        var FloorVertices = NLParkViewer.VertexTypes.FloorVertices;
        var NodeShader = NLParkViewer.Shader.NodeShader;
        var NodeVertices = NLParkViewer.VertexTypes.NodeVertices;
        var BeamConnectionType = NLParkViewer.NoLimits.Chunks.Coaster.Support.BeamConnectionType;
        var SupportHelper = NLParkViewer.NoLimits.Helper.SupportHelper;
        var FloorShader = NLParkViewer.Shader.FloorShader;
        var SupportsRenderer = (function (_super) {
            __extends(SupportsRenderer, _super);
            function SupportsRenderer(gl, coasterDocument) {
                _super.call(this, gl, new FloorVertices());
                this.gl = gl;
                this.supportHelper = new SupportHelper(coasterDocument);
                this.nodeShader = new ShaderProgram(gl, new NodeShader());
                this.beamShader = new ShaderProgram(gl, new FloorShader());
                this.freeNodesRenderer = new NodeRenderer(this.gl, BeamConnectionType.FreeNode);
                this.footerNodesRenderer = new NodeRenderer(this.gl, BeamConnectionType.Footer);
                this.beamNodesRenderer = new NodeRenderer(this.gl, BeamConnectionType.BeamNode);
                this.railConnectorNodesRenderer = new NodeRenderer(this.gl, BeamConnectionType.RailConnector);
                this.fillFreeNodes();
                this.fillFooterNodes();
                this.fillBeamNodes();
                this.fillRailConnectorNodes();
                this.fillBeams();
            }
            SupportsRenderer.prototype.fillBeams = function () {
                var beams = this.supportHelper.getAllBeams();
                for (var i = 0; i < beams.length; i++) {
                    this.vertices.setVertex(vec4.fromValues(beams[i][0][0], beams[i][0][1], beams[i][0][2], 1), vec4.fromValues(0.5, 0.0, 0.0, 1));
                    this.vertices.setVertex(vec4.fromValues(beams[i][1][0], beams[i][1][1], beams[i][1][2], 1), vec4.fromValues(0.5, 0.0, 0.0, 1));
                    this.indices.push(this.vertices.numVertices - 2);
                    this.indices.push(this.vertices.numVertices - 1);
                }
                this.finalizeData();
            };
            SupportsRenderer.prototype.fillRailConnectorNodes = function () {
                var railConnectorNodes = this.supportHelper.getAllRailConnectorNodes();
                for (var i = 0; i < railConnectorNodes.length; i++) {
                    for (var j = 0; j < railConnectorNodes[i].length; j++) {
                        this.railConnectorNodesRenderer.addNode(railConnectorNodes[i][j]);
                        this.vertices.setVertex(vec4.fromValues(railConnectorNodes[i][0][0], railConnectorNodes[i][0][1], railConnectorNodes[i][0][2], 1), vec4.fromValues(0.5, 0.0, 0.0, 1));
                        this.vertices.setVertex(vec4.fromValues(railConnectorNodes[i][j][0], railConnectorNodes[i][j][1], railConnectorNodes[i][j][2], 1), vec4.fromValues(0.5, 0.0, 0.0, 1));
                        this.indices.push(this.vertices.numVertices - 2);
                        this.indices.push(this.vertices.numVertices - 1);
                    }
                }
                this.railConnectorNodesRenderer.finalizeData();
            };
            SupportsRenderer.prototype.fillFreeNodes = function () {
                var freeNodes = this.supportHelper.getAllFreeNodes();
                for (var i = 0; i < freeNodes.length; i++) {
                    this.freeNodesRenderer.addNode(freeNodes[i]);
                }
                this.freeNodesRenderer.finalizeData();
            };
            SupportsRenderer.prototype.fillBeamNodes = function () {
                var beamNodes = this.supportHelper.getAllBeamNodes();
                for (var i = 0; i < beamNodes.length; i++) {
                    this.beamNodesRenderer.addNode(beamNodes[i]);
                }
                this.beamNodesRenderer.finalizeData();
            };
            SupportsRenderer.prototype.fillFooterNodes = function () {
                var footerNodes = this.supportHelper.getAllFooterNodes();
                for (var i = 0; i < footerNodes.length; i++) {
                    this.footerNodesRenderer.addNode(footerNodes[i]);
                }
                this.footerNodesRenderer.finalizeData();
            };
            SupportsRenderer.prototype.render = function (cam) {
                this.beamShader.use();
                this.beamShader.uniformMat4("projectionMatrix", cam.projectionMatrix);
                this.beamShader.uniformMat4("modelMatrix", cam.modelMatrix);
                this.glExt.bindVertexArrayOES(this.vertexArrayID);
                this.gl.enableVertexAttribArray(0);
                this.gl.enableVertexAttribArray(1);
                this.gl.lineWidth(2.0);
                this.gl.drawElements(this.gl.LINES, this.indices.length, this.gl.UNSIGNED_INT, 0);
                this.gl.disableVertexAttribArray(1);
                this.gl.disableVertexAttribArray(0);
                this.nodeShader.use();
                this.nodeShader.uniformMat4("projectionMatrix", cam.projectionMatrix);
                this.nodeShader.uniformMat4("modelMatrix", cam.modelMatrix);
                this.freeNodesRenderer.render(cam, this.nodeShader);
                this.footerNodesRenderer.render(cam, this.nodeShader);
                this.beamNodesRenderer.render(cam, this.nodeShader);
                this.railConnectorNodesRenderer.render(cam, this.nodeShader);
            };
            return SupportsRenderer;
        }(VertexObject));
        Renderer.SupportsRenderer = SupportsRenderer;
        var NodeRenderer = (function (_super) {
            __extends(NodeRenderer, _super);
            function NodeRenderer(gl, connectionType) {
                _super.call(this, gl, new NodeVertices());
                this.latBands = 12;
                this.longBands = 12;
                this.radius = 0.04;
                this.spherePositions = [];
                this.sphereNormals = [];
                this.sphereTexCoordinates = [];
                this.sphereIndices = [];
                this.initSphere();
                this.connectionType = connectionType;
            }
            NodeRenderer.prototype.initSphere = function () {
                for (var latNumber = 0; latNumber <= this.latBands; latNumber++) {
                    var theta = latNumber * Math.PI / this.latBands;
                    var sinTheta = Math.sin(theta);
                    var cosTheta = Math.cos(theta);
                    for (var longNumber = 0; longNumber <= this.longBands; longNumber++) {
                        var phi = longNumber * 2 * Math.PI / this.longBands;
                        var sinPhi = Math.sin(phi);
                        var cosPhi = Math.cos(phi);
                        var x = cosPhi * sinTheta;
                        var y = cosTheta;
                        var z = sinPhi * sinTheta;
                        var u = 1 - (longNumber / this.longBands);
                        var v = 1 - (latNumber / this.latBands);
                        this.spherePositions.push(vec4.fromValues(this.radius * x, this.radius * y, this.radius * z, 1));
                        this.sphereNormals.push(vec4.fromValues(x, y, z, 1));
                        this.sphereTexCoordinates.push(vec2.fromValues(u, v));
                        if (latNumber < this.latBands && longNumber < this.longBands) {
                            var first = (latNumber * (this.longBands + 1)) + longNumber;
                            var second = first + this.latBands + 1;
                            this.sphereIndices.push(first);
                            this.sphereIndices.push(second);
                            this.sphereIndices.push(first + 1);
                            this.sphereIndices.push(second);
                            this.sphereIndices.push(second + 1);
                            this.sphereIndices.push(first + 1);
                        }
                    }
                }
            };
            NodeRenderer.prototype.addNode = function (pos) {
                var numVertices = this.vertices.numVertices;
                for (var i = 0; i < this.spherePositions.length; i++) {
                    this.vertices.setVertex(vec4.fromValues(this.spherePositions[i][0] + pos[0], this.spherePositions[i][1] + pos[1], this.spherePositions[i][2] + pos[2], 1), this.sphereNormals[i], this.sphereTexCoordinates[i]);
                }
                for (var i = 0; i < this.sphereIndices.length; i++) {
                    this.indices.push(this.sphereIndices[i] + numVertices);
                }
            };
            NodeRenderer.prototype.render = function (cam, shader) {
                shader.uniformNumber("connectionType", this.connectionType);
                this.glExt.bindVertexArrayOES(this.vertexArrayID);
                this.gl.enableVertexAttribArray(0);
                this.gl.enableVertexAttribArray(1);
                this.gl.enableVertexAttribArray(2);
                this.gl.drawElements(this.gl.TRIANGLES, this.indices.length, this.gl.UNSIGNED_INT, 0);
                this.gl.disableVertexAttribArray(2);
                this.gl.disableVertexAttribArray(1);
                this.gl.disableVertexAttribArray(0);
            };
            return NodeRenderer;
        }(VertexObject));
    })(Renderer = NLParkViewer.Renderer || (NLParkViewer.Renderer = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var Renderer;
    (function (Renderer) {
        var TrackStyle = NLParkViewer.Renderer.TrackStyles.TrackStyle;
        var CoasterRenderer = (function () {
            function CoasterRenderer(gl, coasterDocument) {
                this.rendererTrackDocuments = [];
                this.supportsRenderer = null;
                this.coasterDocument = coasterDocument;
                this.supportsRenderer = new Renderer.SupportsRenderer(gl, coasterDocument);
                for (var i = 0; i < this.coasterDocument.getTrackDocuments().length; i++) {
                    this.rendererTrackDocuments.push(new Renderer.CustomTrackRenderer(gl, this.coasterDocument.getTrackDocuments()[i], TrackStyle.getTrackStyleInstance(coasterDocument.getRawCoasterData().getStyle().getStyleType())));
                }
            }
            CoasterRenderer.prototype.render = function (cam) {
                for (var i = 0; i < this.rendererTrackDocuments.length; i++) {
                    this.rendererTrackDocuments[i].render(cam);
                }
                this.supportsRenderer.render(cam);
            };
            return CoasterRenderer;
        }());
        Renderer.CoasterRenderer = CoasterRenderer;
    })(Renderer = NLParkViewer.Renderer || (NLParkViewer.Renderer = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var Renderer;
    (function (Renderer) {
        var ParkRenderer = (function () {
            function ParkRenderer(gl, parkDocument) {
                this.rendererCoasterDocuments = [];
                this.parkDocument = parkDocument;
                for (var i = 0; i < this.parkDocument.getCoasterDocuments().length; i++) {
                    this.rendererCoasterDocuments.push(new Renderer.CoasterRenderer(gl, this.parkDocument.getCoasterDocuments()[i]));
                }
            }
            ParkRenderer.prototype.render = function (cam) {
                for (var i = 0; i < this.rendererCoasterDocuments.length; i++) {
                    this.rendererCoasterDocuments[i].render(cam);
                }
            };
            return ParkRenderer;
        }());
        Renderer.ParkRenderer = ParkRenderer;
    })(Renderer = NLParkViewer.Renderer || (NLParkViewer.Renderer = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var View;
    (function (View) {
        var ShaderProgram = NLParkViewer.Core.ShaderProgram;
        var CameraManager = NLParkViewer.Camera.CameraManager;
        var PerspectiveCamera = NLParkViewer.Camera.PerspectiveCamera;
        var FloorShader = NLParkViewer.Shader.FloorShader;
        var FloorRenderer = NLParkViewer.Renderer.FloorRenderer;
        var ParkRenderer = NLParkViewer.Renderer.ParkRenderer;
        var POVCamera = NLParkViewer.Camera.POVCamera;
        var GLView = (function (_super) {
            __extends(GLView, _super);
            function GLView() {
                var _this = this;
                _super.call(this, document.createElement("canvas"));
                this.gl = null;
                this.parkDocument = null;
                this.shaderFloor = null;
                this.rendererFloor = null;
                this.rendererPark = null;
                this.cameraManager = new CameraManager(this);
                this.activeCoaster = NaN;
                this.activeTrack = NaN;
                this.renderTimeInSec = 0;
                this.view.tabIndex = 1;
                window.setTimeout(function () {
                    _this.start();
                }, 0);
            }
            ;
            GLView.prototype.init = function () {
                try {
                    this.gl = this.view.getContext("webgl");
                }
                catch (e) {
                }
                if (!this.gl)
                    alert("Could not initialise WebGL, sorry :-(");
                this.gl.getExtension("OES_element_index_uint");
            };
            GLView.prototype.initShader = function () {
                this.shaderFloor = new ShaderProgram(this.gl, new FloorShader());
            };
            GLView.prototype.initRenderer = function () {
                this.rendererFloor = new FloorRenderer(this.gl);
            };
            GLView.prototype.initCameras = function () {
                this.cameraManager.addCamera(new PerspectiveCamera(), "Perspective");
                this.cameraManager.setViewPort(this.view.width, this.view.height);
                this.cameraManager.activate("Perspective");
            };
            GLView.prototype.onTrackOrCoasterActivated = function (e) {
                var activeCoasterTrack = e.getTarget();
                this.activeCoaster = activeCoasterTrack.getActiveCoaster();
                this.activeTrack = activeCoasterTrack.getActiveTrack();
            };
            GLView.prototype.onParkDocumentLoad = function (e) {
                this.parkDocument = e.getTarget();
                this.rendererPark = new ParkRenderer(this.gl, this.parkDocument);
                var perspectiveCamera = this.cameraManager.getCamera("Perspective");
                this.cameraManager.removeAllCameras();
                for (var i = 0; i < this.parkDocument.getCoasterDocuments().length; i++) {
                    for (var j = 0; j < this.parkDocument.getCoasterDocuments()[i].getTrackDocuments().length; j++) {
                        this.cameraManager.addCamera(new POVCamera(this.parkDocument.getCoasterDocuments()[i].getTrackDocuments()[j]), "POV, " + i + ", " + j);
                    }
                }
                this.cameraManager.addCamera(perspectiveCamera, "Perspective");
                this.cameraManager.activate("Perspective");
                this.dispatchEvent(new NLParkViewer.Event("parkload", this));
            };
            GLView.prototype.onCameraChanged = function (e) {
                var cameraSwitch = e.getTarget();
                switch (cameraSwitch.getActiveCamera()) {
                    case "POV":
                        if (isNaN(this.activeTrack))
                            return;
                        this.cameraManager.activate("POV, " + this.activeCoaster + ", " + this.activeTrack);
                        break;
                    case "Perspective":
                        this.cameraManager.activate("Perspective");
                        break;
                }
            };
            GLView.prototype.draw = function () {
                this.gl.viewport(0, 0, this.cameraManager.currentCamera.viewPortWidth, this.cameraManager.currentCamera.viewPortHeight);
                this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
                this.gl.clearColor(1, 1, 1, 1.0);
                this.cameraManager.currentCamera.update();
                this.rendererFloor.render(this.shaderFloor, this.cameraManager.currentCamera);
                if (this.rendererPark != null)
                    this.rendererPark.render(this.cameraManager.currentCamera);
                var endTime = new Date();
                var diff = endTime - this.startTime;
                this.renderTimeInSec = diff * 0.001;
                this.startTime = endTime;
            };
            GLView.prototype.tick = function () {
                var _this = this;
                window.requestAnimationFrame(function () {
                    _this.tick();
                });
                this.draw();
            };
            GLView.prototype.start = function () {
                this.init();
                this.initShader();
                this.initCameras();
                this.initRenderer();
                this.resize(this.gl.canvas.clientWidth, this.gl.canvas.clientHeight);
                this.gl.enable(this.gl.DEPTH_TEST);
                this.startTime = new Date();
                this.tick();
                this.dispatchEvent(new NLParkViewer.Event("load", this));
            };
            ;
            GLView.prototype.resize = function (w, h) {
                if (this.gl) {
                    var realToCSSPixels = window.devicePixelRatio;
                    var displayWidth = Math.floor(w * realToCSSPixels);
                    var displayHeight = Math.floor(h * realToCSSPixels);
                    this.gl.canvas.width = displayWidth;
                    this.gl.canvas.height = displayHeight;
                    this.cameraManager.setViewPort(displayWidth, displayHeight);
                }
            };
            GLView.prototype.printContextInformation = function () {
                console.log("===============================================================");
                console.log("Version: " + this.gl.getParameter(this.gl["VERSION"]));
                console.log("Renderer: " + this.gl.getParameter(this.gl["RENDERER"]));
                console.log("ShadingLanguageVersion: " + this.gl.getParameter(this.gl["SHADING_LANGUAGE_VERSION"]));
                console.log("Vendor: " + this.gl.getParameter(this.gl["VENDOR"]));
                console.log("Version: " + this.gl.getParameter(this.gl["VERSION"]));
                console.log("===============================================================");
            };
            return GLView;
        }(View.View));
        View.GLView = GLView;
    })(View = NLParkViewer.View || (NLParkViewer.View = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var View;
    (function (View) {
        var BaseView = (function (_super) {
            __extends(BaseView, _super);
            function BaseView(baseView, application) {
                var _this = this;
                _super.call(this, baseView);
                this.view.classList.add("NoLimitsParkViewer");
                this.glView = new View.GLView();
                this.activeCoasterTrackView = new View.ActiveCoasterTrackView();
                this.cameraSwitchView = new View.CameraSwitchView();
                this.activeCoasterTrackView.hide();
                this.cameraSwitchView.hide();
                this.glView.hide();
                this.addEventListener("parkdocumentload", this.glView.onParkDocumentLoad.bind(this.glView));
                this.addEventListener("parkdocumentload", this.activeCoasterTrackView.onParkDocumentLoad.bind(this.activeCoasterTrackView));
                this.addEventListener("parkdocumentload", this.cameraSwitchView.onParkDocumentLoad.bind(this.cameraSwitchView));
                this.activeCoasterTrackView.addEventListener("activated", this.glView.onTrackOrCoasterActivated.bind(this.glView));
                this.activeCoasterTrackView.addEventListener("activated", this.cameraSwitchView.onTrackOrCoasterActivated.bind(this.cameraSwitchView));
                this.cameraSwitchView.addEventListener("change", this.glView.onCameraChanged.bind(this.glView));
                this.glView.addEventListener(application.options.trackURL ? "parkload" : "load", function () {
                    _this.activeCoasterTrackView.show();
                    _this.cameraSwitchView.show();
                    _this.glView.show();
                });
                this.view.appendChild(this.glView.getView());
                this.view.appendChild(this.activeCoasterTrackView.getView());
                this.view.appendChild(this.cameraSwitchView.getView());
                if (!application.options.trackURL)
                    this.initDragAndDropFile();
                this.resize();
            }
            BaseView.prototype.resize = function () {
                var rect = this.view.getBoundingClientRect();
                this.glView.resize(rect.width, rect.height);
            };
            BaseView.prototype.initDragAndDropFile = function () {
                this.view.addEventListener("drop", this.parseDroppedFile.bind(this));
                this.view.addEventListener("dragover", function (event) {
                    event.preventDefault();
                });
                this.view.addEventListener("dragenter", function (event) {
                    event.target.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
                });
                this.view.addEventListener("dragleave", function (event) {
                    event.target.style.backgroundColor = null;
                });
            };
            BaseView.prototype.parseDroppedFile = function (event) {
                event.preventDefault();
                event.stopPropagation();
                var files = event.dataTransfer.files;
                this.openPark(files);
                event.target.style.backgroundColor = null;
            };
            BaseView.prototype.openPark = function (files) {
                var parkStream = new NLParkViewer.NoLimits.ParkStream();
                parkStream.addEventListener("load", this.parkStreamOnLoadListener.bind(this));
                parkStream.openFromFile(files);
            };
            BaseView.prototype.openParkFromURL = function (url) {
                var parkStream = new NLParkViewer.NoLimits.ParkStream();
                parkStream.addEventListener("load", this.parkStreamOnLoadListener.bind(this));
                parkStream.openFormURL(url);
            };
            BaseView.prototype.parkStreamOnLoadListener = function (event) {
                var _this = this;
                this.park = event.getTarget();
                this.parkDocument = new NLParkViewer.NoLimits.Document.ParkDocument(this.park);
                this.parkDocument.addEventListener("finished", function () {
                    _this.dispatchEvent(new NLParkViewer.Event("parkdocumentload", _this.parkDocument));
                });
                this.parkDocument.open();
            };
            ;
            return BaseView;
        }(View.View));
        View.BaseView = BaseView;
    })(View = NLParkViewer.View || (NLParkViewer.View = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var MathUtils = NLParkViewer.Maths.MathUtils;
    var Application = (function () {
        function Application(baseView, options) {
            this.options = {
                trackURL: null
            };
            this.options = Object.assign(this.options, options);
            MathUtils.init();
            this.baseView = new NLParkViewer.View.BaseView(baseView, this);
            if (this.options.trackURL) {
                this.baseView.openParkFromURL(this.options.trackURL);
            }
        }
        Application.prototype.resize = function () {
            this.baseView.resize();
        };
        return Application;
    }());
    NLParkViewer.Application = Application;
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Section;
                    (function (Section) {
                        (function (TransportType) {
                            TransportType[TransportType["FrictionWheels"] = 0] = "FrictionWheels";
                            TransportType[TransportType["LinearMotor"] = 1] = "LinearMotor";
                            TransportType[TransportType["HideDevice"] = 2] = "HideDevice";
                        })(Section.TransportType || (Section.TransportType = {}));
                        var TransportType = Section.TransportType;
                        var Transport = (function (_super) {
                            __extends(Transport, _super);
                            function Transport() {
                                _super.call(this);
                                this.speed = 0;
                                this.acceleration = 0;
                                this.deceleration = 0;
                                this.speedingUpPasses = 0;
                                this.speedingDown = false;
                                this.minSpeed = 0;
                                this.transportType = TransportType.FrictionWheels;
                                this.setSectionType(Section.SectionType.Transport);
                            }
                            Transport.prototype.getSpeed = function () {
                                return this.speed;
                            };
                            Transport.prototype.setSpeed = function (value) {
                                this.speed = value;
                            };
                            Transport.prototype.getAcceleration = function () {
                                return this.acceleration;
                            };
                            Transport.prototype.setAcceleration = function (value) {
                                this.acceleration = value;
                            };
                            Transport.prototype.getDeceleration = function () {
                                return this.deceleration;
                            };
                            Transport.prototype.setDeceleration = function (value) {
                                this.deceleration = value;
                            };
                            Transport.prototype.getSpeedingUpPasses = function () {
                                return this.speedingUpPasses;
                            };
                            Transport.prototype.setSpeedingUpPasses = function (value) {
                                this.speedingUpPasses = value;
                            };
                            Transport.prototype.getSpeedingDown = function () {
                                return this.speedingDown;
                            };
                            Transport.prototype.setSpeedingDown = function (value) {
                                this.speedingDown = value;
                            };
                            Transport.prototype.getMinSpeed = function () {
                                return this.minSpeed;
                            };
                            Transport.prototype.setMinSpeed = function (value) {
                                this.minSpeed = value;
                            };
                            Transport.prototype.getTransportType = function () {
                                return this.transportType;
                            };
                            Transport.prototype.setTransportType = function (value) {
                                this.transportType = value;
                            };
                            return Transport;
                        }(Section.Section));
                        Section.Transport = Transport;
                    })(Section = Track.Section || (Track.Section = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Section;
                    (function (Section) {
                        var TransportDevice = (function () {
                            function TransportDevice() {
                                this.type = Section.TransportType.FrictionWheels;
                                this.speed = 0;
                                this.acceleration = 0;
                                this.deceleration = 0;
                                this.launch = false;
                                this.launchAcceleration = 0;
                                this.launchMaxSpeed = 0;
                            }
                            TransportDevice.prototype.getType = function () {
                                return this.type;
                            };
                            TransportDevice.prototype.setType = function (value) {
                                this.type = value;
                            };
                            TransportDevice.prototype.getSpeed = function () {
                                return this.speed;
                            };
                            TransportDevice.prototype.setSpeed = function (value) {
                                this.speed = value;
                            };
                            TransportDevice.prototype.getAcceleration = function () {
                                return this.acceleration;
                            };
                            TransportDevice.prototype.setAcceleration = function (value) {
                                this.acceleration = value;
                            };
                            TransportDevice.prototype.getDeceleration = function () {
                                return this.deceleration;
                            };
                            TransportDevice.prototype.setDeceleration = function (value) {
                                this.deceleration = value;
                            };
                            TransportDevice.prototype.getLaunch = function () {
                                return this.launch;
                            };
                            TransportDevice.prototype.setLaunch = function (value) {
                                this.launch = value;
                            };
                            TransportDevice.prototype.getLaunchAcceleration = function () {
                                return this.launchAcceleration;
                            };
                            TransportDevice.prototype.setLaunchAcceleration = function (value) {
                                this.launchAcceleration = value;
                            };
                            TransportDevice.prototype.getLaunchMaxSpeed = function () {
                                return this.launchMaxSpeed;
                            };
                            TransportDevice.prototype.setLaunchMaxSpeed = function (value) {
                                this.launchMaxSpeed = value;
                            };
                            return TransportDevice;
                        }());
                        Section.TransportDevice = TransportDevice;
                    })(Section = Track.Section || (Track.Section = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Section;
                    (function (Section) {
                        (function (BrakeMode) {
                            BrakeMode[BrakeMode["TrimBrake"] = 0] = "TrimBrake";
                            BrakeMode[BrakeMode["BlockBrake"] = 1] = "BlockBrake";
                        })(Section.BrakeMode || (Section.BrakeMode = {}));
                        var BrakeMode = Section.BrakeMode;
                        (function (BrakeType) {
                            BrakeType[BrakeType["FrictionBrake"] = 0] = "FrictionBrake";
                            BrakeType[BrakeType["MagneticBrake"] = 1] = "MagneticBrake";
                            BrakeType[BrakeType["HideBrakeDevice"] = 2] = "HideBrakeDevice";
                        })(Section.BrakeType || (Section.BrakeType = {}));
                        var BrakeType = Section.BrakeType;
                        (function (BrakePosition) {
                            BrakePosition[BrakePosition["FirstCar"] = 0] = "FirstCar";
                            BrakePosition[BrakePosition["MiddleCar"] = 1] = "MiddleCar";
                        })(Section.BrakePosition || (Section.BrakePosition = {}));
                        var BrakePosition = Section.BrakePosition;
                        var Brake = (function (_super) {
                            __extends(Brake, _super);
                            function Brake() {
                                _super.call(this);
                                this.extraBlockLength = 0;
                                this.mode = BrakeMode.BlockBrake;
                                this.completeStop = false;
                                this.waitTime = 0;
                                this.brakeType = BrakeType.FrictionBrake;
                                this.speedLimit = 0;
                                this.hysteresis = 0;
                                this.deceleration = 0;
                                this.positionOnTrain = BrakePosition.FirstCar;
                                this.positionOnSection = 0;
                                this.enableTransport = false;
                                this.transportDevice = new Section.TransportDevice();
                                this.setSectionType(Section.SectionType.Brake);
                            }
                            Brake.prototype.getExtraBlockLength = function () {
                                return this.extraBlockLength;
                            };
                            Brake.prototype.setExtraBlockLength = function (value) {
                                this.extraBlockLength = value;
                            };
                            Brake.prototype.getMode = function () {
                                return this.mode;
                            };
                            Brake.prototype.setMode = function (value) {
                                this.mode = value;
                            };
                            Brake.prototype.getCompleteStop = function () {
                                return this.completeStop;
                            };
                            Brake.prototype.setCompleteStop = function (value) {
                                this.completeStop = value;
                            };
                            Brake.prototype.getWaitTime = function () {
                                return this.waitTime;
                            };
                            Brake.prototype.setWaitTime = function (value) {
                                this.waitTime = value;
                            };
                            Brake.prototype.getBrakeType = function () {
                                return this.brakeType;
                            };
                            Brake.prototype.setBrakeType = function (value) {
                                this.brakeType = value;
                            };
                            Brake.prototype.getSpeedLimit = function () {
                                return this.speedLimit;
                            };
                            Brake.prototype.setSpeedLimit = function (value) {
                                this.speedLimit = value;
                            };
                            Brake.prototype.getDeceleration = function () {
                                return this.deceleration;
                            };
                            Brake.prototype.setDeceleration = function (value) {
                                this.deceleration = value;
                            };
                            Brake.prototype.getPositionOnTrain = function () {
                                return this.positionOnTrain;
                            };
                            Brake.prototype.setPositionOnTrain = function (value) {
                                this.positionOnTrain = value;
                            };
                            Brake.prototype.getPositionOnSection = function () {
                                return this.positionOnSection;
                            };
                            Brake.prototype.setPositionOnSection = function (value) {
                                this.positionOnSection = value;
                            };
                            Brake.prototype.getEnableTransport = function () {
                                return this.enableTransport;
                            };
                            Brake.prototype.setEnableTransport = function (value) {
                                this.enableTransport = value;
                            };
                            Brake.prototype.getTransportDevice = function () {
                                return this.transportDevice;
                            };
                            Brake.prototype.setTransportDevice = function (value) {
                                this.transportDevice = value;
                            };
                            Brake.prototype.getHysteresis = function () {
                                return this.hysteresis;
                            };
                            Brake.prototype.setHysteresis = function (value) {
                                this.hysteresis = value;
                            };
                            return Brake;
                        }(Section.Section));
                        Section.Brake = Brake;
                    })(Section = Track.Section || (Track.Section = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Section;
                    (function (Section) {
                        var BrakeDevice = (function () {
                            function BrakeDevice() {
                                this.deceleration = 0;
                                this.brakeType = Section.BrakeType.FrictionBrake;
                            }
                            BrakeDevice.prototype.getDeceleration = function () {
                                return this.deceleration;
                            };
                            BrakeDevice.prototype.setDeceleration = function (value) {
                                this.deceleration = value;
                            };
                            BrakeDevice.prototype.getBrakeType = function () {
                                return this.brakeType;
                            };
                            BrakeDevice.prototype.setBrakeType = function (value) {
                                this.brakeType = value;
                            };
                            return BrakeDevice;
                        }());
                        Section.BrakeDevice = BrakeDevice;
                    })(Section = Track.Section || (Track.Section = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Section;
                    (function (Section) {
                        (function (LiftType) {
                            LiftType[LiftType["Chain"] = 0] = "Chain";
                            LiftType[LiftType["FrictionWheels"] = 1] = "FrictionWheels";
                        })(Section.LiftType || (Section.LiftType = {}));
                        var LiftType = Section.LiftType;
                        (function (LiftMotorLocation) {
                            LiftMotorLocation[LiftMotorLocation["AtStart"] = 0] = "AtStart";
                            LiftMotorLocation[LiftMotorLocation["AtEnd"] = 1] = "AtEnd";
                            LiftMotorLocation[LiftMotorLocation["Silent"] = 2] = "Silent";
                        })(Section.LiftMotorLocation || (Section.LiftMotorLocation = {}));
                        var LiftMotorLocation = Section.LiftMotorLocation;
                        var Lift = (function (_super) {
                            __extends(Lift, _super);
                            function Lift() {
                                _super.call(this);
                                this.speed = 0;
                                this.acceleration = 0;
                                this.deceleration = 0;
                                this.liftType = LiftType.Chain;
                                this.motorLocation = LiftMotorLocation.AtStart;
                                this.hasAntiRollbackDevice = false;
                                this.shuttleModeGentle2ndPassRelease = false;
                                this.diveCoasterDropReleaseMode = false;
                                this.extraBlockLength = 0;
                                this.setSectionType(Section.SectionType.Lift);
                            }
                            Lift.prototype.getSpeed = function () {
                                return this.speed;
                            };
                            Lift.prototype.setSpeed = function (value) {
                                this.speed = value;
                            };
                            Lift.prototype.getAcceleration = function () {
                                return this.acceleration;
                            };
                            Lift.prototype.setAcceleration = function (value) {
                                this.acceleration = value;
                            };
                            Lift.prototype.getDeceleration = function () {
                                return this.deceleration;
                            };
                            Lift.prototype.setDeceleration = function (value) {
                                this.deceleration = value;
                            };
                            Lift.prototype.getLiftType = function () {
                                return this.liftType;
                            };
                            Lift.prototype.setLiftType = function (value) {
                                this.liftType = value;
                            };
                            Lift.prototype.getMotorLocation = function () {
                                return this.motorLocation;
                            };
                            Lift.prototype.setMotorLocation = function (value) {
                                this.motorLocation = value;
                            };
                            Lift.prototype.getHasAntiRollbackDevice = function () {
                                return this.hasAntiRollbackDevice;
                            };
                            Lift.prototype.setHasAntiRollbackDevice = function (value) {
                                this.hasAntiRollbackDevice = value;
                            };
                            Lift.prototype.getShuttleModeGentle2ndPassRelease = function () {
                                return this.shuttleModeGentle2ndPassRelease;
                            };
                            Lift.prototype.setShuttleModeGentle2ndPassRelease = function (value) {
                                this.shuttleModeGentle2ndPassRelease = value;
                            };
                            Lift.prototype.getDiveCoasterDropReleaseMode = function () {
                                return this.diveCoasterDropReleaseMode;
                            };
                            Lift.prototype.setDiveCoasterDropReleaseMode = function (value) {
                                this.diveCoasterDropReleaseMode = value;
                            };
                            Lift.prototype.getExtraBlockLength = function () {
                                return this.extraBlockLength;
                            };
                            Lift.prototype.setExtraBlockLength = function (value) {
                                this.extraBlockLength = value;
                            };
                            return Lift;
                        }(Section.Section));
                        Section.Lift = Lift;
                    })(Section = Track.Section || (Track.Section = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Section;
                    (function (Section) {
                        var WaitTime = (function () {
                            function WaitTime() {
                                this.avarage = 50;
                                this.minimum = 40;
                                this.maximum = 60;
                                this.deviation = 5;
                                this.synchronizeDispatchWith = [];
                            }
                            WaitTime.prototype.getAvarage = function () {
                                return this.avarage;
                            };
                            WaitTime.prototype.setAvarage = function (value) {
                                this.avarage = value;
                            };
                            WaitTime.prototype.getMinimum = function () {
                                return this.minimum;
                            };
                            WaitTime.prototype.setMinimum = function (value) {
                                this.minimum = value;
                            };
                            WaitTime.prototype.getMaximum = function () {
                                return this.maximum;
                            };
                            WaitTime.prototype.setMaximum = function (value) {
                                this.maximum = value;
                            };
                            WaitTime.prototype.getDeviation = function () {
                                return this.deviation;
                            };
                            WaitTime.prototype.setDeviation = function (value) {
                                this.deviation = value;
                            };
                            WaitTime.prototype.getSynchronizeDispatchWith = function () {
                                return this.synchronizeDispatchWith;
                            };
                            WaitTime.prototype.setSynchronizeDispatchWith = function (value) {
                                this.synchronizeDispatchWith = value;
                            };
                            WaitTime.prototype.synchonizeDispatchWithStation = function (value) {
                                this.synchronizeDispatchWith.push(value.getStationNumber());
                            };
                            WaitTime.prototype.synchonizeDispatchWith = function (value) {
                                this.synchronizeDispatchWith.push(value);
                            };
                            return WaitTime;
                        }());
                        Section.WaitTime = WaitTime;
                    })(Section = Track.Section || (Track.Section = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Section;
                    (function (Section) {
                        (function (StationDisplay) {
                            StationDisplay[StationDisplay["FullBuilding"] = 0] = "FullBuilding";
                            StationDisplay[StationDisplay["NoRoof"] = 1] = "NoRoof";
                            StationDisplay[StationDisplay["GatesOnly"] = 2] = "GatesOnly";
                            StationDisplay[StationDisplay["HideAll"] = 3] = "HideAll";
                        })(Section.StationDisplay || (Section.StationDisplay = {}));
                        var StationDisplay = Section.StationDisplay;
                        (function (StationGate) {
                            StationGate[StationGate["Left"] = 0] = "Left";
                            StationGate[StationGate["Right"] = 1] = "Right";
                        })(Section.StationGate || (Section.StationGate = {}));
                        var StationGate = Section.StationGate;
                        (function (StationStairs) {
                            StationStairs[StationStairs["None"] = 0] = "None";
                            StationStairs[StationStairs["BeginFront"] = 1] = "BeginFront";
                            StationStairs[StationStairs["BeginSide"] = 2] = "BeginSide";
                            StationStairs[StationStairs["EndFront"] = 3] = "EndFront";
                            StationStairs[StationStairs["EndSide"] = 4] = "EndSide";
                        })(Section.StationStairs || (Section.StationStairs = {}));
                        var StationStairs = Section.StationStairs;
                        var Station = (function (_super) {
                            __extends(Station, _super);
                            function Station() {
                                _super.call(this);
                                this.extraBlockLength = 0;
                                this.gateDirection = StationGate.Left;
                                this.unloadingOnly = false;
                                this.display = StationDisplay.FullBuilding;
                                this.entranceStairs = StationStairs.EndSide;
                                this.exitStairs = StationStairs.EndSide;
                                this.passes = 0;
                                this.shuttleBackwardsStart = false;
                                this.structureColor = vec3.fromValues(0, 0, 0);
                                this.railingsColor = vec3.fromValues(0, 0, 0);
                                this.gatesColor = vec3.fromValues(0, 0, 0);
                                this.waitTime = new Section.WaitTime();
                                this.brakeDevice = new Section.BrakeDevice();
                                this.useTransportDevice = false;
                                this.transportDevice = new Section.TransportDevice();
                                this.stationNumber = 0;
                                this.setSectionType(Section.SectionType.Station);
                                this.setStationNumber(Station.getFreeStationNumber());
                            }
                            Station.getFreeStationNumber = function () {
                                return ++Station.biggestStationNumber;
                            };
                            Station.prototype.getExtraBlockLength = function () {
                                return this.extraBlockLength;
                            };
                            Station.prototype.setExtraBlockLength = function (value) {
                                this.extraBlockLength = value;
                            };
                            Station.prototype.getGateDirection = function () {
                                return this.gateDirection;
                            };
                            Station.prototype.setGateDirection = function (value) {
                                this.gateDirection = value;
                            };
                            Station.prototype.getUnloadingOnly = function () {
                                return this.unloadingOnly;
                            };
                            Station.prototype.setUnloadingOnly = function (value) {
                                this.unloadingOnly = value;
                            };
                            Station.prototype.getDisplay = function () {
                                return this.display;
                            };
                            Station.prototype.setDisplay = function (value) {
                                this.display = value;
                            };
                            Station.prototype.getEntranceStairs = function () {
                                return this.entranceStairs;
                            };
                            Station.prototype.setEntranceStairs = function (value) {
                                this.entranceStairs = value;
                            };
                            Station.prototype.getExitStairs = function () {
                                return this.exitStairs;
                            };
                            Station.prototype.setExitStairs = function (value) {
                                this.exitStairs = value;
                            };
                            Station.prototype.getPasses = function () {
                                return this.passes;
                            };
                            Station.prototype.setPasses = function (value) {
                                this.passes = value;
                            };
                            Station.prototype.getShuttleBackwardsStart = function () {
                                return this.shuttleBackwardsStart;
                            };
                            Station.prototype.setShuttleBackwardsStart = function (value) {
                                this.shuttleBackwardsStart = value;
                            };
                            Station.prototype.getStructureColor = function () {
                                return this.structureColor;
                            };
                            Station.prototype.setStructureColor = function (value) {
                                this.structureColor = value;
                            };
                            Station.prototype.getRailingsColor = function () {
                                return this.railingsColor;
                            };
                            Station.prototype.setRailingsColor = function (value) {
                                this.railingsColor = value;
                            };
                            Station.prototype.getGatesColor = function () {
                                return this.gatesColor;
                            };
                            Station.prototype.setGatesColor = function (value) {
                                this.gatesColor = value;
                            };
                            Station.prototype.getWaitTime = function () {
                                return this.waitTime;
                            };
                            Station.prototype.setWaitTime = function (value) {
                                this.waitTime = value;
                            };
                            Station.prototype.getBrakeDevice = function () {
                                return this.brakeDevice;
                            };
                            Station.prototype.setBrakeDevice = function (value) {
                                this.brakeDevice = value;
                            };
                            Station.prototype.getUseTransportDevice = function () {
                                return this.useTransportDevice;
                            };
                            Station.prototype.setUseTransportDevice = function (value) {
                                this.useTransportDevice = value;
                            };
                            Station.prototype.getTransportDevice = function () {
                                return this.transportDevice;
                            };
                            Station.prototype.setTransportDevice = function (value) {
                                this.transportDevice = value;
                            };
                            Station.prototype.getStationNumber = function () {
                                return this.stationNumber;
                            };
                            Station.prototype.setStationNumber = function (value) {
                                this.stationNumber = value;
                            };
                            Station.biggestStationNumber = 0;
                            return Station;
                        }(Section.Section));
                        Section.Station = Station;
                    })(Section = Track.Section || (Track.Section = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Section;
                    (function (Section) {
                        (function (StorageBuilding) {
                            StorageBuilding[StorageBuilding["None"] = 0] = "None";
                            StorageBuilding[StorageBuilding["Simple"] = 1] = "Simple";
                        })(Section.StorageBuilding || (Section.StorageBuilding = {}));
                        var StorageBuilding = Section.StorageBuilding;
                        var Storage = (function (_super) {
                            __extends(Storage, _super);
                            function Storage() {
                                _super.call(this);
                                this.enableTransportDevice = false;
                                this.transportDevice = new Section.TransportDevice();
                                this.transportType = Section.TransportType.FrictionWheels;
                                this.building = StorageBuilding.Simple;
                                this.sideColor = vec3.fromValues(0, 0, 0);
                                this.roofColor = vec3.fromValues(0, 0, 0);
                                this.frameColor = vec3.fromValues(0, 0, 0);
                                this.setSectionType(Section.SectionType.Storage);
                            }
                            Storage.prototype.getEnableTransportDevice = function () {
                                return this.enableTransportDevice;
                            };
                            Storage.prototype.setEnableTransportDevice = function (value) {
                                this.enableTransportDevice = value;
                            };
                            Storage.prototype.getTransportDevice = function () {
                                return this.transportDevice;
                            };
                            Storage.prototype.setTransportDevice = function (value) {
                                this.transportDevice = value;
                            };
                            Storage.prototype.getTransportType = function () {
                                return this.transportType;
                            };
                            Storage.prototype.setTransportType = function (value) {
                                this.transportType = value;
                            };
                            Storage.prototype.getBuilding = function () {
                                return this.building;
                            };
                            Storage.prototype.setBuilding = function (value) {
                                this.building = value;
                            };
                            Storage.prototype.getSideColor = function () {
                                return this.sideColor;
                            };
                            Storage.prototype.setSideColor = function (value) {
                                this.sideColor = value;
                            };
                            Storage.prototype.getRoofColor = function () {
                                return this.roofColor;
                            };
                            Storage.prototype.setRoofColor = function (value) {
                                this.roofColor = value;
                            };
                            Storage.prototype.getFrameColor = function () {
                                return this.frameColor;
                            };
                            Storage.prototype.setFrameColor = function (value) {
                                this.frameColor = value;
                            };
                            return Storage;
                        }(Section.Section));
                        Section.Storage = Storage;
                    })(Section = Track.Section || (Track.Section = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Segment;
                    (function (Segment) {
                        (function (WoodenGeneratorFlag) {
                            WoodenGeneratorFlag[WoodenGeneratorFlag["IndividualSettings"] = 0] = "IndividualSettings";
                            WoodenGeneratorFlag[WoodenGeneratorFlag["WideSupportsLeft"] = 1] = "WideSupportsLeft";
                            WoodenGeneratorFlag[WoodenGeneratorFlag["WideSupportsRight"] = 2] = "WideSupportsRight";
                            WoodenGeneratorFlag[WoodenGeneratorFlag["CatwalksLeft"] = 3] = "CatwalksLeft";
                            WoodenGeneratorFlag[WoodenGeneratorFlag["CatwalksRight"] = 4] = "CatwalksRight";
                            WoodenGeneratorFlag[WoodenGeneratorFlag["HandrailsLeft"] = 5] = "HandrailsLeft";
                            WoodenGeneratorFlag[WoodenGeneratorFlag["HandrailsRight"] = 6] = "HandrailsRight";
                            WoodenGeneratorFlag[WoodenGeneratorFlag["CollisionDetection"] = 7] = "CollisionDetection";
                            WoodenGeneratorFlag[WoodenGeneratorFlag["EnableSupports"] = 0] = "EnableSupports";
                            WoodenGeneratorFlag[WoodenGeneratorFlag["BentSpacing625Ft"] = 1] = "BentSpacing625Ft";
                            WoodenGeneratorFlag[WoodenGeneratorFlag["BentSpacing45Ft"] = 2] = "BentSpacing45Ft";
                        })(Segment.WoodenGeneratorFlag || (Segment.WoodenGeneratorFlag = {}));
                        var WoodenGeneratorFlag = Segment.WoodenGeneratorFlag;
                        (function (WoodenGeneratorBentSpacing) {
                            WoodenGeneratorBentSpacing[WoodenGeneratorBentSpacing["Spacing9Ft"] = 0] = "Spacing9Ft";
                            WoodenGeneratorBentSpacing[WoodenGeneratorBentSpacing["Spacing625Ft"] = 1] = "Spacing625Ft";
                            WoodenGeneratorBentSpacing[WoodenGeneratorBentSpacing["Spacing45Ft"] = 2] = "Spacing45Ft";
                        })(Segment.WoodenGeneratorBentSpacing || (Segment.WoodenGeneratorBentSpacing = {}));
                        var WoodenGeneratorBentSpacing = Segment.WoodenGeneratorBentSpacing;
                        var WoodenGenerator = (function () {
                            function WoodenGenerator() {
                                this.flag1 = 0;
                                this.flag2 = 0;
                            }
                            WoodenGenerator.prototype.getUseIndividualSettings = function () {
                                return this.hasFlag2(WoodenGeneratorFlag.IndividualSettings);
                            };
                            WoodenGenerator.prototype.getUseLeftWideSupports = function () {
                                return this.hasFlag2(WoodenGeneratorFlag.WideSupportsLeft);
                            };
                            WoodenGenerator.prototype.getUseRightWideSupports = function () {
                                return this.hasFlag2(WoodenGeneratorFlag.WideSupportsRight);
                            };
                            WoodenGenerator.prototype.getUseLeftCatwalks = function () {
                                return this.hasFlag2(WoodenGeneratorFlag.CatwalksLeft);
                            };
                            WoodenGenerator.prototype.getUseRightCatwalks = function () {
                                return this.hasFlag2(WoodenGeneratorFlag.CatwalksRight);
                            };
                            WoodenGenerator.prototype.getUseLeftHandrails = function () {
                                return this.hasFlag2(WoodenGeneratorFlag.HandrailsLeft);
                            };
                            WoodenGenerator.prototype.getUseRightHandrails = function () {
                                return this.hasFlag2(WoodenGeneratorFlag.HandrailsRight);
                            };
                            WoodenGenerator.prototype.getCollisionDetection = function () {
                                return this.hasFlag2(WoodenGeneratorFlag.CollisionDetection);
                            };
                            WoodenGenerator.prototype.getEnableSupports = function () {
                                return this.hasFlag1(WoodenGeneratorFlag.EnableSupports);
                            };
                            WoodenGenerator.prototype.getBentSpacing = function () {
                                var val;
                                if (!this.hasFlag1(WoodenGeneratorFlag.BentSpacing625Ft) && !this.hasFlag1(WoodenGeneratorFlag.BentSpacing45Ft)) {
                                    val = WoodenGeneratorBentSpacing.Spacing9Ft;
                                }
                                if (this.hasFlag1(WoodenGeneratorFlag.BentSpacing625Ft) && !this.hasFlag1(WoodenGeneratorFlag.BentSpacing45Ft)) {
                                    val = WoodenGeneratorBentSpacing.Spacing625Ft;
                                }
                                if (!this.hasFlag1(WoodenGeneratorFlag.BentSpacing625Ft) && this.hasFlag1(WoodenGeneratorFlag.BentSpacing45Ft)) {
                                    val = WoodenGeneratorBentSpacing.Spacing45Ft;
                                }
                                return val;
                            };
                            WoodenGenerator.prototype.setUseIndividualSettings = function (state) {
                                this.setWithCheckFlag2(WoodenGeneratorFlag.IndividualSettings, state);
                            };
                            WoodenGenerator.prototype.setUseLeftWideSupports = function (state) {
                                this.setWithCheckFlag2(WoodenGeneratorFlag.WideSupportsLeft, state);
                            };
                            WoodenGenerator.prototype.setUseRightWideSupports = function (state) {
                                this.setWithCheckFlag2(WoodenGeneratorFlag.WideSupportsRight, state);
                            };
                            WoodenGenerator.prototype.setUseLeftCatwalks = function (state) {
                                this.setWithCheckFlag2(WoodenGeneratorFlag.CatwalksLeft, state);
                            };
                            WoodenGenerator.prototype.setUseRightCatwalks = function (state) {
                                this.setWithCheckFlag2(WoodenGeneratorFlag.CatwalksRight, state);
                            };
                            WoodenGenerator.prototype.setUseLeftHandrails = function (state) {
                                this.setWithCheckFlag2(WoodenGeneratorFlag.HandrailsLeft, state);
                            };
                            WoodenGenerator.prototype.setUseRightHandrails = function (state) {
                                this.setWithCheckFlag2(WoodenGeneratorFlag.HandrailsRight, state);
                            };
                            WoodenGenerator.prototype.setCollisionDetection = function (state) {
                                this.setWithCheckFlag2(WoodenGeneratorFlag.CollisionDetection, state);
                            };
                            WoodenGenerator.prototype.setEnableSupports = function (state) {
                                this.setWithCheckFlag1(WoodenGeneratorFlag.EnableSupports, state);
                            };
                            WoodenGenerator.prototype.setBentSpacing = function (spacing) {
                                this.setWithCheckFlag1(WoodenGeneratorFlag.BentSpacing625Ft, false);
                                this.setWithCheckFlag1(WoodenGeneratorFlag.BentSpacing45Ft, false);
                                switch (spacing) {
                                    case WoodenGeneratorBentSpacing.Spacing625Ft:
                                        this.setWithCheckFlag1(WoodenGeneratorFlag.BentSpacing625Ft, true);
                                        break;
                                    case WoodenGeneratorBentSpacing.Spacing45Ft:
                                        this.setWithCheckFlag1(WoodenGeneratorFlag.BentSpacing45Ft, true);
                                        break;
                                }
                            };
                            WoodenGenerator.prototype.setWithCheckFlag2 = function (flag, state) {
                                if (state && !this.hasFlag2(flag)) {
                                    this.flag2 |= 1 << flag;
                                }
                                else if (!state && this.hasFlag2(flag)) {
                                    this.flag2 &= ~(1 << flag);
                                }
                            };
                            WoodenGenerator.prototype.setWithCheckFlag1 = function (flag, state) {
                                if (state && !this.hasFlag1(flag)) {
                                    this.flag1 |= 1 << flag;
                                }
                                else if (!state && this.hasFlag1(flag)) {
                                    this.flag1 &= ~(1 << flag);
                                }
                            };
                            WoodenGenerator.prototype.setFlag1 = function (flag1) {
                                this.flag1 = flag1;
                            };
                            WoodenGenerator.prototype.setFlag2 = function (flag2) {
                                this.flag2 = flag2;
                            };
                            WoodenGenerator.prototype.getFlag1 = function () {
                                return this.flag1;
                            };
                            WoodenGenerator.prototype.getFlag2 = function () {
                                return this.flag2;
                            };
                            WoodenGenerator.prototype.hasFlag2 = function (flag) {
                                return this.flag2 & (1 << flag) ? true : false;
                            };
                            WoodenGenerator.prototype.hasFlag1 = function (flag) {
                                return this.flag1 & (1 << flag) ? true : false;
                            };
                            return WoodenGenerator;
                        }());
                        Segment.WoodenGenerator = WoodenGenerator;
                    })(Segment = Track.Segment || (Track.Segment = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var SpecialTrack;
                    (function (SpecialTrack_1) {
                        (function (SpecialTrackType) {
                            SpecialTrackType[SpecialTrackType["SwitchTrack"] = 0] = "SwitchTrack";
                            SpecialTrackType[SpecialTrackType["TransferTable"] = 1] = "TransferTable";
                        })(SpecialTrack_1.SpecialTrackType || (SpecialTrack_1.SpecialTrackType = {}));
                        var SpecialTrackType = SpecialTrack_1.SpecialTrackType;
                        var SpecialTrack = (function (_super) {
                            __extends(SpecialTrack, _super);
                            function SpecialTrack() {
                                _super.call(this);
                                this.specialTrackType = SpecialTrackType.SwitchTrack;
                                this.name = null;
                                this.position = vec3.fromValues(0, 0, 0);
                                this.rotation = vec3.fromValues(0, 0, 0);
                                this.switchTime = 15;
                                this.section = new Track.Section.Section();
                                this.segment = new Track.Segment.Segment();
                                this.inputs = [];
                                this.outputs = [];
                                this.setTrackType(Track.TrackType.SpecialTrack);
                            }
                            SpecialTrack.prototype.getSpecialTrackType = function () {
                                return this.specialTrackType;
                            };
                            SpecialTrack.prototype.setSpecialTrackType = function (value) {
                                this.specialTrackType = value;
                            };
                            SpecialTrack.prototype.getName = function () {
                                return this.name;
                            };
                            SpecialTrack.prototype.setName = function (value) {
                                this.name = value;
                            };
                            SpecialTrack.prototype.getPosition = function () {
                                return this.position;
                            };
                            SpecialTrack.prototype.setPosition = function (value) {
                                this.position = value;
                            };
                            SpecialTrack.prototype.getRotation = function () {
                                return this.rotation;
                            };
                            SpecialTrack.prototype.setRotation = function (value) {
                                this.rotation = value;
                            };
                            SpecialTrack.prototype.getSwitchTime = function () {
                                return this.switchTime;
                            };
                            SpecialTrack.prototype.setSwitchTime = function (value) {
                                this.switchTime = value;
                            };
                            SpecialTrack.prototype.getInputs = function () {
                                return this.inputs;
                            };
                            SpecialTrack.prototype.setInputs = function (value) {
                                this.inputs = value;
                            };
                            SpecialTrack.prototype.insertInput = function (value) {
                                this.inputs.push(value);
                            };
                            SpecialTrack.prototype.getOutputs = function () {
                                return this.outputs;
                            };
                            SpecialTrack.prototype.setOutputs = function (value) {
                                this.outputs = value;
                            };
                            SpecialTrack.prototype.insertOutput = function (value) {
                                this.outputs.push(value);
                            };
                            SpecialTrack.prototype.getSection = function () {
                                return this.section;
                            };
                            SpecialTrack.prototype.setSection = function (value) {
                                this.section = value;
                            };
                            SpecialTrack.prototype.getSegment = function () {
                                return this.segment;
                            };
                            SpecialTrack.prototype.setSegment = function (value) {
                                this.segment = value;
                            };
                            return SpecialTrack;
                        }(Track.Track));
                        SpecialTrack_1.SpecialTrack = SpecialTrack;
                    })(SpecialTrack = Track.SpecialTrack || (Track.SpecialTrack = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var SpecialTrack;
                    (function (SpecialTrack) {
                        (function (SwitchTrackDisplay) {
                            SwitchTrackDisplay[SwitchTrackDisplay["StructureSimple"] = 0] = "StructureSimple";
                            SwitchTrackDisplay[SwitchTrackDisplay["StructureOff"] = 1] = "StructureOff";
                        })(SpecialTrack.SwitchTrackDisplay || (SpecialTrack.SwitchTrackDisplay = {}));
                        var SwitchTrackDisplay = SpecialTrack.SwitchTrackDisplay;
                        (function (SwitchTrackDirection) {
                            SwitchTrackDirection[SwitchTrackDirection["LeftRight"] = 0] = "LeftRight";
                            SwitchTrackDirection[SwitchTrackDirection["StraightLeft"] = 1] = "StraightLeft";
                            SwitchTrackDirection[SwitchTrackDirection["StraightRight"] = 2] = "StraightRight";
                        })(SpecialTrack.SwitchTrackDirection || (SpecialTrack.SwitchTrackDirection = {}));
                        var SwitchTrackDirection = SpecialTrack.SwitchTrackDirection;
                        (function (SwitchTrackStyle) {
                            SwitchTrackStyle[SwitchTrackStyle["ShiftHorizontally"] = 0] = "ShiftHorizontally";
                            SwitchTrackStyle[SwitchTrackStyle["RotateVertically"] = 1] = "RotateVertically";
                            SwitchTrackStyle[SwitchTrackStyle["RotateHorizontally"] = 2] = "RotateHorizontally";
                        })(SpecialTrack.SwitchTrackStyle || (SpecialTrack.SwitchTrackStyle = {}));
                        var SwitchTrackStyle = SpecialTrack.SwitchTrackStyle;
                        var SwitchTrack = (function (_super) {
                            __extends(SwitchTrack, _super);
                            function SwitchTrack() {
                                _super.call(this);
                                this.defaultTrack = 0;
                                this.displayStructure = SwitchTrackDisplay.StructureSimple;
                                this.direction = SwitchTrackDirection.LeftRight;
                                this.style = SwitchTrackStyle.ShiftHorizontally;
                                this.setSpecialTrackType(SpecialTrack.SpecialTrackType.SwitchTrack);
                            }
                            SwitchTrack.prototype.getDefaultTrack = function () {
                                return this.defaultTrack;
                            };
                            SwitchTrack.prototype.setDefaultTrack = function (value) {
                                this.defaultTrack = value;
                            };
                            SwitchTrack.prototype.getDisplayStructure = function () {
                                return this.displayStructure;
                            };
                            SwitchTrack.prototype.setDisplayStructure = function (value) {
                                this.displayStructure = value;
                            };
                            SwitchTrack.prototype.getDirection = function () {
                                return this.direction;
                            };
                            SwitchTrack.prototype.setDirection = function (value) {
                                this.direction = value;
                            };
                            SwitchTrack.prototype.getStyle = function () {
                                return this.style;
                            };
                            SwitchTrack.prototype.setStyle = function (value) {
                                this.style = value;
                            };
                            return SwitchTrack;
                        }(SpecialTrack.SpecialTrack));
                        SpecialTrack.SwitchTrack = SwitchTrack;
                    })(SpecialTrack = Track.SpecialTrack || (Track.SpecialTrack = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Chunks;
        (function (Chunks) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var SpecialTrack;
                    (function (SpecialTrack) {
                        (function (TransferTableDisplay) {
                            TransferTableDisplay[TransferTableDisplay["StructureSimple"] = 0] = "StructureSimple";
                            TransferTableDisplay[TransferTableDisplay["StructureOff"] = 1] = "StructureOff";
                        })(SpecialTrack.TransferTableDisplay || (SpecialTrack.TransferTableDisplay = {}));
                        var TransferTableDisplay = SpecialTrack.TransferTableDisplay;
                        var TransferTable = (function (_super) {
                            __extends(TransferTable, _super);
                            function TransferTable() {
                                _super.call(this);
                                this.defaultTrack = 0;
                                this.length = 20;
                                this.distance = 3;
                                this.displayStructure = TransferTableDisplay.StructureSimple;
                                this.setSpecialTrackType(SpecialTrack.SpecialTrackType.TransferTable);
                            }
                            TransferTable.prototype.getDefaultTrack = function () {
                                return this.defaultTrack;
                            };
                            TransferTable.prototype.setDefaultTrack = function (value) {
                                this.defaultTrack = value;
                            };
                            TransferTable.prototype.getLength = function () {
                                return this.length;
                            };
                            TransferTable.prototype.setLength = function (value) {
                                this.length = value;
                            };
                            TransferTable.prototype.getDistance = function () {
                                return this.distance;
                            };
                            TransferTable.prototype.setDistance = function (value) {
                                this.distance = value;
                            };
                            TransferTable.prototype.getDisplayStructure = function () {
                                return this.displayStructure;
                            };
                            TransferTable.prototype.setDisplayStructure = function (value) {
                                this.displayStructure = value;
                            };
                            return TransferTable;
                        }(SpecialTrack.SpecialTrack));
                        SpecialTrack.TransferTable = TransferTable;
                    })(SpecialTrack = Track.SpecialTrack || (Track.SpecialTrack = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Chunks.Coaster || (Chunks.Coaster = {}));
        })(Chunks = NoLimits.Chunks || (NoLimits.Chunks = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Script = (function (_super) {
                    __extends(Script, _super);
                    function Script() {
                        _super.apply(this, arguments);
                    }
                    Script.prototype.read = function (reader) {
                    };
                    return Script;
                }(Stream.ChunkStream));
                Coaster.Script = Script;
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Support;
                (function (Support) {
                    var RailNode = (function (_super) {
                        __extends(RailNode, _super);
                        function RailNode() {
                            _super.apply(this, arguments);
                        }
                        RailNode.prototype.read = function (reader) {
                            this.data.setPosition(reader.readDouble());
                            reader.readNull(1);
                            this.data.setColor(reader.readByteVec3());
                            reader.readNull(2);
                            this.data.setConnectionStyle(reader.readBoolean(), reader.readByte());
                            this.data.setSizeParameter(reader.readDouble());
                            reader.readNull(5);
                            this.data.setFlag1(reader.readByte());
                            this.data.setFlag2(reader.readByte());
                            this.data.setFlag3(reader.readByte());
                        };
                        return RailNode;
                    }(Stream.ChunkStream));
                    Support.RailNode = RailNode;
                })(Support = Coaster.Support || (Coaster.Support = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Section;
                    (function (Section) {
                        var Brake = (function (_super) {
                            __extends(Brake, _super);
                            function Brake() {
                                _super.apply(this, arguments);
                            }
                            Brake.prototype.read = function (reader) {
                                this.data.setMode(reader.readByte());
                                this.data.setBrakeType(reader.readByte());
                                this.data.setDeceleration(reader.readDouble());
                                this.data.setSpeedLimit(reader.readDouble());
                                this.data.setHysteresis(reader.readDouble());
                                reader.readNull(9);
                                this.data.setCompleteStop(reader.readBoolean());
                                this.data.setWaitTime(reader.readDouble());
                                reader.readNull(66);
                                this.data.setExtraBlockLength(reader.readDouble());
                                reader.setStreamPosition(71);
                                this.data.setEnableTransport(reader.readBoolean());
                                this.data.getTransportDevice().setType(reader.readByte());
                                this.data.getTransportDevice().setSpeed(reader.readDouble());
                                this.data.getTransportDevice().setAcceleration(reader.readDouble());
                                this.data.getTransportDevice().setDeceleration(reader.readDouble());
                                this.data.getTransportDevice().setLaunch(reader.readBoolean());
                                this.data.getTransportDevice().setLaunchAcceleration(reader.readDouble());
                                this.data.getTransportDevice().setLaunchMaxSpeed(reader.readDouble());
                                reader.setStreamPosition(30);
                                this.data.setPositionOnTrain(reader.readByte());
                                this.data.setPositionOnSection(reader.readDouble());
                            };
                            return Brake;
                        }(Stream.ChunkStream));
                        Section.Brake = Brake;
                    })(Section = Track.Section || (Track.Section = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Section;
                    (function (Section) {
                        var Lift = (function (_super) {
                            __extends(Lift, _super);
                            function Lift() {
                                _super.apply(this, arguments);
                            }
                            Lift.prototype.read = function (reader) {
                                reader.readNull(3);
                                this.data.setLiftType(reader.readByte());
                                reader.readNull(3);
                                this.data.setMotorLocation(reader.readByte());
                                this.data.setSpeed(reader.readDouble());
                                this.data.setAcceleration(reader.readDouble());
                                this.data.setDeceleration(reader.readDouble());
                                this.data.setHasAntiRollbackDevice(reader.readBoolean() ? false : true);
                                this.data.setShuttleModeGentle2ndPassRelease(reader.readBoolean());
                                this.data.setExtraBlockLength(reader.readDouble());
                                this.data.setDiveCoasterDropReleaseMode(reader.readBoolean());
                            };
                            return Lift;
                        }(Stream.ChunkStream));
                        Section.Lift = Lift;
                    })(Section = Track.Section || (Track.Section = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Section;
                    (function (Section) {
                        var Station = (function (_super) {
                            __extends(Station, _super);
                            function Station() {
                                _super.apply(this, arguments);
                            }
                            Station.prototype.read = function (reader) {
                                this.data.setUseTransportDevice(reader.readBoolean());
                                this.data.getTransportDevice().setType(reader.readByte());
                                this.data.getTransportDevice().setSpeed(reader.readDouble());
                                this.data.getTransportDevice().setAcceleration(reader.readDouble());
                                this.data.getTransportDevice().setDeceleration(reader.readDouble());
                                this.data.getBrakeDevice().setDeceleration(reader.readDouble());
                                this.data.getWaitTime().setAvarage(reader.readDouble());
                                this.data.getWaitTime().setMinimum(reader.readDouble());
                                this.data.getWaitTime().setMaximum(reader.readDouble());
                                this.data.getWaitTime().setDeviation(reader.readDouble());
                                this.data.getTransportDevice().setLaunch(reader.readBoolean());
                                this.data.getTransportDevice().setLaunchAcceleration(reader.readDouble());
                                this.data.getTransportDevice().setLaunchMaxSpeed(reader.readDouble());
                                this.data.setUnloadingOnly(reader.readBoolean());
                                reader.readNull(3);
                                this.data.setPasses(reader.readByte());
                                this.data.setShuttleBackwardsStart(reader.readBoolean());
                                this.data.setStationNumber(reader.readInt());
                                reader.readNull(3);
                                var numSynchronizeDispatchWith = reader.readByte();
                                for (var i = 0; i < numSynchronizeDispatchWith; i++) {
                                    this.data.getWaitTime().synchonizeDispatchWith(reader.readInt());
                                }
                                this.data.setExtraBlockLength(reader.readDouble());
                                this.data.getBrakeDevice().setBrakeType(reader.readByte());
                                this.data.setGateDirection(reader.readByte());
                                this.data.setDisplay(reader.readByte());
                                this.data.setEntranceStairs(reader.readByte());
                                this.data.setExitStairs(reader.readByte());
                                reader.readNull(1);
                                this.data.setGatesColor(reader.readColor());
                                this.data.setRailingsColor(reader.readColor());
                                this.data.setStructureColor(reader.readColor());
                                reader.readNull(137);
                            };
                            return Station;
                        }(Stream.ChunkStream));
                        Section.Station = Station;
                    })(Section = Track.Section || (Track.Section = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Section;
                    (function (Section) {
                        var Storage = (function (_super) {
                            __extends(Storage, _super);
                            function Storage() {
                                _super.apply(this, arguments);
                            }
                            Storage.prototype.read = function (reader) {
                                this.data.setEnableTransportDevice(reader.readBoolean());
                                this.data.setTransportType(reader.readByte());
                                this.data.setBuilding(reader.readByte());
                                this.data.setRoofColor(reader.readColor());
                                this.data.setSideColor(reader.readColor());
                                this.data.setFrameColor(reader.readColor());
                                reader.readNull(15);
                            };
                            return Storage;
                        }(Stream.ChunkStream));
                        Section.Storage = Storage;
                    })(Section = Track.Section || (Track.Section = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Section;
                    (function (Section) {
                        var Transport = (function (_super) {
                            __extends(Transport, _super);
                            function Transport() {
                                _super.apply(this, arguments);
                            }
                            Transport.prototype.read = function (reader) {
                                this.data.setTransportType(reader.readByte());
                                this.data.setSpeed(reader.readDouble());
                                this.data.setAcceleration(reader.readDouble());
                                this.data.setDeceleration(reader.readDouble());
                                this.data.setSpeedingUpPasses(reader.readInt());
                                this.data.setSpeedingDown(reader.readBoolean());
                                this.data.setMinSpeed(reader.readDouble());
                            };
                            return Transport;
                        }(Stream.ChunkStream));
                        Section.Transport = Transport;
                    })(Section = Track.Section || (Track.Section = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Section;
                    (function (Section_2) {
                        var Section = (function (_super) {
                            __extends(Section, _super);
                            function Section() {
                                _super.apply(this, arguments);
                            }
                            Section.prototype.read = function (reader) {
                                reader.readNull(4);
                                var name = reader.readString();
                                reader.readNull(1);
                                var sectionFound = false;
                                for (var i = 0; i <= reader.getFilesize(); i++) {
                                    reader.setStreamPosition(i);
                                    var chunk = reader.readChunkName();
                                    if (chunk == "TRNS") {
                                        var transport = new NoLimits.Chunks.Coaster.Track.Section.Transport();
                                        transport.setName(name);
                                        this.data.setSection(transport);
                                        (new Section_2.Transport(reader.getChunkStreamReader(), transport)).readChunk();
                                        sectionFound = true;
                                        i = reader.getStreamPosition();
                                    }
                                    if (chunk == "LIFT") {
                                        var lift = new NoLimits.Chunks.Coaster.Track.Section.Lift();
                                        lift.setName(name);
                                        this.data.setSection(lift);
                                        (new Section_2.Lift(reader.getChunkStreamReader(), lift)).readChunk();
                                        sectionFound = true;
                                        i = reader.getStreamPosition();
                                    }
                                    if (chunk == "BRKE") {
                                        var brake = new NoLimits.Chunks.Coaster.Track.Section.Brake();
                                        brake.setName(name);
                                        this.data.setSection(brake);
                                        (new Section_2.Brake(reader.getChunkStreamReader(), brake)).readChunk();
                                        sectionFound = true;
                                        i = reader.getStreamPosition();
                                    }
                                    if (chunk == "STTN") {
                                        var station = new NoLimits.Chunks.Coaster.Track.Section.Station();
                                        station.setName(name);
                                        this.data.setSection(station);
                                        (new Section_2.Station(reader.getChunkStreamReader(), station)).readChunk();
                                        sectionFound = true;
                                        i = reader.getStreamPosition();
                                    }
                                    if (chunk == "STOR") {
                                        var storage = new NoLimits.Chunks.Coaster.Track.Section.Storage();
                                        storage.setName(name);
                                        this.data.setSection(storage);
                                        (new Section_2.Storage(reader.getChunkStreamReader(), storage)).readChunk();
                                        sectionFound = true;
                                        i = reader.getStreamPosition();
                                    }
                                }
                                if (!sectionFound) {
                                    var section = new NoLimits.Chunks.Coaster.Track.Section.Section();
                                    section.setName(name);
                                    this.data.setSection(section);
                                }
                            };
                            return Section;
                        }(Stream.ChunkStream));
                        Section_2.Section = Section;
                    })(Section = Track.Section || (Track.Section = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Segment = (function (_super) {
                        __extends(Segment, _super);
                        function Segment() {
                            _super.apply(this, arguments);
                        }
                        Segment.prototype.read = function (reader) {
                            this.data.setUseMainSpineColor(reader.readBoolean());
                            this.data.setRailColor(reader.readColor());
                            this.data.setCrossTiesColor(reader.readColor());
                            this.data.setMainSpineColor(reader.readColor());
                            this.data.setTunnel(reader.readByte());
                            this.data.setLeftRailingAndCatwalk(reader.readBoolean());
                            this.data.setRightRailingAndCatwalk(reader.readBoolean());
                            this.data.setSpineType(reader.readByte());
                            this.data.setSpineColorScheme(reader.readByte());
                            this.data.setInvisibleSegment(reader.readBoolean());
                            reader.readNull(2);
                            this.data.getWoodenSupportGenerator().setFlag1(reader.readByte());
                            this.data.getWoodenSupportGenerator().setFlag2(reader.readByte());
                            this.data.setHandrailsColor(reader.readColor());
                            this.data.setCatwalksColor(reader.readColor());
                            this.data.setTransparentCatwalks(reader.readBoolean());
                            this.data.setUseRailsColor(reader.readBoolean());
                            this.data.setUseCrossTiesColor(reader.readBoolean());
                            this.data.setUseHandrailsColor(reader.readBoolean());
                            this.data.setUseCatwalksColor(reader.readBoolean());
                            this.data.setUseSpineColorScheme(reader.readBoolean());
                            this.data.setLeftRailingLights(reader.readBoolean());
                            this.data.setLeftRailingLightsColor(reader.readColor());
                            this.data.setRightRailingLights(reader.readBoolean());
                            this.data.setRightRailingLightsColor(reader.readColor());
                        };
                        return Segment;
                    }(Stream.ChunkStream));
                    Track.Segment = Segment;
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var RollPoint = (function (_super) {
                        __extends(RollPoint, _super);
                        function RollPoint() {
                            _super.apply(this, arguments);
                        }
                        RollPoint.prototype.read = function (reader) {
                            this.data.setPosition(reader.readDouble());
                            this.data.setRoll(reader.readDouble());
                            this.data.setVertical(reader.readBoolean());
                            this.data.setStrict(reader.readBoolean());
                            reader.readNull(14);
                        };
                        return RollPoint;
                    }(Stream.ChunkStream));
                    Track.RollPoint = RollPoint;
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Parameter4D = (function (_super) {
                        __extends(Parameter4D, _super);
                        function Parameter4D() {
                            _super.apply(this, arguments);
                        }
                        Parameter4D.prototype.read = function (reader) {
                            this.data.setPosition(reader.readDouble());
                            this.data.setAngle(reader.readDouble());
                            reader.readNull(16);
                        };
                        return Parameter4D;
                    }(Stream.ChunkStream));
                    Track.Parameter4D = Parameter4D;
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Separator = (function (_super) {
                        __extends(Separator, _super);
                        function Separator() {
                            _super.apply(this, arguments);
                        }
                        Separator.prototype.read = function (reader) {
                            this.data.setPosition(reader.readDouble());
                            for (var i = 0; i <= reader.getFilesize(); i++) {
                                reader.setStreamPosition(i);
                                var chunk = reader.readChunkName();
                                if (chunk == "SEGM") {
                                    var segment = new NoLimits.Chunks.Coaster.Track.Segment.Segment();
                                    this.data.setSegment(segment);
                                    (new Track.Segment(reader.getChunkStreamReader(), segment)).readChunk();
                                    i = reader.getStreamPosition() - 1;
                                }
                                if (chunk == "SECT") {
                                    (new Track.Section.Section(reader.getChunkStreamReader(), this.data)).readChunk();
                                    i = reader.getStreamPosition() - 1;
                                }
                            }
                        };
                        Separator.prototype.getChunkSize = function () {
                            return this.chunkSize;
                        };
                        return Separator;
                    }(Stream.ChunkStream));
                    Track.Separator = Separator;
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var RailNode = NLParkViewer.NoLimits.Stream.Coaster.Support.RailNode;
                    var CustomTrack = (function (_super) {
                        __extends(CustomTrack, _super);
                        function CustomTrack() {
                            _super.apply(this, arguments);
                            this.ignorePositions = [];
                            this.trackIndex = 0;
                        }
                        CustomTrack.prototype.read = function (reader) {
                            reader.readNull(1);
                            this.data.getFirstRollPoint().setPosition(0.0);
                            this.data.getFirstRollPoint().setRoll(reader.readDouble());
                            this.data.getFirstRollPoint().setVertical(reader.readBoolean());
                            this.data.getFirstRollPoint().setStrict(true);
                            this.data.getLastRollPoint().setRoll(reader.readDouble());
                            this.data.getLastRollPoint().setVertical(reader.readBoolean());
                            this.data.getLastRollPoint().setStrict(true);
                            reader.readNull(53);
                            var numberOfControlPoints = reader.readInt();
                            this.data.getLastRollPoint().setPosition(numberOfControlPoints - 1);
                            for (var i = 0; i < numberOfControlPoints; i++) {
                                var vertex = new NoLimits.Chunks.Coaster.Track.Vertex();
                                vertex.setPosition(reader.readDoubleVec4());
                                vertex.setLocked(reader.readBoolean());
                                vertex.setStrict(reader.readBoolean());
                                reader.readNull(22);
                                this.data.insertVertex(vertex);
                            }
                            reader.readNull(60);
                            for (var i = 0; i <= reader.getFilesize(); i++) {
                                reader.setStreamPosition(i);
                                var chunk = reader.readChunkName();
                                if (chunk == "4DPM") {
                                    var parameter4D = new NoLimits.Chunks.Coaster.Track.Parameter4D();
                                    this.data.insertParameter4D(parameter4D);
                                    (new Track.Parameter4D(reader.getChunkStreamReader(), parameter4D)).readChunk();
                                    i = reader.getStreamPosition() - 1;
                                }
                                if (chunk == "TTRG") {
                                    var trigger = new NoLimits.Chunks.Coaster.Track.Trigger();
                                    this.data.insertTrigger(trigger);
                                    (new Track.Trigger(reader.getChunkStreamReader(), trigger)).readChunk();
                                    i = reader.getStreamPosition() - 1;
                                }
                                if (chunk == "ROLL") {
                                    var rollPoint = new NoLimits.Chunks.Coaster.Track.RollPoint();
                                    this.data.insertRollPoint(rollPoint);
                                    (new Track.RollPoint(reader.getChunkStreamReader(), rollPoint)).readChunk();
                                    i = reader.getStreamPosition() - 1;
                                }
                                if (chunk == "SRNP") {
                                    var railNode = new NoLimits.Chunks.Coaster.Support.RailNode();
                                    railNode.setTrackIndex(this.trackIndex);
                                    this.data.insertRailNode(railNode);
                                    (new RailNode(reader.getChunkStreamReader(), railNode)).readChunk();
                                    i = reader.getStreamPosition() - 1;
                                }
                                if (chunk == "SEPA") {
                                    var separator = new NoLimits.Chunks.Coaster.Track.Separator();
                                    this.data.insertSeparator(separator);
                                    (new Track.Separator(reader.getChunkStreamReader(), separator)).readChunk();
                                    i = reader.getStreamPosition() - 1;
                                }
                                if (chunk == "SEGM") {
                                    var segment = new NoLimits.Chunks.Coaster.Track.Segment.Segment();
                                    this.data.setSegment(segment);
                                    (new Track.Segment(reader.getChunkStreamReader(), segment)).readChunk();
                                    i = reader.getStreamPosition() - 1;
                                }
                                if (chunk == "SECT") {
                                    (new Track.Section.Section(reader.getChunkStreamReader(), this.data)).readChunk();
                                    i = reader.getStreamPosition() - 1;
                                }
                            }
                        };
                        return CustomTrack;
                    }(Stream.ChunkStream));
                    Track.CustomTrack = CustomTrack;
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var Trigger = (function (_super) {
                        __extends(Trigger, _super);
                        function Trigger() {
                            _super.apply(this, arguments);
                        }
                        Trigger.prototype.read = function (reader) {
                            this.data.setPosition(reader.readDouble());
                            this.data.setName(reader.readString());
                            reader.readNull(3);
                            this.data.setTrainEvent(reader.readByte());
                            reader.readNull(23);
                        };
                        return Trigger;
                    }(Stream.ChunkStream));
                    Track.Trigger = Trigger;
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var SpecialTrack;
                    (function (SpecialTrack_2) {
                        var SpecialTrack = (function (_super) {
                            __extends(SpecialTrack, _super);
                            function SpecialTrack() {
                                _super.apply(this, arguments);
                            }
                            SpecialTrack.prototype.read = function (reader) {
                                var name = reader.readString();
                                reader.readNull(4);
                                var position = reader.readDoubleVec3();
                                var rotation = reader.readDoubleVec3();
                                var numberOfInputPoints = reader.readInt();
                                var numberOfOutputPoints = reader.readInt();
                                var inputs = [];
                                var outputs = [];
                                for (var i = 0; i < numberOfInputPoints; i++) {
                                    inputs.push(reader.readInt());
                                }
                                for (var i = 0; i < numberOfOutputPoints; i++) {
                                    outputs.push(reader.readInt());
                                }
                                var switchTime = reader.readFloat();
                                reader.readNull(60);
                                var specialTrack = null;
                                for (var i = 0; i <= reader.getFilesize(); i++) {
                                    reader.setStreamPosition(i);
                                    var chunk = reader.readChunkName();
                                    if (chunk == "SEGM" && specialTrack !== null) {
                                        var segment = new NoLimits.Chunks.Coaster.Track.Segment.Segment();
                                        specialTrack.setSegment(segment);
                                        (new Track.Segment(reader.getChunkStreamReader(), segment)).readChunk();
                                        i = reader.getStreamPosition();
                                    }
                                    if (chunk == "SECT" && specialTrack !== null) {
                                        (new Track.Section.Section(reader.getChunkStreamReader(), specialTrack)).readChunk();
                                        i = reader.getStreamPosition();
                                    }
                                    if (chunk == "SWTR") {
                                        var switchTrack = new NoLimits.Chunks.Coaster.Track.SpecialTrack.SwitchTrack();
                                        (new SpecialTrack_2.SwitchTrack(reader.getChunkStreamReader(), switchTrack)).readChunk();
                                        specialTrack = switchTrack;
                                        this.data.insertTrack(switchTrack);
                                        i = reader.getStreamPosition();
                                    }
                                    if (chunk == "TRTB") {
                                        var transferTable = new NoLimits.Chunks.Coaster.Track.SpecialTrack.TransferTable();
                                        (new SpecialTrack_2.TransferTable(reader.getChunkStreamReader(), transferTable)).readChunk();
                                        specialTrack = transferTable;
                                        this.data.insertTrack(transferTable);
                                        i = reader.getStreamPosition();
                                    }
                                }
                                specialTrack.setName(name);
                                specialTrack.setPosition(position);
                                specialTrack.setRotation(rotation);
                                specialTrack.setInputs(inputs);
                                specialTrack.setOutputs(outputs);
                                specialTrack.setSwitchTime(switchTime);
                            };
                            return SpecialTrack;
                        }(Stream.ChunkStream));
                        SpecialTrack_2.SpecialTrack = SpecialTrack;
                    })(SpecialTrack = Track.SpecialTrack || (Track.SpecialTrack = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var SpecialTrack;
                    (function (SpecialTrack) {
                        var SwitchTrack = (function (_super) {
                            __extends(SwitchTrack, _super);
                            function SwitchTrack() {
                                _super.apply(this, arguments);
                            }
                            SwitchTrack.prototype.read = function (reader) {
                                reader.readNull(3);
                                this.data.setDirection(reader.readByte());
                                reader.readNull(3);
                                this.data.setStyle(reader.readByte());
                                reader.readNull(3);
                                this.data.setDefaultTrack(reader.readByte());
                                this.data.setDisplayStructure(reader.readByte());
                                reader.setStreamPosition(4);
                            };
                            return SwitchTrack;
                        }(Stream.ChunkStream));
                        SpecialTrack.SwitchTrack = SwitchTrack;
                    })(SpecialTrack = Track.SpecialTrack || (Track.SpecialTrack = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Track;
                (function (Track) {
                    var SpecialTrack;
                    (function (SpecialTrack) {
                        var TransferTable = (function (_super) {
                            __extends(TransferTable, _super);
                            function TransferTable() {
                                _super.apply(this, arguments);
                            }
                            TransferTable.prototype.read = function (reader) {
                                this.data.setDefaultTrack(reader.readInt());
                                this.data.setLength(reader.readDouble());
                                this.data.setDistance(reader.readDouble());
                                this.data.setDisplayStructure(reader.readByte());
                            };
                            return TransferTable;
                        }(Stream.ChunkStream));
                        SpecialTrack.TransferTable = TransferTable;
                    })(SpecialTrack = Track.SpecialTrack || (Track.SpecialTrack = {}));
                })(Track = Coaster.Track || (Coaster.Track = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Train;
                (function (Train) {
                    var Car = (function (_super) {
                        __extends(Car, _super);
                        function Car() {
                            _super.apply(this, arguments);
                        }
                        Car.prototype.read = function (reader) {
                            for (var i = 0; i <= reader.getFilesize(); i++) {
                                reader.setStreamPosition(i);
                                var chunk = reader.readChunkName();
                                if (chunk == "INDC") {
                                    var individualColor = new NoLimits.Chunks.Coaster.Train.IndividualColor();
                                    this.data.setIndividualColor(individualColor);
                                    var individualColorStream = new Train.IndividualColor(reader.getChunkStreamReader(), individualColor);
                                    individualColorStream.readChunk();
                                    i = reader.getStreamPosition();
                                }
                            }
                        };
                        return Car;
                    }(Stream.ChunkStream));
                    Train.Car = Car;
                })(Train = Coaster.Train || (Coaster.Train = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var NoLimits;
    (function (NoLimits) {
        var Stream;
        (function (Stream) {
            var Coaster;
            (function (Coaster) {
                var Train;
                (function (Train) {
                    var IndividualColor = (function (_super) {
                        __extends(IndividualColor, _super);
                        function IndividualColor() {
                            _super.apply(this, arguments);
                        }
                        IndividualColor.prototype.read = function (reader) {
                        };
                        return IndividualColor;
                    }(Stream.ChunkStream));
                    Train.IndividualColor = IndividualColor;
                })(Train = Coaster.Train || (Coaster.Train = {}));
            })(Coaster = Stream.Coaster || (Stream.Coaster = {}));
        })(Stream = NoLimits.Stream || (NoLimits.Stream = {}));
    })(NoLimits = NLParkViewer.NoLimits || (NLParkViewer.NoLimits = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var Renderer;
    (function (Renderer) {
        var TrackStyles;
        (function (TrackStyles) {
            var SpineType = (function () {
                function SpineType() {
                    this.wireframeRails = [];
                    this.wireframeCrossties = [];
                    this.wireframeCrosstiesSpacing = 1.0;
                    this.wireframeRailSpacing = 0.1;
                }
                return SpineType;
            }());
            TrackStyles.SpineType = SpineType;
        })(TrackStyles = Renderer.TrackStyles || (Renderer.TrackStyles = {}));
    })(Renderer = NLParkViewer.Renderer || (NLParkViewer.Renderer = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var Renderer;
    (function (Renderer) {
        var TrackStyles;
        (function (TrackStyles) {
            var RailNodeConnectionStyle = NLParkViewer.NoLimits.Chunks.Coaster.Support.RailNodeConnectionStyle;
            var MathUtils = NLParkViewer.Maths.MathUtils;
            var HyperCoaster = (function (_super) {
                __extends(HyperCoaster, _super);
                function HyperCoaster() {
                    _super.call(this);
                    this.spineTypes.push(new HyperCoasterSpine3Tubes());
                    this.spineTypes.push(new HyperCoasterSpine4Tubes());
                    this.spineTypes.push(new HyperCoasterSpine2TubesWD());
                    this.spineTypes.push(new HyperCoasterSpine2TubesWoD());
                }
                return HyperCoaster;
            }(TrackStyles.TrackStyle));
            TrackStyles.HyperCoaster = HyperCoaster;
            var HyperCoasterSpine3Tubes = (function (_super) {
                __extends(HyperCoasterSpine3Tubes, _super);
                function HyperCoasterSpine3Tubes() {
                    _super.call(this);
                    this.wireframeCrosstiesSpacing = 0.85;
                    this.wireframeRailSpacing = 0.2;
                    this.wireframeCrossties = [
                        vec4.fromValues(0.45, 0, 0, 1),
                        vec4.fromValues(0, -0.9, 0, 1),
                        vec4.fromValues(-0.45, 0, 0, 1),
                        vec4.fromValues(0.45, 0, 0, 1),
                    ];
                    this.wireframeRails = [
                        vec4.fromValues(0.45, 0, 0, 1),
                        vec4.fromValues(0, -0.9, 0, 1),
                        vec4.fromValues(-0.45, 0, 0, 1)
                    ];
                }
                HyperCoasterSpine3Tubes.prototype.getRailConnectorNodes = function (style, mat) {
                    return [
                        MathUtils.multiplyMat4Vec4ToVec3(mat, vec4.fromValues(0, -1.1, 0, 1)),
                        MathUtils.multiplyMat4Vec4ToVec3(mat, vec4.fromValues(0, -1.4, 0, 1)),
                    ];
                };
                return HyperCoasterSpine3Tubes;
            }(TrackStyles.SpineType));
            var HyperCoasterSpine4Tubes = (function (_super) {
                __extends(HyperCoasterSpine4Tubes, _super);
                function HyperCoasterSpine4Tubes() {
                    _super.call(this);
                    this.wireframeCrosstiesSpacing = 0.85;
                    this.wireframeRailSpacing = 0.2;
                    this.wireframeCrossties = [
                        vec4.fromValues(0.45, 0, 0, 1),
                        vec4.fromValues(0.45, -1.03, 0, 1),
                        vec4.fromValues(-0.45, -1.03, 0, 1),
                        vec4.fromValues(-0.45, 0, 0, 1),
                        vec4.fromValues(0.45, 0, 0, 1)
                    ];
                    this.wireframeRails = [
                        vec4.fromValues(0.45, 0, 0, 1),
                        vec4.fromValues(0.45, -1.03, 0, 1),
                        vec4.fromValues(-0.45, -1.03, 0, 1),
                        vec4.fromValues(-0.45, 0, 0, 1)
                    ];
                }
                HyperCoasterSpine4Tubes.prototype.getRailConnectorNodes = function (style, mat) {
                    return [
                        MathUtils.multiplyMat4Vec4ToVec3(mat, vec4.fromValues(0, -1.2, 0, 1)),
                        MathUtils.multiplyMat4Vec4ToVec3(mat, vec4.fromValues(0, -1.5, 0, 1)),
                    ];
                };
                return HyperCoasterSpine4Tubes;
            }(TrackStyles.SpineType));
            var HyperCoasterSpine2TubesWD = (function (_super) {
                __extends(HyperCoasterSpine2TubesWD, _super);
                function HyperCoasterSpine2TubesWD() {
                    _super.call(this);
                    this.wireframeCrosstiesSpacing = 0.85;
                    this.wireframeRailSpacing = 0.2;
                    this.wireframeCrossties = [
                        vec4.fromValues(0.45, 0, 0, 1),
                        vec4.fromValues(-0.45, 0, 0, 1),
                    ];
                    this.wireframeRails = [
                        vec4.fromValues(0.45, 0, 0, 1),
                        vec4.fromValues(-0.45, 0, 0, 1)
                    ];
                }
                HyperCoasterSpine2TubesWD.prototype.getRailConnectorNodes = function (style, mat) {
                    if (style == RailNodeConnectionStyle.TrackDefault) {
                        return [
                            MathUtils.multiplyMat4Vec4ToVec3(mat, vec4.fromValues(0, -0.17, 0, 1)),
                        ];
                    }
                    return [
                        MathUtils.multiplyMat4Vec4ToVec3(mat, vec4.fromValues(0, -0.17, 0, 1)),
                    ];
                };
                return HyperCoasterSpine2TubesWD;
            }(TrackStyles.SpineType));
            var HyperCoasterSpine2TubesWoD = (function (_super) {
                __extends(HyperCoasterSpine2TubesWoD, _super);
                function HyperCoasterSpine2TubesWoD() {
                    _super.call(this);
                    this.wireframeCrosstiesSpacing = 0.85;
                    this.wireframeRailSpacing = 0.2;
                    this.wireframeCrossties = [
                        vec4.fromValues(0.45, 0, 0, 1),
                        vec4.fromValues(-0.45, 0, 0, 1),
                    ];
                    this.wireframeRails = [
                        vec4.fromValues(0.45, 0, 0, 1),
                        vec4.fromValues(-0.45, 0, 0, 1)
                    ];
                }
                HyperCoasterSpine2TubesWoD.prototype.getRailConnectorNodes = function (style, mat) {
                    return [
                        MathUtils.multiplyMat4Vec4ToVec3(mat, vec4.fromValues(0, -0.17, 0, 1)),
                    ];
                };
                return HyperCoasterSpine2TubesWoD;
            }(TrackStyles.SpineType));
        })(TrackStyles = Renderer.TrackStyles || (Renderer.TrackStyles = {}));
    })(Renderer = NLParkViewer.Renderer || (NLParkViewer.Renderer = {}));
})(NLParkViewer || (NLParkViewer = {}));
var NLParkViewer;
(function (NLParkViewer) {
    var Tk;
    (function (Tk) {
        var BandMatrix = (function () {
            function BandMatrix(dim, nU, nL) {
                if (dim === void 0) { dim = 0; }
                if (nU === void 0) { nU = 0; }
                if (nL === void 0) { nL = 0; }
                this.mUpper = [];
                this.mLower = [];
                this.resize(dim, nU, nL);
            }
            BandMatrix.prototype.get = function (i, j) {
                var k = j - i;
                if (k >= 0)
                    return this.mUpper[k][i];
                else
                    return this.mLower[-k][i];
            };
            BandMatrix.prototype.set = function (i, j, val) {
                var k = j - i;
                if (k >= 0)
                    this.mUpper[k][i] = val;
                else
                    this.mLower[-k][i] = val;
            };
            BandMatrix.prototype.resize = function (dim, nU, nL) {
                this.mUpper.length = nU + 1;
                this.mLower.length = nL + 1;
                for (var i = 0; i < this.mUpper.length; i++) {
                    if (typeof this.mUpper[i] !== "array")
                        this.mUpper[i] = [];
                    this.mUpper[i].length = dim;
                    for (var k = 0; k < this.mUpper[i].length; k++) {
                        this.mUpper[i][k] = 0;
                    }
                }
                for (var i = 0; i < this.mLower.length; i++) {
                    if (typeof this.mLower[i] !== "array")
                        this.mLower[i] = [];
                    this.mLower[i].length = dim;
                    for (var k = 0; k < this.mLower[i].length; k++) {
                        this.mLower[i][k] = 0;
                    }
                }
            };
            BandMatrix.prototype.dim = function () {
                if (this.mUpper.length > 0) {
                    return this.mUpper[0].length;
                }
                else {
                    return 0;
                }
            };
            BandMatrix.prototype.numUpper = function () {
                return this.mUpper.length - 1;
            };
            BandMatrix.prototype.numLower = function () {
                return this.mLower.length - 1;
            };
            BandMatrix.prototype.savedDiag = function (i) {
                return this.mLower[0][i];
            };
            BandMatrix.prototype.setSavedDiag = function (i, val) {
                this.mLower[0][i] = val;
            };
            BandMatrix.prototype.luDecompose = function () {
                var i_max;
                var j_max;
                var j_min;
                var x;
                for (var i = 0; i < this.dim(); i++) {
                    this.setSavedDiag(i, 1.0 / this.get(i, i));
                    j_min = Math.max(0, i - this.numLower());
                    j_max = Math.min(this.dim() - 1, i + this.numUpper());
                    for (var j = j_min; j <= j_max; j++) {
                        this.set(i, j, this.get(i, j) * this.savedDiag(i));
                    }
                    this.set(i, i, 1.0);
                }
                for (var k = 0; k < this.dim(); k++) {
                    i_max = Math.min(this.dim() - 1, k + this.numLower());
                    for (var i = k + 1; i <= i_max; i++) {
                        x = -this.get(i, k) / this.get(k, k);
                        this.set(i, k, -x);
                        j_max = Math.min(this.dim() - 1, k + this.numUpper());
                        for (var j = k + 1; j <= j_max; j++) {
                            this.set(i, j, this.get(i, j) + x * this.get(k, j));
                        }
                    }
                }
            };
            BandMatrix.prototype.rSolve = function (b) {
                var x = [];
                x.length = this.dim();
                var j_stop;
                var sum;
                for (var i = this.dim() - 1; i >= 0; i--) {
                    sum = 0;
                    j_stop = Math.min(this.dim() - 1, i + this.numUpper());
                    for (var j = i + 1; j <= j_stop; j++)
                        sum += this.get(i, j) * x[j];
                    x[i] = (b[i] - sum) / this.get(i, i);
                }
                return x;
            };
            BandMatrix.prototype.lSolve = function (b) {
                var x = [];
                x.length = this.dim();
                var j_start;
                var sum;
                for (var i = 0; i < this.dim(); i++) {
                    sum = 0;
                    j_start = Math.max(0, i - this.numLower());
                    for (var j = j_start; j < i; j++)
                        sum += this.get(i, j) * x[j];
                    x[i] = (b[i] * this.savedDiag(i)) - sum;
                }
                return x;
            };
            BandMatrix.prototype.luSolve = function (b, isLuDecomposed) {
                if (isLuDecomposed === void 0) { isLuDecomposed = false; }
                var x;
                var y;
                if (isLuDecomposed == false) {
                    this.luDecompose();
                }
                y = this.lSolve(b);
                x = this.rSolve(y);
                return x;
            };
            return BandMatrix;
        }());
        Tk.BandMatrix = BandMatrix;
        (function (SplineBDType) {
            SplineBDType[SplineBDType["FirstDerivative"] = 1] = "FirstDerivative";
            SplineBDType[SplineBDType["SecondDerivative"] = 2] = "SecondDerivative";
        })(Tk.SplineBDType || (Tk.SplineBDType = {}));
        var SplineBDType = Tk.SplineBDType;
        var Spline = (function () {
            function Spline() {
                this.mX = [];
                this.mY = [];
                this.mA = [];
                this.mB = [];
                this.mC = [];
                this.mB0 = 0;
                this.mC0 = 0;
                this.mLeft = SplineBDType.SecondDerivative;
                this.mRight = SplineBDType.SecondDerivative;
                this.mLeftValue = 0;
                this.mRightValue = 0;
                this.mForceLinearExtrapolation = false;
            }
            Spline.prototype.setBoundary = function (left, leftValue, right, rightValue, forceLinearExtrapolation) {
                if (forceLinearExtrapolation === void 0) { forceLinearExtrapolation = false; }
                if (!this.mX.length) {
                    this.mLeft = left;
                    this.mRight = right;
                    this.mLeftValue = leftValue;
                    this.mRightValue = rightValue;
                    this.mForceLinearExtrapolation = forceLinearExtrapolation;
                }
            };
            Spline.prototype.setPoints = function (x, y, cubicSpline) {
                if (cubicSpline === void 0) { cubicSpline = true; }
                this.mX = x;
                this.mY = y;
                var n = x.length;
                if (cubicSpline == true) {
                    var A = new BandMatrix(n, 1, 1);
                    var rhs = [];
                    rhs.length = n;
                    for (var i = 1; i < n - 1; i++) {
                        A.set(i, i - 1, 1.0 / 3.0 * (x[i] - x[i - 1]));
                        A.set(i, i, 2.0 / 3.0 * (x[i + 1] - x[i - 1]));
                        A.set(i, i + 1, 1.0 / 3.0 * (x[i + 1] - x[i]));
                        rhs[i] = (y[i + 1] - y[i]) / (x[i + 1] - x[i]) - (y[i] - y[i - 1]) / (x[i] - x[i - 1]);
                    }
                    if (this.mLeft == SplineBDType.SecondDerivative) {
                        A.set(0, 0, 2.0);
                        A.set(0, 1, 0.0);
                        rhs[0] = this.mLeftValue;
                    }
                    else if (this.mLeft == SplineBDType.FirstDerivative) {
                        A.set(0, 0, 2.0 * (x[1] - x[0]));
                        A.set(0, 1, 1.0 * (x[1] - x[0]));
                        rhs[0] = 3.0 * ((y[1] - y[0]) / (x[1] - x[0]) - this.mLeftValue);
                    }
                    else {
                        return;
                    }
                    if (this.mRight == SplineBDType.SecondDerivative) {
                        A.set(n - 1, n - 1, 2.0);
                        A.set(n - 1, n - 2, 0.0);
                        rhs[n - 1] = this.mRightValue;
                    }
                    else if (this.mRight == SplineBDType.FirstDerivative) {
                        A.set(n - 1, n - 1, 2.0 * (x[n - 1] - x[n - 2]));
                        A.set(n - 1, n - 2, 1.0 * (x[n - 1] - x[n - 2]));
                        rhs[n - 1] = 3.0 * (this.mRightValue - (y[n - 1] - y[n - 2]) / (x[n - 1] - x[n - 2]));
                    }
                    else {
                        return;
                    }
                    this.mB = A.luSolve(rhs);
                    this.mA.length = n;
                    this.mC.length = n;
                    for (var i = 0; i < n - 1; i++) {
                        this.mA[i] = 1.0 / 3.0 * (this.mB[i + 1] - this.mB[i]) / (x[i + 1] - x[i]);
                        this.mC[i] = (y[i + 1] - y[i]) / (x[i + 1] - x[i])
                            - 1.0 / 3.0 * (2.0 * this.mB[i] + this.mB[i + 1]) * (x[i + 1] - x[i]);
                    }
                }
                else {
                    this.mA.length = n;
                    this.mB.length = n;
                    this.mC.length = n;
                    for (var i = 0; i < n - 1; i++) {
                        this.mA[i] = 0.0;
                        this.mB[i] = 0.0;
                        this.mC[i] = (this.mY[i + 1] - this.mY[i]) / (this.mX[i + 1] - this.mX[i]);
                    }
                }
                this.mB0 = (this.mForceLinearExtrapolation == false) ? this.mB[0] : 0.0;
                this.mC0 = this.mC[0];
                var h = x[n - 1] - x[n - 2];
                this.mA[n - 1] = 0.0;
                this.mC[n - 1] = 3.0 * this.mA[n - 2] * h * h + 2.0 * this.mB[n - 2] * h + this.mC[n - 2];
                if (this.mForceLinearExtrapolation == true)
                    this.mB[n - 1] = 0.0;
            };
            Spline.prototype.interpolationSearch = function (x) {
                var low = 0;
                var high = this.mX.length - 1;
                var mid = 0;
                while (this.mX[high] != this.mX[low] && x >= this.mX[low] && x <= this.mX[high]) {
                    mid = Math.floor(low + ((x - this.mX[low]) * (high - low) / (this.mX[high] - this.mX[low])));
                    if (this.mX[mid] < x)
                        low = Math.floor(mid + 1);
                    else if (x < this.mX[mid])
                        high = Math.floor(mid - 1);
                    else
                        return mid;
                }
                if (mid < 0)
                    mid = 0;
                if (mid >= this.mX.length - 1) {
                    mid = this.mX.length - 1;
                }
                if (x < this.mX[mid]) {
                    mid -= 1;
                }
                return mid;
            };
            Spline.prototype.get = function (x) {
                var n = this.mX.length;
                var idx = Math.max(this.interpolationSearch(x), 0);
                var h = x - this.mX[idx];
                var interpol;
                if (x < this.mX[0]) {
                    interpol = (this.mB0 * h + this.mC0) * h + this.mY[0];
                }
                else if (x > this.mX[n - 1]) {
                    interpol = (this.mB[n - 1] * h + this.mC[n - 1]) * h + this.mY[n - 1];
                }
                else {
                    interpol = ((this.mA[idx] * h + this.mB[idx]) * h + this.mC[idx]) * h + this.mY[idx];
                }
                return interpol;
            };
            return Spline;
        }());
        Tk.Spline = Spline;
    })(Tk = NLParkViewer.Tk || (NLParkViewer.Tk = {}));
})(NLParkViewer || (NLParkViewer = {}));
//# sourceMappingURL=NoLimitsParkViewer.js.map