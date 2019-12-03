# ノード-ipc

_ローカルおよびリモートのプロセス間通信用の nodejs モジュール_Linux、Mac、および Windows の完全なサポートを備えています。また、低レベルの unix ソケットや Windows ソケットから UDP、セキュア TLS ソケット、TCP ソケットまで、あらゆる形式のソケット通信をサポートします。

複雑なマルチプロセスのための優れたソリューション**ニューラルネットワーキング**ノード.JS内

**npm インストール ノード ipc**

#### NPM 統計

npm 情報:[ノード ipc の npm トレンドと統計情報を参照してください。](http://npm-stat.com/charts.html?package=node-ipc&author=&from=&to=)  
[![NPM](https://nodei.co/npm/node-ipc.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-ipc/)
[![Package Quality](http://npm.packagequality.com/badge/node-ipc.png)](http://packagequality.com/#?package=node-ipc)  
![node-ipc npm version](https://img.shields.io/npm/v/node-ipc.svg) ![supported node version for node-ipc](https://img.shields.io/node/v/node-ipc.svg) ![total npm downloads for node-ipc](https://img.shields.io/npm/dt/node-ipc.svg) ![monthly npm downloads for node-ipc](https://img.shields.io/npm/dm/node-ipc.svg) ![npm licence for node-ipc](https://img.shields.io/npm/l/node-ipc.svg)

[![RIAEvangelist](https://avatars3.githubusercontent.com/u/369041?v=3&s=100)](https://github.com/RIAEvangelist)

GitHub 情報 :  
![node-ipc GitHub Release](https://img.shields.io/github/release/RIAEvangelist/node-ipc.svg) ![GitHub license node-ipc license](https://img.shields.io/github/license/RIAEvangelist/node-ipc.svg) ![open issues for node-ipc on GitHub](https://img.shields.io/github/issues/RIAEvangelist/node-ipc.svg)

コーダシー情報:  
[![Codacy Badge](https://api.codacy.com/project/badge/grade/8e0294dff55f4ac1985c07b16f39d0a9)](https://www.codacy.com/app/RIAEvangelist/node-ipc) [![Codacy Badge](https://api.codacy.com/project/badge/coverage/8e0294dff55f4ac1985c07b16f39d0a9)](https://www.codacy.com/app/RIAEvangelist/node-ipc)

ビルド情報 :  
マックとLinux :[![Build Status](https://travis-ci.org/RIAEvangelist/node-ipc.svg?branch=master)](https://travis-ci.org/RIAEvangelist/node-ipc)Windows：[![node-ipc windows build status](https://ci.appveyor.com/api/projects/status/github/riaevangelist/node-ipc?branch=master&svg=true)](https://ci.appveyor.com/project/RIAEvangelist/node-ipc/history)

パッケージの詳細のウェブサイト:

-   [GitHub.io サイト](http://riaevangelist.github.io/node-ipc/ "node-ipc documentation").このサイトの最もきれいなバージョン。
-   [NPM モジュール](https://www.npmjs.org/package/node-ipc "node-ipc npm module").ノード ipc モジュールの npm ページ。

この作品は、[DBAD パブリック ライセンス](http://www.dbad-license.org/).

#### ノードの古いバージョン

の最新バージョン`node-ipc`は --harmony フラグで動作する可能性があります。しかし、正式には、ノード v4 以降は es5 および es6 でサポートされています。

#### テスト

`npm test`ノード ipc の istanbul でジャスミン テストを実行し、spec フォルダーにカバレッジ レポートを生成します。

ジャスミンとイスタンブールをグローバルにインストールすると、`sudo npm install -g jasmine istanbul`

* * *

#### 内容

1.  [IPC ソケットとサポート OS の種類](#types-of-ipc-sockets)
2.  [IPC Config](#ipc-config)
3.  [IPC メソッド](#ipc-methods)
    1.  [ログ](#log)
    2.  [接続先](#connectto)
    3.  [接続先ネット](#connecttonet)
    4.  [切断](#disconnect)
    5.  [提供](#serve)
    6.  [サーブネット](#servenet)
4.  [IPC ストアと既定の変数](#ipc-stores-and-default-variables)
5.  [IPC イベント](#ipc-events)
6.  [複数の IPC インスタンス](#multiple-ipc-instances)
7.  [基本的な例](#basic-examples)
    1.  [Unix 用サーバー||Windows ソケットと TCP ソケット](#server-for-unix-sockets--tcp-sockets)
    2.  [Unix 用クライアント||Windows ソケットと TCP ソケット](#client-for-unix-sockets--tcp-sockets)
    3.  [UDP ソケットのサーバーとクライアント](#server--client-for-udp-sockets)
    4.  [生バッファ、リアルタイムおよび/またはバイナリソケット](#raw-buffer-or-binary-sockets)
8.  [TLS/SSL ソケット サーバーとクライアントの操作](https://github.com/RIAEvangelist/node-ipc/tree/master/example/TLSSocket)
9.  [ノード コードの例](https://github.com/RIAEvangelist/node-ipc/tree/master/example)

* * *

#### IPC ソケットの種類

| 型                         | 安定 性 | 定義                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unix ソケットまたは Windows ソケット | 安定   | Linux、Mac、および Windows の高速通信を提供し、オーバーヘッドと遅延を減らすためにネットワーク カードを回避します。[ローカル Unix と Windows ソケットの例](https://github.com/RIAEvangelist/node-ipc/tree/master/example/unixWindowsSocket/ "Unix and Windows Socket Node IPC examples")                                                                                                                                                                                |
| TCP ソケット                  | 安定   | ネットワーク全体で最も信頼性の高い通信を提供します。ローカル IPC にも使用できますが、TCP ソケットはネットワーク カードを通過するため、#1の Unix ソケット実装よりも低速ですが、Unix ソケットと Windows ソケットは使用できません。[ローカルまたはリモート・ネットワークの TCP ソケットの例](https://github.com/RIAEvangelist/node-ipc/tree/master/example/TCPSocket/ "TCP Socket Node IPC examples")                                                                                                                                   |
| TLS ソケット                  | 安定   | SSL 経由で構成可能で安全なネットワーク ソケット。https と同等です。[TLS/SSL ドキュメント](https://github.com/RIAEvangelist/node-ipc/tree/master/example/TLSSocket)                                                                                                                                                                                                                                                                            |
| UDP ソケット                  | 安定   | を与える**最速のネットワーク通信**.UDP は信頼性は低くなりますが、TCP よりもはるかに高速です。ネットワーク接続やその他の要因に応じてパケットをドロップできるため、サウンド、ビデオ、マルチプレイヤー ゲーム データなどの重要でないデータのストリーミングに最適です。UDP はローカル IPC にも使用できますが、UDP ソケットはネットワーク カードを通過するため、#1の Unix ソケットや Windows ソケットの実装よりも低速ですが、Unix ソケットと Windows ソケットは使用しません。[ローカルまたはリモート・ネットワークの UDP ソケットの例](https://github.com/RIAEvangelist/node-ipc/tree/master/example/UDPSocket/ "UDP Socket Node IPC examples") |

| ザ     | サポートされるソケット                |
| ----- | -------------------------- |
| Linux | Unix, Posix, TCP, TLS, UDP |
| Mac   | Unix, Posix, TCP, TLS, UDP |
| 勝つ    | ウィンドウ、TCP、TLS、UDP          |

* * *

#### IPC Config

`ipc.config`  

これらの変数は、`ipc.config`スコープを使用して、既定値を上書きまたは設定します。

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
        unlink          : true,
        interfaces      : {
            localAddress: false,
            localPort   : false,
            family      : false,
            hints       : false,
            lookup      : false
        }
    }
```

| 変数         | ドキュメント                                                                                                                                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| アプリスペース    | Unix ソケット (Unix ドメイン ソケット) の名前間隔に使用されます。特に設定されていない場合、Unix ドメインソケットは socketRoot、アプリケーションスペース、およびIDを組み合わせて、作成またはバインディング用の Unix ソケットパスを形成します。これは、システム上で多数のアプリが実行されている場合、同じ ID を持つ複数のソケットがある場合がありますが、appspace を変更しても、アプリ仕様の一意のソケットが残ります。 |
| ソケットルート    | Unix ソケットを作成またはバインドするディレクトリ                                                                                                                                                                                                          |
| Id         | このソケットまたはサービスの ID                                                                                                                                                                                                                    |
| ネットワークホスト  | TCP、TLS、または UDP ソケットが接続するローカル ホストまたはリモート ホスト                                                                                                                                                                                         |
| ネットワークポート  | TCP、TLS、または UDP ソケットが接続するデフォルト ポート                                                                                                                                                                                                   |
| エンコーディング   | ソケットで送信されるデータの既定のエンコーディング。主に rawBuffer が true に設定されている場合に使用されます。有効な値は次のとおりです。`ascii` `utf8` `utf16le` `ucs2` `base64` `hex`.                                                                                                         |
| 生バッファ      | true の場合、データは未加工のノードとして送受信されます。`Buffer` **じゃない**an`Object`を JSON として使用します。これはバイナリまたは 16 進数の IPC に最適で、C や C++ などの言語で他のプロセスと通信する場合に適しています。                                                                                             |
| 区切り 記号     | 各データ パケットの末尾の区切り記号。                                                                                                                                                                                                                  |
| 同期         | 同期要求。クライアントは、サーバーが応答するまで新しい要求を送信しません。                                                                                                                                                                                                |
| サイレント      | \[オン/オフ ログのオン/オフ] の既定値は False で、ログがオンであることを意味します                                                                                                                                                                                     |
| ログインカラー    | ipc.log の色をオン/オフにする                                                                                                                                                                                                                  |
| ログの深さ      | ipc.log 中に util.inspect の深さを設定する                                                                                                                                                                                                     |
| ロガー        | ipc.log から出力を受け取る関数。単一の文字列引数を受け取る必要があります                                                                                                                                                                                             |
| マックスコネクション | これは、ソケットに許可される接続の最大数です。現在は Unix ソケットでのみ設定されています。その他のソケット・タイプは、システム・デフォルトを使用しています。                                                                                                                                                    |
| 再試行        | これは、接続が失われた場合にクライアントがサーバーへの再接続を試行するまでに待機する時間 (ミリ秒単位) です。これは、Unix ソケットや TCP ソケットなどのクライアント サーバー関係を持たないため、UDP ソケットには影響しません。                                                                                                             |
| 最大再再試行     | 設定されている場合は、切断後の最大再試行回数を表します。                                                                                                                                                                                                         |
| 停止再試み      | デフォルトは false で、クライアントは再試行間隔で無期限にサーバーへの接続を再試行し続けます。任意の数に設定すると、切断のたびにその数を超えると、クライアントは再試行を停止します。リアルタイムで true に設定すると、maxRetries に関係なく、接続の試行が直ちに停止します。0 に設定すると、クライアントは**_じゃない_**再接続を試みます。                                                 |
| 解除         | デフォルトは true で、モジュールが起動前に IPC ソケットを削除する処理を行うことを意味します。 使用する場合`node-ipc`同じソケット上に複数のリスナーが存在するクラスタ環境では、これを`false`次に、独自のコードでソケットを削除します。                                                                                                    |
| インターフェイス   | 主に、クライアントが接続するインターフェイスを指定するときに使用されます。を参照してください。[ノード.js API のドキュメントを接続する](https://nodejs.org/api/net.html#net_socket_connect_options_connectlistener)                                                                                 |

* * *

#### IPC メソッド

これらのメソッドは、IPC スコープで使用できます。

* * *

##### ログ

`ipc.log(a,b,c,d,e...);`  

ipc.log は任意の数の引数を受け入れ、次の場合`ipc.config.silent`が設定されていない場合は、すべてのスペースを 1 つのスペースで連結し、コンソールに記録します。ipc.config.silent が設定されている場合、連結が発生するのを防ぐため、これは高速です。`true`.この方法では、ログをそのままにしておくと、パフォーマンスにほとんど影響を与えないでください。

ログは util.inspect を使用します カラー、ログの深さ、および宛先にログインする必要があるかどうかを制御できます。`ipc.config`

```javascript
    ipc.config.logInColor=true; //default
    ipc.config.logDepth=5; //default    
    ipc.config.logger=console.log.bind(console); // default
```

* * *

##### 接続先

`ipc.connectTo(id,path,callback);`  

クライアントとしてローカル Unix ソケットおよび Windows ソケットに接続するために使用されます。**_これは、同じマシン上のプロセスが通信するための最速の方法です。_**TCP と UDP の両方が使用する必要があるネットワーク カードをバイパスするためです。

| 変数     | 必須    | 定義                                                                                                                                                      |
| ------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Id     | 必須    | は、接続されているソケットの文字列 ID です。この ID を持つソケットは、作成時に ipc.of オブジェクトに追加されます。                                                                                       |
| パス     | オプション | は Unix ドメインソケットファイルのパスであり、システムがWindowsの場合、これは自動的にUnixドメインソケットファイルと同じ情報を持つ適切なパイプに変換されます。設定しない場合、デフォルトは`ipc.config.socketRoot`+`ipc.config.appspace`+`id` |
| コールバック | オプション | これは、ソケットが作成されたときに実行する関数です。                                                                                                                              |

**例**引数は、まだ順番に並んでいる限り省略できます。

```javascript
    ipc.connectTo('world');
```

または ID とコールバックのみを使用する

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

またはパスを明示的に設定する

```javascript
    ipc.connectTo(
        'world',
        'myapp.world'
    );
```

またはコールバックを使用してパスを明示的に設定する

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

##### 接続先ネット

`ipc.connectToNet(id,host,port,callback)`  

クライアントとして TCP に接続するために使用します。[TLS ソケット](https://github.com/RIAEvangelist/node-ipc/tree/master/example/TLSSocket)ネットワークカードを介して。これはローカルでもリモートでもかまいませんが、ローカルの場合は、Unix および Windows ソケットの実装を使用することをお勧めします。`connectTo`ネットワークカードを完全に回避するので、その代わりにはるかに高速です。

TLS ソケットおよび SSL ソケットについては、[ノード ipc TLS および SSL ドキュメント](https://github.com/RIAEvangelist/node-ipc/tree/master/example/TLSSocket).彼らはいくつかの追加の要件を持っており、知っておくべきことがあるので、独自のドキュメントを持っています。

| 変数     | 必須    | 定義                                                                                           |
| ------ | ----- | -------------------------------------------------------------------------------------------- |
| Id     | 必須    | は、接続されているソケットの文字列 ID です。TCP および TLS ソケットの場合、この ID は`ipc.of`ソケットへの参照を使用してソケットが作成されるときのオブジェクト。 |
| ホスト    | オプション | は、TCP ソケットまたは TLS ソケットが存在するホストです。 これはデフォルトで `ipc.config.networkHost`指定しない場合。                 |
| ポート    | オプション | TCP ソケットまたは TLS ソケットが存在するポート。                                                                |
| コールバック | オプション | これは、ソケットが作成されたときに実行する関数です。                                                                   |

**例**引数は、まだ順番に並んでいる限り省略できます。  
したがって、デフォルトは: (id、ホスト、ポート、コールバック) ですが、以下の例はまだ(ID、ポート、コールバック)、または(ID、ホスト、コールバック)または(id,port)などで動作します。

```javascript
    ipc.connectToNet('world');
```

または ID とコールバックのみを使用する

```javascript
    ipc.connectToNet(
        'world',
        function(){
            ...
        }
    );
```

またはホストとパスを明示的に設定する

```javascript
    ipc.connectToNet(
        'world',
        'myapp.com',serve(path,callback)
        3435
    );
```

またはポートとコールバックのみを明示的に設定する

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

##### 切断

`ipc.disconnect(id)`  

Unix、Windows、TCP、または TLS ソケットからクライアントを切断するために使用します。ソケットとその屈折はメモリから削除され、`ipc.of`スコープ。これは、ローカルでもリモートでもかまいません。UDP クライアントは接続を維持するため、クライアントはなく、このメソッドには値がありません。

| 変数  | 必須  | 定義                    |
| --- | --- | --------------------- |
| Id  | 必須  | は、切断元のソケットの文字列 ID です。 |

**例**

```javascript
    ipc.disconnect('world');
```

* * *

##### 提供

`ipc.serve(path,callback);`  

クライアントがバインドできるローカル Unix ソケット サーバーまたは Windows ソケット サーバーを作成するために使用します。サーバーは、`emit`特定のクライアント ソケットへのイベント、または`broadcast`すべての既知のクライアント ソケットへのイベント。

| 変数     | 必須    | 定義                                                                                                                                                                |
| ------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| パス     | オプション | これは Unix ドメイン ソケット ファイルのパスであり、システムが Windows の場合、これは自動的に Unix ドメイン ソケット ファイルと同じ情報を持つ適切なパイプに変換されます。設定しない場合、デフォルトは`ipc.config.socketRoot`+`ipc.config.appspace`+`id` |
| コールバック | オプション | これは、サーバーの起動後に呼び出される関数です。これは、イベントを start イベントにバインドして、次のようにすることもできます。`ipc.server.on('start',function(){});`                                                         |

**_例_**引数は、まだ順番に並んでいる限り省略できます。

```javascript
    ipc.serve();
```

またはコールバックの指定

```javascript
    ipc.serve(
        function(){...}
    );
```

またはパスを指定します

```javascript
    ipc.serve(
        '/tmp/myapp.myservice'
    );
```

またはすべてを指定する

```javascript
    ipc.serve(
        '/tmp/myapp.myservice',
        function(){...}
    );
```

* * *

##### サーブネット

`serveNet(host,port,UDPType,callback)`

クライアントがバインドできる TCP、TLS、または UDP ソケット サーバー、または他のサーバーがデータを送信できるサーバーを作成するために使用します。サーバーは、`emit`特定のクライアント ソケットへのイベント、または`broadcast`すべての既知のクライアント ソケットへのイベント。

| 変数      | 必須    | 定義                                                                                                                       |
| ------- | ----- | ------------------------------------------------------------------------------------------------------------------------ |
| ホスト     | オプション | 指定しない場合、デフォルトは os.networkInterfaces() の最初のアドレスになります。TCP、TLS および UDP サーバーの場合、これは 127.0.0.1 または ::1 になる可能性が最も高くなります。       |
| ポート     | オプション | TCP、UDP、または TLS ソケット・サーバーがバインドされるポートは、指定されていない場合、デフォルトは 8000 です。                                                         |
| UDPType | オプション | これを設定すると、サーバーが UDP ソケットとして作成されます。'udp4' または 'udp6' は有効な値です。デフォルトでは設定されません。udp6 を使用する場合は、次のように有効な IPv6 ホストを指定してください。`::1` |
| コールバック  | オプション | サーバーの作成時に呼び出される関数                                                                                                        |

**_例_**引数は、まだ順番に並んでいる限り省略できます。

既定の TCP サーバー

```javascript
    ipc.serveNet();
```

既定の udp サーバー

```javascript
    ipc.serveNet('udp4');
```

またはコールバックを使用して TCP サーバーを指定する

```javascript
    ipc.serveNet(
        function(){...}
    );
```

またはコールバックを使用して UDP サーバーを指定する

```javascript
    ipc.serveNet(
        'udp4',
        function(){...}
    );
```

またはポートを指定します

```javascript
    ipc.serveNet(
        3435
    );
```

またはすべての TCP を指定します。

```javascript
    ipc.serveNet(
        'MyMostAwesomeApp.com',
        3435,
        function(){...}
    );
```

またはすべてを指定する UDP

```javascript
    ipc.serveNet(
        'MyMostAwesomeApp.com',
        3435,
        'udp4',
        function(){...}
    );
```

* * *

### IPC ストアと既定の変数

| 変数         | 定義                                                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| ipc.of     | これは、ソケット接続の屈折がクライアントとしてクライアントとして接続されるときに格納される場所です。`ipc.connectTo`または`iupc.connectToNet`.これらは、それらを作成するために使用されるIDに基づいて格納されます, 例: ipc.of.mySocket |
| ipc.server | これは、`ipc.serve`または`ipc.serveNet`                                                                                                               |

* * *

### IPC サーバー メソッド

| メソッド | 定義                                                  |
| ---- | --------------------------------------------------- |
| 開始   | 呼び出す必要性を提供し始める`serve`または`serveNet`最初にサーバーをセットアップします |
| 停止   | サーバーを閉じて、サービスを停止する                                  |

* * *

### IPC イベント

| イベント名         | Params         | 定義                                                                                                    |
| ------------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| エラー           | err obj        | エラーが発生したときにトリガーされる                                                                                    |
| 接続            |                | ソケットが接続されたときにトリガーされる                                                                                  |
| 切断            |                | ソケットがサーバーから切断されたときにクライアントによってトリガーされる                                                                  |
| ソケット.切断       | ソケット破棄ソケット ID  | クライアント ソケットが切断されたときにサーバーによってトリガーされる                                                                   |
| 破壊            |                | ソケットが完全に破棄されたときにトリガーされ、それ以上の自動再試行は行われず、すべての参照が失われます。                                                  |
| データ           | バッファー          | ipc.config.rawBuffer が true でメッセージを受信したときにトリガーされます。                                                   |
| **_イベントの種類_** | **_イベント データ_** | JSON メッセージの受信時にトリガーされます。イベント名はメッセージの型文字列になり、パラメータはメッセージのデータオブジェクトになります。`{ type:'myEvent',data:{a:1}}` |
|               |                |                                                                                                       |

### 複数の IPC インスタンス

場合によっては、node-ipc の明示的で独立したインスタンスが必要になることがあります。このようなシナリオのためだけに、IPC シングルトンのコア IPC クラスを公開しました。

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

### 基本的な例

あなたは見つけることができます[高度な例](https://github.com/RIAEvangelist/node-ipc/tree/master/example)をクリックします。例では、マルチクライアントの例を含むより複雑なデモを見つけることができます。

#### Unix ソケット、Windows ソケット、および TCP ソケット用サーバー

サーバーは、IPC 用のソケットを開いたままにするプロセスです。複数のソケットがこのサーバーに接続して通信できます。また、すべてのクライアントにブロードキャストしたり、特定のクライアントに出力したりすることもできます。これは、ローカル Unix および Windows ソケット、およびローカルまたはリモート ネットワークの TCP ソケットで動作する最も基本的な例です。

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

#### Unix ソケットおよび TCP ソケット用クライアント

クライアントは、プロセス間通信のためにサーバー ソケットに接続します。ソケットは、特に出力されたイベントと、サーバーによってソケット上でブロードキャストされるイベントを受け取ります。これは、ローカル Unix ソケットとローカルまたはリモートネットワークの両方のTCPソケットで動作する最も基本的な例です。

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

#### UDP ソケットのサーバーとクライアント

UDP ソケットは、メッセージを受信するにはマシン上の一意のポートにバインドする必要があるため、Unix、Windows、および TCP ソケットとは異なります。たとえば、TCP、Unix、または Windows ソケット クライアントは、別の TCP、Unix、または Windows ソケット サーバーに接続するだけで異なる場合があります。その後、そのクライアントは、サーバーのポートまたは場所で送受信データを交換できます。UDP ソケットはこれを行うことができます。データを送受信するには、ポートにバインドする必要があります。 

つまり、UDP クライアントとサーバーは、データを受信するために UDP ソケットがデータを受信するための独自のポートを持つ必要があり、一度にこのポートを使用できるプロセスは 1 つだけであるため、同じことです。それはまた、次のことを意味します。`emit`または`broadcast`データをブロードキャストする UDP サーバは、データのブロードキャストを行うソケットのホストとポートを知る必要があります。

これは、ローカルソケットとリモートUDPソケットの両方で動作する最も基本的な例です。

##### UDP サーバー 1 - "世界"

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

##### UDP サーバー 2 - "こんにちは"

_メモ_ワールド サーバーが既に既定の ipc.config.networkPort 8000 を使用しているため、ここでポートを 8001 に設定します。だから、世界がそれを使用している間、私たちは8000にバインドすることはできません。

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

#### 生バッファまたはバイナリソケット

バイナリ ソケットまたは Buffer ソケットは、上記のソケットタイプのいずれでも使用できますが、データイベントの出力方法は次のとおりです。**_微妙に_**異なる。これらは、組み込みシステムまたは C/ C++ プロセスを使用する場合に便利です。C または C++ の文字列型指定と一致するようにすることもできます。

rawBuffer ソケットを設定する場合は、次のように指定する必要があります。

```javascript
    ipc.config.rawBuffer=true;
```

エンコードの種類を指定することもできます。デフォルトは`utf8`

```javascript
    ipc.config.encoding='utf8';
```

出力文字列バッファ :

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

出力バイト配列バッファ :

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

バイナリまたは 16 進配列バッファを出力する場合は、リアルタイムのデータ転送、特に C または C++ プロセス、または組み込みシステムに接続する whan に最適です。

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

明示的なバッファ、int型、倍精度浮動小数点数、浮動小数点数などを書き込み、C または C++ プロセス、または組み込みシステムに接続する際に、ビッグ エンディアンとリトル エンディアンのデータを生のバッファに書き込みます (バッファーに関する詳細情報と UInt、Int、double など)[https://nodejs.org/api/buffer.html]&#x3A;

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

#### を持つサーバー`cluster`モジュール

`node-ipc`Node.js' と共に使用できます。[クラスタ モジュール](https://nodejs.org/api/cluster.html)単一のソケットに対して複数のリーダーを持つ機能を提供します。 これを行うには、単に設定する必要があります`unlink`構成内のプロパティ`false`マスタープロセスでソケットパスのリンクを解除します。

##### サーバー

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

##### クライアント

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

#### DBAD ライセンスの下でライセンス

を参照してください。[DBAD ライセンス](https://github.com/philsturgeon/dbad)あなたの言語または私たちの言語で[licence.md](https://github.com/RIAEvangelist/node-phidget-API/blob/master/license.md)ファイル。
# ノード-ipc

_ローカルおよびリモートのプロセス間通信用の nodejs モジュール_Linux、Mac、および Windows の完全なサポートを備えています。また、低レベルの unix ソケットや Windows ソケットから UDP、セキュア TLS ソケット、TCP ソケットまで、あらゆる形式のソケット通信をサポートします。

複雑なマルチプロセスのための優れたソリューション**ニューラルネットワーキング**ノード.JS内

**npm インストール ノード ipc**

#### NPM 統計

npm 情報:[ノード ipc の npm トレンドと統計情報を参照してください。](http://npm-stat.com/charts.html?package=node-ipc&author=&from=&to=)  
[![NPM](https://nodei.co/npm/node-ipc.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-ipc/)
[![Package Quality](http://npm.packagequality.com/badge/node-ipc.png)](http://packagequality.com/#?package=node-ipc)  
![node-ipc npm version](https://img.shields.io/npm/v/node-ipc.svg) ![supported node version for node-ipc](https://img.shields.io/node/v/node-ipc.svg) ![total npm downloads for node-ipc](https://img.shields.io/npm/dt/node-ipc.svg) ![monthly npm downloads for node-ipc](https://img.shields.io/npm/dm/node-ipc.svg) ![npm licence for node-ipc](https://img.shields.io/npm/l/node-ipc.svg)

[![RIAEvangelist](https://avatars3.githubusercontent.com/u/369041?v=3&s=100)](https://github.com/RIAEvangelist)

GitHub 情報 :  
![node-ipc GitHub Release](https://img.shields.io/github/release/RIAEvangelist/node-ipc.svg) ![GitHub license node-ipc license](https://img.shields.io/github/license/RIAEvangelist/node-ipc.svg) ![open issues for node-ipc on GitHub](https://img.shields.io/github/issues/RIAEvangelist/node-ipc.svg)

コーダシー情報:  
[![Codacy Badge](https://api.codacy.com/project/badge/grade/8e0294dff55f4ac1985c07b16f39d0a9)](https://www.codacy.com/app/RIAEvangelist/node-ipc) [![Codacy Badge](https://api.codacy.com/project/badge/coverage/8e0294dff55f4ac1985c07b16f39d0a9)](https://www.codacy.com/app/RIAEvangelist/node-ipc)

ビルド情報 :  
マックとLinux :[![Build Status](https://travis-ci.org/RIAEvangelist/node-ipc.svg?branch=master)](https://travis-ci.org/RIAEvangelist/node-ipc)Windows：[![node-ipc windows build status](https://ci.appveyor.com/api/projects/status/github/riaevangelist/node-ipc?branch=master&svg=true)](https://ci.appveyor.com/project/RIAEvangelist/node-ipc/history)

パッケージの詳細のウェブサイト:

-   [GitHub.io サイト](http://riaevangelist.github.io/node-ipc/ "node-ipc documentation").このサイトの最もきれいなバージョン。
-   [NPM モジュール](https://www.npmjs.org/package/node-ipc "node-ipc npm module").ノード ipc モジュールの npm ページ。

この作品は、[DBAD パブリック ライセンス](http://www.dbad-license.org/).

#### ノードの古いバージョン

の最新バージョン`node-ipc`は --harmony フラグで動作する可能性があります。しかし、正式には、ノード v4 以降は es5 および es6 でサポートされています。

#### テスト

`npm test`ノード ipc の istanbul でジャスミン テストを実行し、spec フォルダーにカバレッジ レポートを生成します。

ジャスミンとイスタンブールをグローバルにインストールすると、`sudo npm install -g jasmine istanbul`

* * *

#### 内容

1.  [IPC ソケットとサポート OS の種類](#types-of-ipc-sockets)
2.  [IPC Config](#ipc-config)
3.  [IPC メソッド](#ipc-methods)
    1.  [ログ](#log)
    2.  [接続先](#connectto)
    3.  [接続先ネット](#connecttonet)
    4.  [切断](#disconnect)
    5.  [提供](#serve)
    6.  [サーブネット](#servenet)
4.  [IPC ストアと既定の変数](#ipc-stores-and-default-variables)
5.  [IPC イベント](#ipc-events)
6.  [複数の IPC インスタンス](#multiple-ipc-instances)
7.  [基本的な例](#basic-examples)
    1.  [Unix 用サーバー||Windows ソケットと TCP ソケット](#server-for-unix-sockets--tcp-sockets)
    2.  [Unix 用クライアント||Windows ソケットと TCP ソケット](#client-for-unix-sockets--tcp-sockets)
    3.  [UDP ソケットのサーバーとクライアント](#server--client-for-udp-sockets)
    4.  [生バッファ、リアルタイムおよび/またはバイナリソケット](#raw-buffer-or-binary-sockets)
8.  [TLS/SSL ソケット サーバーとクライアントの操作](https://github.com/RIAEvangelist/node-ipc/tree/master/example/TLSSocket)
9.  [ノード コードの例](https://github.com/RIAEvangelist/node-ipc/tree/master/example)

* * *

#### IPC ソケットの種類

| 型                         | 安定 性 | 定義                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unix ソケットまたは Windows ソケット | 安定   | Linux、Mac、および Windows の高速通信を提供し、オーバーヘッドと遅延を減らすためにネットワーク カードを回避します。[ローカル Unix と Windows ソケットの例](https://github.com/RIAEvangelist/node-ipc/tree/master/example/unixWindowsSocket/ "Unix and Windows Socket Node IPC examples")                                                                                                                                                                                |
| TCP ソケット                  | 安定   | ネットワーク全体で最も信頼性の高い通信を提供します。ローカル IPC にも使用できますが、TCP ソケットはネットワーク カードを通過するため、#1の Unix ソケット実装よりも低速ですが、Unix ソケットと Windows ソケットは使用できません。[ローカルまたはリモート・ネットワークの TCP ソケットの例](https://github.com/RIAEvangelist/node-ipc/tree/master/example/TCPSocket/ "TCP Socket Node IPC examples")                                                                                                                                   |
| TLS ソケット                  | 安定   | SSL 経由で構成可能で安全なネットワーク ソケット。https と同等です。[TLS/SSL ドキュメント](https://github.com/RIAEvangelist/node-ipc/tree/master/example/TLSSocket)                                                                                                                                                                                                                                                                            |
| UDP ソケット                  | 安定   | を与える**最速のネットワーク通信**.UDP は信頼性は低くなりますが、TCP よりもはるかに高速です。ネットワーク接続やその他の要因に応じてパケットをドロップできるため、サウンド、ビデオ、マルチプレイヤー ゲーム データなどの重要でないデータのストリーミングに最適です。UDP はローカル IPC にも使用できますが、UDP ソケットはネットワーク カードを通過するため、#1の Unix ソケットや Windows ソケットの実装よりも低速ですが、Unix ソケットと Windows ソケットは使用しません。[ローカルまたはリモート・ネットワークの UDP ソケットの例](https://github.com/RIAEvangelist/node-ipc/tree/master/example/UDPSocket/ "UDP Socket Node IPC examples") |

| ザ     | サポートされるソケット                |
| ----- | -------------------------- |
| Linux | Unix, Posix, TCP, TLS, UDP |
| Mac   | Unix, Posix, TCP, TLS, UDP |
| 勝つ    | ウィンドウ、TCP、TLS、UDP          |

* * *

#### IPC Config

`ipc.config`  

これらの変数は、`ipc.config`スコープを使用して、既定値を上書きまたは設定します。

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
        unlink          : true,
        interfaces      : {
            localAddress: false,
            localPort   : false,
            family      : false,
            hints       : false,
            lookup      : false
        }
    }
```

| 変数         | ドキュメント                                                                                                                                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| アプリスペース    | Unix ソケット (Unix ドメイン ソケット) の名前間隔に使用されます。特に設定されていない場合、Unix ドメインソケットは socketRoot、アプリケーションスペース、およびIDを組み合わせて、作成またはバインディング用の Unix ソケットパスを形成します。これは、システム上で多数のアプリが実行されている場合、同じ ID を持つ複数のソケットがある場合がありますが、appspace を変更しても、アプリ仕様の一意のソケットが残ります。 |
| ソケットルート    | Unix ソケットを作成またはバインドするディレクトリ                                                                                                                                                                                                          |
| Id         | このソケットまたはサービスの ID                                                                                                                                                                                                                    |
| ネットワークホスト  | TCP、TLS、または UDP ソケットが接続するローカル ホストまたはリモート ホスト                                                                                                                                                                                         |
| ネットワークポート  | TCP、TLS、または UDP ソケットが接続するデフォルト ポート                                                                                                                                                                                                   |
| エンコーディング   | ソケットで送信されるデータの既定のエンコーディング。主に rawBuffer が true に設定されている場合に使用されます。有効な値は次のとおりです。`ascii` `utf8` `utf16le` `ucs2` `base64` `hex`.                                                                                                         |
| 生バッファ      | true の場合、データは未加工のノードとして送受信されます。`Buffer` **じゃない**an`Object`を JSON として使用します。これはバイナリまたは 16 進数の IPC に最適で、C や C++ などの言語で他のプロセスと通信する場合に適しています。                                                                                             |
| 区切り 記号     | 各データ パケットの末尾の区切り記号。                                                                                                                                                                                                                  |
| 同期         | 同期要求。クライアントは、サーバーが応答するまで新しい要求を送信しません。                                                                                                                                                                                                |
| サイレント      | \[オン/オフ ログのオン/オフ] の既定値は False で、ログがオンであることを意味します                                                                                                                                                                                     |
| ログインカラー    | ipc.log の色をオン/オフにする                                                                                                                                                                                                                  |
| ログの深さ      | ipc.log 中に util.inspect の深さを設定する                                                                                                                                                                                                     |
| ロガー        | ipc.log から出力を受け取る関数。単一の文字列引数を受け取る必要があります                                                                                                                                                                                             |
| マックスコネクション | これは、ソケットに許可される接続の最大数です。現在は Unix ソケットでのみ設定されています。その他のソケット・タイプは、システム・デフォルトを使用しています。                                                                                                                                                    |
| 再試行        | これは、接続が失われた場合にクライアントがサーバーへの再接続を試行するまでに待機する時間 (ミリ秒単位) です。これは、Unix ソケットや TCP ソケットなどのクライアント サーバー関係を持たないため、UDP ソケットには影響しません。                                                                                                             |
| 最大再再試行     | 設定されている場合は、切断後の最大再試行回数を表します。                                                                                                                                                                                                         |
| 停止再試み      | デフォルトは false で、クライアントは再試行間隔で無期限にサーバーへの接続を再試行し続けます。任意の数に設定すると、切断のたびにその数を超えると、クライアントは再試行を停止します。リアルタイムで true に設定すると、maxRetries に関係なく、接続の試行が直ちに停止します。0 に設定すると、クライアントは**_じゃない_**再接続を試みます。                                                 |
| 解除         | デフォルトは true で、モジュールが起動前に IPC ソケットを削除する処理を行うことを意味します。 使用する場合`node-ipc`同じソケット上に複数のリスナーが存在するクラスタ環境では、これを`false`次に、独自のコードでソケットを削除します。                                                                                                    |
| インターフェイス   | 主に、クライアントが接続するインターフェイスを指定するときに使用されます。を参照してください。[ノード.js API のドキュメントを接続する](https://nodejs.org/api/net.html#net_socket_connect_options_connectlistener)                                                                                 |

* * *

#### IPC メソッド

これらのメソッドは、IPC スコープで使用できます。

* * *

##### ログ

`ipc.log(a,b,c,d,e...);`  

ipc.log は任意の数の引数を受け入れ、次の場合`ipc.config.silent`が設定されていない場合は、すべてのスペースを 1 つのスペースで連結し、コンソールに記録します。ipc.config.silent が設定されている場合、連結が発生するのを防ぐため、これは高速です。`true`.この方法では、ログをそのままにしておくと、パフォーマンスにほとんど影響を与えないでください。

ログは util.inspect を使用します カラー、ログの深さ、および宛先にログインする必要があるかどうかを制御できます。`ipc.config`

```javascript
    ipc.config.logInColor=true; //default
    ipc.config.logDepth=5; //default    
    ipc.config.logger=console.log.bind(console); // default
```

* * *

##### 接続先

`ipc.connectTo(id,path,callback);`  

クライアントとしてローカル Unix ソケットおよび Windows ソケットに接続するために使用されます。**_これは、同じマシン上のプロセスが通信するための最速の方法です。_**TCP と UDP の両方が使用する必要があるネットワーク カードをバイパスするためです。

| 変数     | 必須    | 定義                                                                                                                                                      |
| ------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Id     | 必須    | は、接続されているソケットの文字列 ID です。この ID を持つソケットは、作成時に ipc.of オブジェクトに追加されます。                                                                                       |
| パス     | オプション | は Unix ドメインソケットファイルのパスであり、システムがWindowsの場合、これは自動的にUnixドメインソケットファイルと同じ情報を持つ適切なパイプに変換されます。設定しない場合、デフォルトは`ipc.config.socketRoot`+`ipc.config.appspace`+`id` |
| コールバック | オプション | これは、ソケットが作成されたときに実行する関数です。                                                                                                                              |

**例**引数は、まだ順番に並んでいる限り省略できます。

```javascript
    ipc.connectTo('world');
```

または ID とコールバックのみを使用する

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

またはパスを明示的に設定する

```javascript
    ipc.connectTo(
        'world',
        'myapp.world'
    );
```

またはコールバックを使用してパスを明示的に設定する

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

##### 接続先ネット

`ipc.connectToNet(id,host,port,callback)`  

クライアントとして TCP に接続するために使用します。[TLS ソケット](https://github.com/RIAEvangelist/node-ipc/tree/master/example/TLSSocket)ネットワークカードを介して。これはローカルでもリモートでもかまいませんが、ローカルの場合は、Unix および Windows ソケットの実装を使用することをお勧めします。`connectTo`ネットワークカードを完全に回避するので、その代わりにはるかに高速です。

TLS ソケットおよび SSL ソケットについては、[ノード ipc TLS および SSL ドキュメント](https://github.com/RIAEvangelist/node-ipc/tree/master/example/TLSSocket).彼らはいくつかの追加の要件を持っており、知っておくべきことがあるので、独自のドキュメントを持っています。

| 変数     | 必須    | 定義                                                                                           |
| ------ | ----- | -------------------------------------------------------------------------------------------- |
| Id     | 必須    | は、接続されているソケットの文字列 ID です。TCP および TLS ソケットの場合、この ID は`ipc.of`ソケットへの参照を使用してソケットが作成されるときのオブジェクト。 |
| ホスト    | オプション | は、TCP ソケットまたは TLS ソケットが存在するホストです。 これはデフォルトで `ipc.config.networkHost`指定しない場合。                 |
| ポート    | オプション | TCP ソケットまたは TLS ソケットが存在するポート。                                                                |
| コールバック | オプション | これは、ソケットが作成されたときに実行する関数です。                                                                   |

**例**引数は、まだ順番に並んでいる限り省略できます。  
したがって、デフォルトは: (id、ホスト、ポート、コールバック) ですが、以下の例はまだ(ID、ポート、コールバック)、または(ID、ホスト、コールバック)または(id,port)などで動作します。

```javascript
    ipc.connectToNet('world');
```

または ID とコールバックのみを使用する

```javascript
    ipc.connectToNet(
        'world',
        function(){
            ...
        }
    );
```

またはホストとパスを明示的に設定する

```javascript
    ipc.connectToNet(
        'world',
        'myapp.com',serve(path,callback)
        3435
    );
```

またはポートとコールバックのみを明示的に設定する

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

##### 切断

`ipc.disconnect(id)`  

Unix、Windows、TCP、または TLS ソケットからクライアントを切断するために使用します。ソケットとその屈折はメモリから削除され、`ipc.of`スコープ。これは、ローカルでもリモートでもかまいません。UDP クライアントは接続を維持するため、クライアントはなく、このメソッドには値がありません。

| 変数  | 必須  | 定義                    |
| --- | --- | --------------------- |
| Id  | 必須  | は、切断元のソケットの文字列 ID です。 |

**例**

```javascript
    ipc.disconnect('world');
```

* * *

##### 提供

`ipc.serve(path,callback);`  

クライアントがバインドできるローカル Unix ソケット サーバーまたは Windows ソケット サーバーを作成するために使用します。サーバーは、`emit`特定のクライアント ソケットへのイベント、または`broadcast`すべての既知のクライアント ソケットへのイベント。

| 変数     | 必須    | 定義                                                                                                                                                                |
| ------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| パス     | オプション | これは Unix ドメイン ソケット ファイルのパスであり、システムが Windows の場合、これは自動的に Unix ドメイン ソケット ファイルと同じ情報を持つ適切なパイプに変換されます。設定しない場合、デフォルトは`ipc.config.socketRoot`+`ipc.config.appspace`+`id` |
| コールバック | オプション | これは、サーバーの起動後に呼び出される関数です。これは、イベントを start イベントにバインドして、次のようにすることもできます。`ipc.server.on('start',function(){});`                                                         |

**_例_**引数は、まだ順番に並んでいる限り省略できます。

```javascript
    ipc.serve();
```

またはコールバックの指定

```javascript
    ipc.serve(
        function(){...}
    );
```

またはパスを指定します

```javascript
    ipc.serve(
        '/tmp/myapp.myservice'
    );
```

またはすべてを指定する

```javascript
    ipc.serve(
        '/tmp/myapp.myservice',
        function(){...}
    );
```

* * *

##### サーブネット

`serveNet(host,port,UDPType,callback)`

クライアントがバインドできる TCP、TLS、または UDP ソケット サーバー、または他のサーバーがデータを送信できるサーバーを作成するために使用します。サーバーは、`emit`特定のクライアント ソケットへのイベント、または`broadcast`すべての既知のクライアント ソケットへのイベント。

| 変数      | 必須    | 定義                                                                                                                       |
| ------- | ----- | ------------------------------------------------------------------------------------------------------------------------ |
| ホスト     | オプション | 指定しない場合、デフォルトは os.networkInterfaces() の最初のアドレスになります。TCP、TLS および UDP サーバーの場合、これは 127.0.0.1 または ::1 になる可能性が最も高くなります。       |
| ポート     | オプション | TCP、UDP、または TLS ソケット・サーバーがバインドされるポートは、指定されていない場合、デフォルトは 8000 です。                                                         |
| UDPType | オプション | これを設定すると、サーバーが UDP ソケットとして作成されます。'udp4' または 'udp6' は有効な値です。デフォルトでは設定されません。udp6 を使用する場合は、次のように有効な IPv6 ホストを指定してください。`::1` |
| コールバック  | オプション | サーバーの作成時に呼び出される関数                                                                                                        |

**_例_**引数は、まだ順番に並んでいる限り省略できます。

既定の TCP サーバー

```javascript
    ipc.serveNet();
```

既定の udp サーバー

```javascript
    ipc.serveNet('udp4');
```

またはコールバックを使用して TCP サーバーを指定する

```javascript
    ipc.serveNet(
        function(){...}
    );
```

またはコールバックを使用して UDP サーバーを指定する

```javascript
    ipc.serveNet(
        'udp4',
        function(){...}
    );
```

またはポートを指定します

```javascript
    ipc.serveNet(
        3435
    );
```

またはすべての TCP を指定します。

```javascript
    ipc.serveNet(
        'MyMostAwesomeApp.com',
        3435,
        function(){...}
    );
```

またはすべてを指定する UDP

```javascript
    ipc.serveNet(
        'MyMostAwesomeApp.com',
        3435,
        'udp4',
        function(){...}
    );
```

* * *

### IPC ストアと既定の変数

| 変数         | 定義                                                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| ipc.of     | これは、ソケット接続の屈折がクライアントとしてクライアントとして接続されるときに格納される場所です。`ipc.connectTo`または`iupc.connectToNet`.これらは、それらを作成するために使用されるIDに基づいて格納されます, 例: ipc.of.mySocket |
| ipc.server | これは、`ipc.serve`または`ipc.serveNet`                                                                                                               |

* * *

### IPC サーバー メソッド

| メソッド | 定義                                                  |
| ---- | --------------------------------------------------- |
| 開始   | 呼び出す必要性を提供し始める`serve`または`serveNet`最初にサーバーをセットアップします |
| 停止   | サーバーを閉じて、サービスを停止する                                  |

* * *

### IPC イベント

| イベント名         | Params         | 定義                                                                                                    |
| ------------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| エラー           | err obj        | エラーが発生したときにトリガーされる                                                                                    |
| 接続            |                | ソケットが接続されたときにトリガーされる                                                                                  |
| 切断            |                | ソケットがサーバーから切断されたときにクライアントによってトリガーされる                                                                  |
| ソケット.切断       | ソケット破棄ソケット ID  | クライアント ソケットが切断されたときにサーバーによってトリガーされる                                                                   |
| 破壊            |                | ソケットが完全に破棄されたときにトリガーされ、それ以上の自動再試行は行われず、すべての参照が失われます。                                                  |
| データ           | バッファー          | ipc.config.rawBuffer が true でメッセージを受信したときにトリガーされます。                                                   |
| **_イベントの種類_** | **_イベント データ_** | JSON メッセージの受信時にトリガーされます。イベント名はメッセージの型文字列になり、パラメータはメッセージのデータオブジェクトになります。`{ type:'myEvent',data:{a:1}}` |
|               |                |                                                                                                       |

### 複数の IPC インスタンス

場合によっては、node-ipc の明示的で独立したインスタンスが必要になることがあります。このようなシナリオのためだけに、IPC シングルトンのコア IPC クラスを公開しました。

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

### 基本的な例

あなたは見つけることができます[高度な例](https://github.com/RIAEvangelist/node-ipc/tree/master/example)をクリックします。例では、マルチクライアントの例を含むより複雑なデモを見つけることができます。

#### Unix ソケット、Windows ソケット、および TCP ソケット用サーバー

サーバーは、IPC 用のソケットを開いたままにするプロセスです。複数のソケットがこのサーバーに接続して通信できます。また、すべてのクライアントにブロードキャストしたり、特定のクライアントに出力したりすることもできます。これは、ローカル Unix および Windows ソケット、およびローカルまたはリモート ネットワークの TCP ソケットで動作する最も基本的な例です。

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

#### Unix ソケットおよび TCP ソケット用クライアント

クライアントは、プロセス間通信のためにサーバー ソケットに接続します。ソケットは、特に出力されたイベントと、サーバーによってソケット上でブロードキャストされるイベントを受け取ります。これは、ローカル Unix ソケットとローカルまたはリモートネットワークの両方のTCPソケットで動作する最も基本的な例です。

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

#### UDP ソケットのサーバーとクライアント

UDP ソケットは、メッセージを受信するにはマシン上の一意のポートにバインドする必要があるため、Unix、Windows、および TCP ソケットとは異なります。たとえば、TCP、Unix、または Windows ソケット クライアントは、別の TCP、Unix、または Windows ソケット サーバーに接続するだけで異なる場合があります。その後、そのクライアントは、サーバーのポートまたは場所で送受信データを交換できます。UDP ソケットはこれを行うことができます。データを送受信するには、ポートにバインドする必要があります。 

つまり、UDP クライアントとサーバーは、データを受信するために UDP ソケットがデータを受信するための独自のポートを持つ必要があり、一度にこのポートを使用できるプロセスは 1 つだけであるため、同じことです。それはまた、次のことを意味します。`emit`または`broadcast`データをブロードキャストする UDP サーバは、データのブロードキャストを行うソケットのホストとポートを知る必要があります。

これは、ローカルソケットとリモートUDPソケットの両方で動作する最も基本的な例です。

##### UDP サーバー 1 - "世界"

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

##### UDP サーバー 2 - "こんにちは"

_メモ_ワールド サーバーが既に既定の ipc.config.networkPort 8000 を使用しているため、ここでポートを 8001 に設定します。だから、世界がそれを使用している間、私たちは8000にバインドすることはできません。

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

#### 生バッファまたはバイナリソケット

バイナリ ソケットまたは Buffer ソケットは、上記のソケットタイプのいずれでも使用できますが、データイベントの出力方法は次のとおりです。**_微妙に_**異なる。これらは、組み込みシステムまたは C/ C++ プロセスを使用する場合に便利です。C または C++ の文字列型指定と一致するようにすることもできます。

rawBuffer ソケットを設定する場合は、次のように指定する必要があります。

```javascript
    ipc.config.rawBuffer=true;
```

エンコードの種類を指定することもできます。デフォルトは`utf8`

```javascript
    ipc.config.encoding='utf8';
```

出力文字列バッファ :

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

出力バイト配列バッファ :

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

バイナリまたは 16 進配列バッファを出力する場合は、リアルタイムのデータ転送、特に C または C++ プロセス、または組み込みシステムに接続する whan に最適です。

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

明示的なバッファ、int型、倍精度浮動小数点数、浮動小数点数などを書き込み、C または C++ プロセス、または組み込みシステムに接続する際に、ビッグ エンディアンとリトル エンディアンのデータを生のバッファに書き込みます (バッファーに関する詳細情報と UInt、Int、double など)[https://nodejs.org/api/buffer.html]&#x3A;

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

#### を持つサーバー`cluster`モジュール

`node-ipc`Node.js' と共に使用できます。[クラスタ モジュール](https://nodejs.org/api/cluster.html)単一のソケットに対して複数のリーダーを持つ機能を提供します。 これを行うには、単に設定する必要があります`unlink`構成内のプロパティ`false`マスタープロセスでソケットパスのリンクを解除します。

##### サーバー

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

##### クライアント

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

#### DBAD ライセンスの下でライセンス

を参照してください。[DBAD ライセンス](https://github.com/philsturgeon/dbad)あなたの言語または私たちの言語で[licence.md](https://github.com/RIAEvangelist/node-phidget-API/blob/master/license.md)ファイル。
