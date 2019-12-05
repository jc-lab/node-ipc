# node-ipc

_ein Nodejs-Modul für die lokale und remotee Inter Process-Kommunikation_ mit voller Unterstützung für Linux, Mac und Windows. Es unterstützt auch alle Formen der Socket-Kommunikation von Low-Level-Unix- und Windows-Sockets bis hin zu UDP und sicheren TLS- und TCP-Sockets.

Eine großartige Lösung für komplexe Multiprozess- **Neuronale Vernetzung** in Node.JS

**npm node-ipc installieren**

#### NPM-Statistiken

npm info :  [Siehe npm Trends und Statistiken für node-ipc](http://npm-stat.com/charts.html?package=node-ipc&author=&from=&to=)  
[![NPM](https://nodei.co/npm/node-ipc.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-ipc/)
[![Package Quality](http://npm.packagequality.com/badge/node-ipc.png)](http://packagequality.com/#?package=node-ipc)  
![node-ipc npm version](https://img.shields.io/npm/v/node-ipc.svg) ![supported node version for node-ipc](https://img.shields.io/node/v/node-ipc.svg) ![total npm downloads for node-ipc](https://img.shields.io/npm/dt/node-ipc.svg) ![monthly npm downloads for node-ipc](https://img.shields.io/npm/dm/node-ipc.svg) ![npm licence for node-ipc](https://img.shields.io/npm/l/node-ipc.svg)

[![RIAEvangelist](https://avatars3.githubusercontent.com/u/369041?v=3&s=100)](https://github.com/RIAEvangelist)

GitHub-Informationen :  
![node-ipc GitHub Release](https://img.shields.io/github/release/RIAEvangelist/node-ipc.svg) ![GitHub license node-ipc license](https://img.shields.io/github/license/RIAEvangelist/node-ipc.svg) ![open issues for node-ipc on GitHub](https://img.shields.io/github/issues/RIAEvangelist/node-ipc.svg)

Codacy Info :  
[![Codacy Badge](https://api.codacy.com/project/badge/grade/8e0294dff55f4ac1985c07b16f39d0a9)](https://www.codacy.com/app/RIAEvangelist/node-ipc) [![Codacy Badge](https://api.codacy.com/project/badge/coverage/8e0294dff55f4ac1985c07b16f39d0a9)](https://www.codacy.com/app/RIAEvangelist/node-ipc)

Build-Info :  
Mac & Linux : [![Build Status](https://travis-ci.org/RIAEvangelist/node-ipc.svg?branch=master)](https://travis-ci.org/RIAEvangelist/node-ipc) Fenster: [![node-ipc windows build status](https://ci.appveyor.com/api/projects/status/github/riaevangelist/node-ipc?branch=master&svg=true)](https://ci.appveyor.com/project/RIAEvangelist/node-ipc/history)

Paketdetails Webseiten :

-   [GitHub.io-Website](http://riaevangelist.github.io/node-ipc/ "node-ipc documentation"). Eine schönere Version dieser Website.
-   [NPM-Modul](https://www.npmjs.org/package/node-ipc "node-ipc npm module"). Die npm-Seite für das node-ipc-Modul.

Diese Arbeiten werden über die [DBAD Öffentliche Lizenz](http://www.dbad-license.org/).

#### Ältere Versionen des Knotens

die neuesten Versionen von `node-ipc` kann mit der --Harmonie-Flagge arbeiten. Offiziell unterstützen wir jedoch Knoten v4 und neuer mit es5 und es6

#### Testen

`npm test` führt die Jasmintests mit istanbul für node-ipc aus und generiert einen Coverage-Bericht im Spezifikationsordner.

Vielleicht möchten Sie Jasmin und Istanbul weltweit mit `sudo npm install -g jasmine istanbul`

* * *

#### Inhalt

- [node-ipc](#node-ipc)
      - [NPM-Statistiken](#npm-statistiken)
      - [Ältere Versionen des Knotens](#%c3%84ltere-versionen-des-knotens)
      - [Testen](#testen)
      - [Inhalt](#inhalt)
      - [Typen von IPC-Sockets](#typen-von-ipc-sockets)
      - [IPC Config](#ipc-config)
      - [IPC-Methoden](#ipc-methoden)
        - [Protokoll](#protokoll)
        - [connectTo](#connectto)
        - [connectToNet](#connecttonet)
        - [Trennen](#trennen)
        - [Dienen](#dienen)
        - [serveNet](#servenet)
    - [IPC-Speicher und Standardvariablen](#ipc-speicher-und-standardvariablen)
    - [IPC-Servermethoden](#ipc-servermethoden)
    - [IPC-Veranstaltungen](#ipc-veranstaltungen)
    - [Mehrere IPC-Instanzen](#mehrere-ipc-instanzen)
    - [Grundlegende Beispiele](#grundlegende-beispiele)
      - [Server für Unix-Sockets, Windows-Sockets & TCP-Sockets](#server-f%c3%bcr-unix-sockets-windows-sockets--tcp-sockets)
      - [Client für Unix Sockets & TCP Sockets](#client-f%c3%bcr-unix-sockets--tcp-sockets)
      - [Server & Client für UDP-Sockets](#server--client-f%c3%bcr-udp-sockets)
        - [UDP Server 1 - "Welt"](#udp-server-1---%22welt%22)
        - [UDP Server 2 - "Hallo"](#udp-server-2---%22hallo%22)
      - [Raw Buffer oder Binary Sockets](#raw-buffer-oder-binary-sockets)
      - [Server mit dem `cluster` Modul](#server-mit-dem-cluster-modul)
        - [Server](#server)
        - [Kunde](#kunde)
      - [Lizenziert unter DBAD-Lizenz](#lizenziert-unter-dbad-lizenz)

* * *

#### Typen von IPC-Sockets

| Typ                             | Stabilität | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unix-Socket oder Windows-Socket | Stabil     | Bietet Linux, Mac und Windows blitzschnelle Kommunikation und vermeidet die Netzwerkkarte, um Overhead und Latenz zu reduzieren. [Lokale Unix- und Windows Socket-Beispiele ](https://github.com/RIAEvangelist/node-ipc/tree/master/example/unixWindowsSocket/ "Unix and Windows Socket Node IPC examples")                                                                                                                                                                                                                                                                                                                                                                                 |
| TCP-Socket                      | Stabil     | Bietet die zuverlässigste Kommunikation über das Netzwerk. Kann auch für lokale IPC verwendet werden, ist aber langsamer als die Unix Socket-Implementierung von #1, da TCP-Sockets die Netzwerkkarte durchlaufen, unix Sockets und Windows Sockets dies nicht tun. [Beispiele für TCP Socket für lokales oder Remotenetzwerk ](https://github.com/RIAEvangelist/node-ipc/tree/master/example/TCPSocket/ "TCP Socket Node IPC examples")                                                                                                                                                                                                                                                    |
| TLS-Sockel                      | Stabil     | Konfigurierbarer und sicherer Netzwerksocket über SSL. Entspricht https. [TLS/SSL-Dokumentation](https://github.com/RIAEvangelist/node-ipc/tree/master/example/TLSSocket)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| UDP-Sockets                     | Stabil     | Gibt die **schnellste Netzwerkkommunikation**. UDP ist weniger zuverlässig, aber viel schneller als TCP. Es eignet sich am besten zum Streamen nicht kritischer Daten wie Sound, Video oder Multiplayer-Spieldaten, da es Pakete je nach Netzwerkkonnektivität und anderen Faktoren ablegen kann. UDP kann auch für lokale IPC verwendet werden, ist aber langsamer als #1 Unix Socket oder Windows Socket Implementation, da UDP-Sockets die Netzwerkkarte durchlaufen, während Unix- und Windows-Sockets dies nicht tun. [UdP Socket-Beispiele für lokales oder Remotenetzwerk ](https://github.com/RIAEvangelist/node-ipc/tree/master/example/UDPSocket/ "UDP Socket Node IPC examples") |

| das      | Unterstützte Sockets       |
| -------- | -------------------------- |
| Linux    | Unix, Posix, TCP, TLS, UDP |
| Mac      | Unix, Posix, TCP, TLS, UDP |
| Gewinnen | Windows, TCP, TLS, UDP     |

* * *

#### IPC Config

`ipc.config`  

Legen Sie diese Variablen in der `ipc.config` zum Überschreiben oder Festlegen von Standardwerten.

```javascript
    {
        appspace        : 'app.',
        socketRoot      : '/tmp/',
        id              : os.hostname(),
        networkHost     : 'localhost', //should resolve to 127.0.0.1 or ::1 see the table below related to this
        networkPort     : 8000,
        encoding        : 'utf8',
        rawBuffer       : false,
        delimiter       : '\f',
        sync            : false,
        silent          : false,
        logInColor      : true,
        logDepth        : 5,
        logger          : console.log,
        maxConnections  : 100,
        retry           : 500,
        maxRetries      : false,
        stopRetrying    : false,
        interfaces      : {
            localAddress: false,
            localPort   : false,
            family      : false,
            hints       : false,
            lookup      : false
        }
    }
```

| Variable       | Dokumentation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appspace       | Unix Socket (Unix Domain Socket) Namespacing verwendet. Wenn nicht speziell festgelegt, kombiniert der Unix-Domänensocket socketRoot, appspace und id, um den Unix-Socketpfad für die Erstellung oder Bindung zu bilden. Dies ist verfügbar, falls sie viele Apps auf Ihrem System ausgeführt haben, Sie können mehrere Sockets mit der gleichen ID haben, aber wenn Sie den Appspace ändern, haben Sie immer noch App specic eindeutige Sockets.                                                                                       |
| socketRoot     | Das Verzeichnis, in dem ein Unix Socket erstellt oder an einen Unix Socket gebunden werden soll                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Id             | die ID dieses Sockets oder Dienstes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| networkHost    | der lokale oder Remotehost, auf dem TCP-, TLS- oder UDP-Sockets eine Verbindung herstellen sollen                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| networkPort    | der Standardport, an dem TCP-, TLS- oder UDP-Sockets eine Verbindung herstellen sollen                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Codierung      | die Standardcodierung für Daten, die auf Sockets gesendet werden. Wird meistens verwendet, wenn rawBuffer auf true festgelegt ist. Gültige Werte sind: `ascii` `utf8` `utf16le` `ucs2` `base64` `hex` .                                                                                                                                                                                                                                                                                                                                 |
| rawBuffer      | Wenn true, werden Daten als Unformatknoten gesendet und empfangen `Buffer` **Nicht** Eine `Object` als JSON. Dies ist ideal für Binary oder Hex IPC, und die Kommunikation mit anderen Prozessen in Sprachen wie C und C++                                                                                                                                                                                                                                                                                                              |
| Trennzeichen   | das Trennzeichen am Ende jedes Datenpakets.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Sync           | synchrone Anforderungen. Clients senden erst dann neue Anforderungen, wenn der Server antwortet.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Leise          | Der Standardwert für die Ein-/Aus-Protokollierung ist false, d. h., die Protokollierung ist aktiviert                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| logInColor     | Aktivieren/Ausschalten von util.inspect-Farben für ipc.log                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| logDepth       | Legen Sie die Tiefe für util.inspect während ipc.log fest                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Logger         | die Funktion, die die Ausgabe von ipc.log empfängt; sollte ein einzelnes Zeichenfolgenargument verwenden                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Maxconnections | Dies ist die maximale Anzahl von Verbindungen, die zu einem Socket zugelassen sind. Es wird derzeit nur auf Unix Sockets festgelegt. Andere Sockettypen verwenden die Systemstandards.                                                                                                                                                                                                                                                                                                                                                  |
| Wiederholen    | Dies ist die Zeit in Millisekunden, die ein Client wartet, bevor er versucht, die Verbindung zu einem Server wiederherzustellen, wenn die Verbindung unterbrochen wird. Dies wirkt sich nicht auf UDP-Sockets aus, da sie keine Clientserverbeziehung wie Unix Sockets und TCP Sockets haben.                                                                                                                                                                                                                                           |
| maxRetries     | Wenn diese Einstellung festgelegt ist, stellt sie die maximale Anzahl von Wiederholungen nach jeder Trennung dar, bevor sie eine bestimmte Verbindung aufgibt und vollständig abtötet                                                                                                                                                                                                                                                                                                                                                   |
| stopRetrying   | Standardwerte für false bedeutet, dass Clients weiterhin versuchen, im Wiederholungsintervall eine unbefristete Verbindung mit Servern herzustellen. Wenn der Client auf eine beliebige Zahl festgelegt ist, wird der Vorgang nicht mehr versucht, wenn diese Zahl nach jeder Verbindung überschritten wird. Wenn auf true in Echtzeit gesetzt, wird der Versuch, unabhängig von maxRetries eine Verbindung herzustellen, sofort beendet. Wenn auf 0 gesetzt, wird der Client **_Nicht_** versuchen, die Verbindung wiederherzustellen. |
| Unlink         | Standardmäßig bedeutet dies, dass das Modul vor dem Start den IPC-Socket löscht.  Wenn Sie `node-ipc` In einer Clusterumgebung, in der sich mehrere Listener auf demselben Socket befinden, müssen Sie diesen Wert auf `false` und kümmern Sie sich dann um das Löschen des Sockets in Ihrem eigenen Code.                                                                                                                                                                                                                              |
| Schnittstellen | wird hauptsächlich verwendet, wenn angegeben wird, über welche Schnittstelle ein Client eine Verbindung herstellen soll. siehe die [socket.connect-Dokumentation in der node.js api](https://nodejs.org/api/net.html#net_socket_connect_options_connectlistener)                                                                                                                                                                                                                                                                        |

* * *

#### IPC-Methoden

Diese Methoden sind im IPC-Bereich verfügbar.  

* * *

##### Protokoll

`ipc.log(a,b,c,d,e...);`  

ipc.log akzeptiert eine beliebige Anzahl von Argumenten und `ipc.config.silent` ist nicht festgelegt, es wird sie alle mit einem einzigen Leerzeichen ' ' zwischen ihnen verkettet und sie dann an der Konsole protokolliert. Dies ist schnell, da es verhindert, dass eine Verkettung geschieht, wenn die ipc.config.silent gesetzt ist `true`. Auf diese Weise, wenn Sie Ihre Protokollierung an Ort und Stelle lassen, sollte es fast keinen Einfluss auf die Leistung haben.

Das Protokoll verwendet auch util.inspect Sie können steuern, ob es sich in Farbe, die Protokolltiefe und das Ziel über `ipc.config`

```javascript
    ipc.config.logInColor=true; //default
    ipc.config.logDepth=5; //default    
    ipc.config.logger=console.log.bind(console); // default
```

* * *

##### connectTo

`ipc.connectTo(id,path,callback);`  

Wird zum Herstellen einer Verbindung als Client mit lokalen Unix Sockets und Windows Sockets verwendet. **_Dies ist der schnellste Weg für Prozesse auf derselben Maschine,_** weil es die Netzwerkkarte umgeht, die TCP und UDP beide verwenden müssen.

| Variable | Erforderlich | Definition                                                                                                                                                                                                                                                                                                |
| -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Id       | Erforderlich | ist die Zeichenfolgen-ID des Sockets, mit dem verbunden wird. Der Socket mit dieser ID wird dem ipc.of-Objekt hinzugefügt, wenn er erstellt wird.                                                                                                                                                         |
| Pfad     | Optional     | ist der Pfad der Unix-Domänensocketdatei, wenn das System Windows ist, wird dies automatisch in eine entsprechende Pipe mit den gleichen Informationen wie die Unix-Domänensocketdatei konvertiert. Wenn nicht festgelegt, wird dies standardmäßig auf `ipc.config.socketRoot`+`ipc.config.appspace`+`id` |
| Rückruf  | Optional     | Dies ist die Funktion, die ausgeführt werden soll, wenn der Socket erstellt wurde.                                                                                                                                                                                                                        |

**Beispiele** Argumente können überdmungen werden, solange sie noch in Ordnung sind.

```javascript
    ipc.connectTo('world');
```

oder nur eine ID und einen Rückruf verwenden

```javascript
    ipc.connectTo(
        'world',
        function(){
            ipc.of.world.on(
                'hello',
                function(data){
                    ipc.log(data.debug);
                    //if data was a string, it would have the color set to the debug style applied to it
                }
            )
        }
    );
```

oder explizit den Pfad festlegen

```javascript
    ipc.connectTo(
        'world',
        'myapp.world'
    );
```

oder explizites Festlegen des Pfads mit Rückruf

```javascript
    ipc.connectTo(
        'world',
        'myapp.world',
        function(){
            ...
        }
    );
```

* * *

##### connectToNet

`ipc.connectToNet(id,host,port,callback)`  

Wird verwendet, um eine Verbindung als Client mit einem TCP oder [TLS-Sockel](https://github.com/RIAEvangelist/node-ipc/tree/master/example/TLSSocket) über die Netzwerkkarte. Dies kann lokal oder remote sein, wenn lokal, wird empfohlen, dass Sie die Unix- und Windows Socket-Implementierung von `connectTo` stattdessen, da es viel schneller ist, da es die Netzwerkkarte ganz vermeidet.

Für TLS- und SSL-Sockets siehe [node-ipc TLS und SSL-Dokumente](https://github.com/RIAEvangelist/node-ipc/tree/master/example/TLSSocket). Sie haben ein paar zusätzliche Anforderungen, und Dinge, über die sie wissen müssen, und so haben sie ihr eigenes Dokument.

| Variable | Erforderlich | Definition                                                                                                                                                                        |
| -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Id       | Erforderlich | ist die Zeichenfolgen-ID des Sockets, mit dem verbunden wird. Bei TCP& TLS-Sockets wird diese ID `ipc.of` Objekt, wenn der Socket mit einem Verweis auf den Socket erstellt wird. |
| Host     | Optional     | ist der Host, auf dem sich der TCP- oder TLS-Socket befindet.  Dies wird standardmäßig auf  `ipc.config.networkHost` wenn nicht angegeben.                                        |
| Hafen    | Optional     | der Port, auf dem sich der TCP- oder TLS-Socket befindet.                                                                                                                         |
| Rückruf  | Optional     | Dies ist die Funktion, die ausgeführt werden soll, wenn der Socket erstellt wurde.                                                                                                |

**Beispiele** Argumente können überdmungen werden, solange sie noch in Ordnung sind.  
Während also der Standardwert lautet: (id,host,port,callback), funktionieren die folgenden Beispiele immer noch, weil sie immer noch in der Reihenfolge (id,port,callback) oder (id,host,callback) oder (id,port) usw. sind.

```javascript
    ipc.connectToNet('world');
```

oder nur eine ID und einen Rückruf verwenden

```javascript
    ipc.connectToNet(
        'world',
        function(){
            ...
        }
    );
```

oder explizites Festlegen des Hosts und des Pfads

```javascript
    ipc.connectToNet(
        'world',
        'myapp.com',serve(path,callback)
        3435
    );
```

oder nur explizites Festlegen von Port und Rückruf

```javascript
    ipc.connectToNet(
        'world',
        3435,
        function(){
            ...
        }
    );
```

* * *

##### Trennen

`ipc.disconnect(id)`  

Wird verwendet, um einen Client von einem Unix-, Windows-, TCP- oder TLS-Socket zu trennen. Der Sockel und seine Refrence werden aus dem Speicher entfernt und die `ipc.of` Umfang. Dies kann lokal oder remote sein. UDP-Clients verwalten keine Verbindungen, sodass keine Clients vorhanden sind und diese Methode keinen Wert für sie hat.

| Variable | Erforderlich | Definition                                                                         |
| -------- | ------------ | ---------------------------------------------------------------------------------- |
| Id       | Erforderlich | ist die Zeichenfolgen-ID des Sockets, von dem die Verbindung getrennt werden soll. |

**Beispiele**

```javascript
    ipc.disconnect('world');
```

* * *

##### Dienen

`ipc.serve(path,callback);`  

Wird verwendet, um lokale Unix Socket Server oder Windows Socket Server zu erstellen, an die Clients binden können. Der Server kann `emit` Ereignisse an bestimmte Client Sockets oder `broadcast` Ereignisse an alle bekannten ClientSockets.   

| Variable | Erforderlich | Definition                                                                                                                                                                                                                                                                                                     |
| -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pfad     | Optional     | Dies ist der Pfad der Unix-Domänensocketdatei, wenn das System Windows ist, wird dies automatisch in eine entsprechende Pipe mit den gleichen Informationen wie die Unix-Domänensocketdatei konvertiert. Wenn nicht festgelegt, wird dies standardmäßig auf `ipc.config.socketRoot`+`ipc.config.appspace`+`id` |
| Rückruf  | Optional     | Dies ist eine Funktion, die aufgerufen werden soll, nachdem der Server gestartet wurde. Dies kann auch durch Binden eines Ereignisses an das Startereignis wie `ipc.server.on('start',function(){});`                                                                                                          |

**_Beispiele_** Argumente können weggelassen werden, solange sie noch in Ordnung sind.

```javascript
    ipc.serve();
```

oder angeben von Rückruf

```javascript
    ipc.serve(
        function(){...}
    );
```

oder geben Sie den Pfad an

```javascript
    ipc.serve(
        '/tmp/myapp.myservice'
    );
```

oder alles angeben

```javascript
    ipc.serve(
        '/tmp/myapp.myservice',
        function(){...}
    );
```

* * *

##### serveNet

`serveNet(host,port,UDPType,callback)`

Wird zum Erstellen von TCP, TLS oder UDP Socket Server verwendet, an den Clients binden können oder an andere Server Daten senden können. Der Server kann `emit` Ereignisse an bestimmte Client Sockets oder `broadcast` Ereignisse an alle bekannten ClientSockets.

| Variable | Erforderlich | Definition                                                                                                                                                                                                                                       |
| -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Host     | Optional     | Wenn diese Standardeinstellung nicht angegeben ist, wird die s) auf die erste Adresse in os.networkInterfaces() festgelegt. Für TCP-, TLS- & UDP-Server wird dies höchstwahrscheinlich 127.0.0.1 oder ::1 sein.                                  |
| Hafen    | Optional     | Der Port, an den der TCP-, UDP- oder TLS-Socket-Server gebunden ist, wird standardmäßig auf 8000 festgelegt, wenn nicht angegeben                                                                                                                |
| UDPType  | Optional     | Wenn diese Einstellung, wird der Server als UDP-Socket erstellt. 'udp4' oder 'udp6' sind gültige Werte. Dies wird standardmäßig nicht festgelegt. Achten Sie bei der Verwendung von udp6 darauf, einen gültigen IPv6-Host anzugeben, z. B. `::1` |
| Rückruf  | Optional     | Funktion, die aufgerufen werden soll, wenn der Server erstellt wird                                                                                                                                                                              |

**_Beispiele_** Argumente können so lange ausgelassen werden, da sie noch in Ordnung sind.

Standard-TCP-Server

```javascript
    ipc.serveNet();
```

Standard-UDp-Server

```javascript
    ipc.serveNet('udp4');
```

oder angeben von TCP-Server mit Rückruf

```javascript
    ipc.serveNet(
        function(){...}
    );
```

oder angeben von UDP-Server mit Rückruf

```javascript
    ipc.serveNet(
        'udp4',
        function(){...}
    );
```

oder port angeben

```javascript
    ipc.serveNet(
        3435
    );
```

oder geben Sie alles an TCP an

```javascript
    ipc.serveNet(
        'MyMostAwesomeApp.com',
        3435,
        function(){...}
    );
```

oder geben Sie alles an, was UDP

```javascript
    ipc.serveNet(
        'MyMostAwesomeApp.com',
        3435,
        'udp4',
        function(){...}
    );
```

* * *

### IPC-Speicher und Standardvariablen

| Variable   | Definition                                                                                                                                                                                                                                |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ipc.of     | Hier werden Socket-Verbindungs-Refrences gespeichert, wenn sie als Client über die `ipc.connectTo` Oder `iupc.connectToNet`. Sie werden basierend auf der ID gespeichert, die verwendet wird, um sie zu erstellen, z.B. : ipc.of.mySocket |
| ipc.server | Dies ist ein Refrence gegenüber dem Server, der von `ipc.serve` Oder `ipc.serveNet`                                                                                                                                                       |

* * *

### IPC-Servermethoden

| Methode | Definition                                                                                                               |
| ------- | ------------------------------------------------------------------------------------------------------------------------ |
| Starten | Beginnen Sie mit der Bedienung, müssen Sie anrufen `serve` Oder `serveNet` Zuerst einrichten, um den Server einzurichten |
| Stoppen | Schließen Sie den Server und beenden Sie die                                                                             |

* * *

### IPC-Veranstaltungen

| Ereignisname          | Params                         | Definition                                                                                                                                                                                                     |
| --------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fehler                | err obj                        | ausgelöst, wenn ein Fehler aufgetreten ist                                                                                                                                                                     |
| Verbinden             |                                | ausgelöst, wenn der Socket angeschlossen ist                                                                                                                                                                   |
| Trennen               |                                | Ausgelöst durch den Client, wenn der Socket vom Server getrennt wurde                                                                                                                                          |
| socket.disconnected   | Socket zerstörtSocketID        | vom Server ausgelöst, wenn ein Clientsocket getrennt wurde                                                                                                                                                     |
| Zerstören             |                                | ausgelöst, wenn Socket vollständig zerstört wurde, werden keine weiteren automatischen Wiederholungen passieren und alle Verweise sind verschwunden.                                                           |
| Daten                 | Puffer                         | ausgelöst, wenn ipc.config.rawBuffer wahr ist und eine Nachricht empfangen wird.                                                                                                                               |
| **_Ihr Ereignistyp_** | **_Ihre Veranstaltungsdaten_** | ausgelöst, wenn eine JSON-Nachricht empfangen wird. Der Ereignisname ist die Typzeichenfolge aus Ihrer Nachricht und das param ist das Datenobjekt aus Ihrer Nachricht, z. B. : `{ type:'myEvent',data:{a:1}}` |
|                       |                                |                                                                                                                                                                                                                |

### Mehrere IPC-Instanzen

Manchmal benötigen Sie explizite und unabhängige Instanzen von node-ipc. Nur für solche Szenarien haben wir die IPC-Kernklasse auf dem IPC Singleton offengelegt.

```javascript
    const RawIPC=require('node-ipc').IPC;
    const ipc=new RawIPC;
    const someOtherExplicitIPC=new RawIPC;


    //OR

    const ipc=require('node-ipc');
    const someOtherExplicitIPC=new ipc.IPC;


    //setting explicit configs

    //keep one silent and the other verbose
    ipc.config.silent=true;
    someOtherExplicitIPC.config.silent=true;

    //make one a raw binary and the other json based ipc
    ipc.config.rawBuffer=false;

    someOtherExplicitIPC.config.rawBuffer=true;
    someOtherExplicitIPC.config.encoding='hex';
```

* * *

### Grundlegende Beispiele

Sie finden [Erweiterte Beispiele](https://github.com/RIAEvangelist/node-ipc/tree/master/example) im Beispielordner. In den Beispielen finden Sie komplexere Demos, einschließlich Multi-Client-Beispielen.

#### Server für Unix-Sockets, Windows-Sockets & TCP-Sockets

Der Server ist der Prozess, bei dem ein Socket für IPC geöffnet bleibt. Mehrere Sockets können eine Verbindung zu diesem Server herstellen und mit ihm sprechen. Es kann auch an alle Clients übertragen oder an einen bestimmten Client emittieren. Dies ist das einfachste Beispiel, das für lokale Unix- und Windows-Sockets sowie lokale oder Remote-Netzwerk-TCP-Sockets funktioniert.

```javascript
    var ipc=require('node-ipc');

    ipc.config.id   = 'world';
    ipc.config.retry= 1500;

    ipc.serve(
        function(){
            ipc.server.on(
                'message',
                function(data,socket){
                    ipc.log('got a message : '.debug, data);
                    ipc.server.emit(
                        socket,
                        'message',  //this can be anything you want so long as
                                    //your client knows.
                        data+' world!'
                    );
                }
            );
			ipc.server.on(
				'socket.disconnected',
				function(socket, destroyedSocketID) {
					ipc.log('client ' + destroyedSocketID + ' has disconnected!');
				}
			);
        }
    );

    ipc.server.start();
```

#### Client für Unix Sockets & TCP Sockets

Der Client stellt eine Verbindung mit dem Serversocket für die Interprozesskommunikation her. Der Socket empfängt Ereignisse, die speziell an ihn gesendet werden, sowie Ereignisse, die vom Server auf dem Socket ausgestrahlt werden. Dies ist das einfachste Beispiel, das sowohl für lokale Unix-Sockets als auch für TCP-Sockets im lokalen oder Remotenetzwerk funktioniert.

```javascript
    var ipc=require('node-ipc');

    ipc.config.id   = 'hello';
    ipc.config.retry= 1500;

    ipc.connectTo(
        'world',
        function(){
            ipc.of.world.on(
                'connect',
                function(){
                    ipc.log('## connected to world ##'.rainbow, ipc.config.delay);
                    ipc.of.world.emit(
                        'message',  //any event or message type your server listens for
                        'hello'
                    )
                }
            );
            ipc.of.world.on(
                'disconnect',
                function(){
                    ipc.log('disconnected from world'.notice);
                }
            );
            ipc.of.world.on(
                'message',  //any event or message type your server listens for
                function(data){
                    ipc.log('got a message from world : '.debug, data);
                }
            );
        }
    );
```

#### Server & Client für UDP-Sockets

UDP-Sockets unterscheiden sich von Unix-, Windows- und TCP-Sockets, da sie an einen eindeutigen Port auf ihrem Computer gebunden sein müssen, um Nachrichten zu empfangen. Beispielsweise kann ein TCP-, Unix- oder Windows Socket-Client einfach eine Verbindung zu einem separaten TCP-, Unix- oder Windows Socket-Sever herstellen. Dieser Client kann dann Daten sowohl senden als auch empfangen, die daten auf dem Serverport oder -standort austauschen. UDP-Sockets können dies nicht tun. Sie müssen an einen Port gebunden werden, um Daten zu empfangen oder zu senden.  

Dies bedeutet, dass ein UDP-Client und ein UDP-Server identisch sind, da ein UDP-Socket über einen eigenen Port verfügen muss, um Daten zu empfangen, und nur ein Prozess kann diesen Port gleichzeitig verwenden. Es bedeutet auch, dass `emit` Oder `broadcast` Daten, an die der UDP-Server den Host und port des Sockets kennen muss, an den er die Daten übertragen möchte.

Dies ist das grundlegendste Beispiel, das sowohl für lokale als auch für Remote-UDP-Sockets funktioniert.

##### UDP Server 1 - "Welt"

```javascript
    var ipc=require('../../../node-ipc');

    ipc.config.id   = 'world';
    ipc.config.retry= 1500;

    ipc.serveNet(
        'udp4',
        function(){
            console.log(123);
            ipc.server.on(
                'message',
                function(data,socket){
                    ipc.log('got a message from '.debug, data.from.variable ,' : '.debug, data.message.variable);
                    ipc.server.emit(
                        socket,
                        'message',
                        {
                            from    : ipc.config.id,
                            message : data.message+' world!'
                        }
                    );
                }
            );

            console.log(ipc.server);
        }
    );

    ipc.server.start();
```

##### UDP Server 2 - "Hallo"

_Hinweis_ Wir haben den Port hier auf 8001 gesetzt, da der Weltserver bereits den Standard-ipc.config.networkPort von 8000 verwendet. Wir können uns also nicht an 8000 binden, während die Welt sie benutzt.

```javascript
    ipc.config.id   = 'hello';
    ipc.config.retry= 1500;

    ipc.serveNet(
        8001,
        'udp4',
        function(){
            ipc.server.on(
                'message',
                function(data){
                    ipc.log('got Data');
                    ipc.log('got a message from '.debug, data.from.variable ,' : '.debug, data.message.variable);
                }
            );
            ipc.server.emit(
                {
                    address : '127.0.0.1', //any hostname will work
                    port    : ipc.config.networkPort
                },
                'message',
                {
                    from    : ipc.config.id,
                    message : 'Hello'
                }
            );
        }
    );

    ipc.server.start();
```

#### Raw Buffer oder Binary Sockets

Binär- oder Puffersockets können mit einem der oben genannten Sockettypen verwendet werden, die Art und Weise, wie Datenereignisse emittieren, ist jedoch **_Etwas_** Verschieden. Diese können nützlich sein, wenn Sie mit eingebetteten Systemen oder C / C++-Prozessen arbeiten. Sie können sogar sicherstellen, dass c oder C++ Zeichenfolgentypisierung.

Beim Einrichten eines rawBuffer-Sockets müssen Sie ihn als solchen angeben:

```javascript
    ipc.config.rawBuffer=true;
```

Sie können auch den Codierungstyp angeben. Der Standardwert ist `utf8`

```javascript
    ipc.config.encoding='utf8';
```

Stringpuffer aussenden :

```javascript
    //server
    ipc.server.emit(
        socket,
        'hello'
    );

    //client
    ipc.of.world.emit(
        'hello'
    )
```

Byte-Array-Puffer emittieren :

```javascript
    //hex encoding may work best for this.
    ipc.config.encoding='hex';

    //server
    ipc.server.emit(
        socket,
        [10,20,30]
    );

    //client
    ipc.server.emit(
        [10,20,30]
    );
```

emit binären oder Hex-Array-Puffer, ist dies am besten für Echtzeit-Datenübertragung, insbesondere bei der Verbindung mit C- oder C++-Prozessen oder eingebetteten Systemen:

```javascript
    ipc.config.encoding='hex';

    //server
    ipc.server.emit(
        socket,
        [0x05,0x6d,0x5c]
    );

    //client
    ipc.server.emit(
        [0x05,0x6d,0x5c]
    );
```

Schreiben expliziter Puffer, Int-Typen, Doubles, Floats etc. sowie Big Endian- und Little-Endian-Daten in Rohpuffer, die bei der Verbindung mit C- oder C++-Prozessen oder eingebetteten Systemen nicht wertvoll sind (siehe ausführlichere Informationen zu Puffern sowie UInt, Int, Double etc. hier)[https://nodejs.org/api/buffer.html]&#x3A;

```javascript
    ipc.config.encoding='hex';

    //make a 6 byte buffer for example
    const myBuffer=new Buffer(6).fill(0);

    //fill the first 2 bytes with a 16 bit (2 byte) short unsigned int

    //write a UInt16 (2 byte or short) as Big Endian
    myBuffer.writeUInt16BE(
        2, //value to write
        0 //offset in bytes
    );
    //OR
    myBuffer.writeUInt16LE(0x2,0);
    //OR
    myBuffer.writeUInt16LE(0x02,0);

    //fill the remaining 4 bytes with a 32 bit (4 byte) long unsigned int

    //write a UInt32 (4 byte or long) as Big Endian
    myBuffer.writeUInt32BE(
        16772812, //value to write
        2 //offset in bytes
    );
    //OR
    myBuffer.writeUInt32BE(0xffeecc,0)

    //server
    ipc.server.emit(
        socket,
        myBuffer
    );

    //client
    ipc.server.emit(
        myBuffer
    );
```

#### Server mit dem `cluster` Modul

`node-ipc` kann mit Node.js' [Clustermodul](https://nodejs.org/api/cluster.html) , um die Möglichkeit zu bieten, mehrere Lesegeräte für einen einzelnen Socket zu haben.  Dazu müssen Sie lediglich die `unlink` Eigenschaft in der Konfiguration an `false` und achten Sie darauf, die Verknüpfung des Socketpfads im Masterprozess zu entlinken:

##### Server

```javascript
    const fs = require('fs');
    const ipc=require('../../../node-ipc');
    const cpuCount = require('os').cpus().length;
    const cluster = require('cluster');
    const socketPath = '/tmp/ipc.sock';

    ipc.config.unlink = false;

    if (cluster.isMaster) {
       if (fs.existsSync(socketPath)) {
           fs.unlinkSync(socketPath);
       }

       for (let i = 0; i < cpuCount; i++) {
           cluster.fork();
       }
    }else{
       ipc.serve(
         socketPath,
         function() {
           ipc.server.on(
             'currentDate',
             function(data,socket) {
               console.log(`pid ${process.pid} got: `, data);
             }
           );
         }
      );

      ipc.server.start();
      console.log(`pid ${process.pid} listening on ${socketPath}`);
    }
```

##### Kunde

```javascript
    const fs = require('fs');
    const ipc = require('../../node-ipc');

    const socketPath = '/tmp/ipc.sock';

    //loop forever so you can see the pid of the cluster sever change in the logs
    setInterval(
      function() {
        ipc.connectTo(
          'world',
          socketPath,
          connecting
         );
      },
      2000
    );

    function connecting(socket) {
      ipc.of.world.on(
        'connect',
        function() {
          ipc.of.world.emit(
            'currentDate',
            {
                 message: new Date().toISOString()
            }
          );
          ipc.disconnect('world');
        }
      );
    }
```

#### Lizenziert unter DBAD-Lizenz

Siehe die [DBAD-Lizenz](https://github.com/philsturgeon/dbad) in Ihrer Sprache oder in unserem [licence.md](https://github.com/RIAEvangelist/node-phidget-API/blob/master/license.md) Datei.
