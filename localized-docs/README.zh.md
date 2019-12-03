# node-ipc

_用于本地和远程进程间通信的节点js 模块_完全支持 Linux、Mac 和 Windows。它还支持从低电平 unix 和窗口套接字到 UDP 和安全 TLS 和 TCP 套接字的所有形式的套接字通信。

复杂多流程的绝佳解决方案**神经网络**在 Node.JS 中

**npm i node-ipc**

#### NPM 统计数据

npm 信息 ：[查看node-ipc 的 npm 趋势和统计信息](http://npm-stat.com/charts.html?package=node-ipc&author=&from=&to=)  
[![NPM](https://nodei.co/npm/node-ipc.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-ipc/)
[![Package Quality](http://npm.packagequality.com/badge/node-ipc.png)](http://packagequality.com/#?package=node-ipc)  
![node-ipc npm version](https://img.shields.io/npm/v/node-ipc.svg) ![supported node version for node-ipc](https://img.shields.io/node/v/node-ipc.svg) ![total npm downloads for node-ipc](https://img.shields.io/npm/dt/node-ipc.svg) ![monthly npm downloads for node-ipc](https://img.shields.io/npm/dm/node-ipc.svg) ![npm licence for node-ipc](https://img.shields.io/npm/l/node-ipc.svg)

[![RIAEvangelist](https://avatars3.githubusercontent.com/u/369041?v=3&s=100)](https://github.com/RIAEvangelist)

GitHub 信息 ：  
![node-ipc GitHub Release](https://img.shields.io/github/release/RIAEvangelist/node-ipc.svg) ![GitHub license node-ipc license](https://img.shields.io/github/license/RIAEvangelist/node-ipc.svg) ![open issues for node-ipc on GitHub](https://img.shields.io/github/issues/RIAEvangelist/node-ipc.svg)

鳕鱼信息 ：  
[![Codacy Badge](https://api.codacy.com/project/badge/grade/8e0294dff55f4ac1985c07b16f39d0a9)](https://www.codacy.com/app/RIAEvangelist/node-ipc) [![Codacy Badge](https://api.codacy.com/project/badge/coverage/8e0294dff55f4ac1985c07b16f39d0a9)](https://www.codacy.com/app/RIAEvangelist/node-ipc)

生成信息 ：  
Mac + Linux ：[![Build Status](https://travis-ci.org/RIAEvangelist/node-ipc.svg?branch=master)](https://travis-ci.org/RIAEvangelist/node-ipc)窗户：[![node-ipc windows build status](https://ci.appveyor.com/api/projects/status/github/riaevangelist/node-ipc?branch=master&svg=true)](https://ci.appveyor.com/project/RIAEvangelist/node-ipc/history)

包装详情网站 ：

-   [GitHub.io网站](http://riaevangelist.github.io/node-ipc/ "node-ipc documentation").此站点的漂亮版本。
-   [NPM 模块](https://www.npmjs.org/package/node-ipc "node-ipc npm module").node-ipc 模块的 npm 页。

这项工作通过[DBAD 公共许可证](http://www.dbad-license.org/).

#### 节点的旧版本

最新版本的`node-ipc`可能使用 --harmony 标志。不过，我们正式支持节点 v4 和更新的 es5 和 es6

#### 测试

`npm test`将使用伊斯坦布尔为 node-ipc 运行 Jasmine 测试，并在规范文件夹中生成覆盖率报告。

您可能需要在全球安装茉莉花和伊斯坦布尔`sudo npm install -g jasmine istanbul`

* * *

#### 内容

1.  [IPC 套接字和支持操作系统的类型](#types-of-ipc-sockets)
2.  [IPC 配置](#ipc-config)
3.  [IPC 方法](#ipc-methods)
    1.  [日志](#log)
    2.  [连接到](#connectto)
    3.  [连接到网络](#connecttonet)
    4.  [断开](#disconnect)
    5.  [服务](#serve)
    6.  [服务网](#servenet)
4.  [IPC 存储和默认变量](#ipc-stores-and-default-variables)
5.  [IPC 活动](#ipc-events)
6.  [多个 IPC 实例](#multiple-ipc-instances)
7.  [基本示例](#basic-examples)
    1.  [Unix 的服务器\*窗口插槽 + TCP 套接字](#server-for-unix-sockets--tcp-sockets)
    2.  [Unix 的客户端\*窗口插槽 + TCP 套接字](#client-for-unix-sockets--tcp-sockets)
    3.  [用于 UDP 套接字的服务器和客户端](#server--client-for-udp-sockets)
    4.  [原始缓冲区、实时和/或二进制套接字](#raw-buffer-or-binary-sockets)
8.  [使用 TLS/SSL 套接字服务器和客户端](https://github.com/RIAEvangelist/node-ipc/tree/master/example/TLSSocket)
9.  [节点代码示例](https://github.com/RIAEvangelist/node-ipc/tree/master/example)

* * *

#### IPC 套接字的类型

| 类型                    | 稳定性 | 定义                                                                                                                                                                                                                                                                                                         |
| --------------------- | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unix 套接字或 Windows 套接字 | 稳定  | 为 Linux、Mac 和 Windows 提供闪电般的快速通信，并避免使用网卡来减少开销和延迟。[本地 Unix 和 Windows 套接字示例](https://github.com/RIAEvangelist/node-ipc/tree/master/example/unixWindowsSocket/ "Unix and Windows Socket Node IPC examples")                                                                                                   |
| TCP 套接字               | 稳定  | 提供整个网络中最可靠的通信。也可用于本地 IPC，但速度比#1的 Unix 套接字实现慢，因为 TCP 套接字通过网卡，而 Unix 套接字和 Windows 套接字不通过。[本地或远程网络 TCP 套接字示例](https://github.com/RIAEvangelist/node-ipc/tree/master/example/TCPSocket/ "TCP Socket Node IPC examples")                                                                                        |
| TLS 插座                | 稳定  | 通过 SSL 配置和安全的网络套接字。等效于 https。[TLS/SSL 文档](https://github.com/RIAEvangelist/node-ipc/tree/master/example/TLSSocket)                                                                                                                                                                                         |
| UDP 套接字               | 稳定  | 给**最快的网络通信**.UDP 可靠性较低，但比 TCP 快得多。它最适合用于流式传输非关键数据，如声音、视频或多人游戏数据，因为它可以根据网络连接和其他因素丢弃数据包。UDP 也可用于本地 IPC，但速度比#1的 Unix 套接字或 Windows 套接字实现慢，因为 UDP 套接字通过网卡，而 Unix 和 Windows 套接字则不通过。[本地或远程网络 UDP 套接字示例](https://github.com/RIAEvangelist/node-ipc/tree/master/example/UDPSocket/ "UDP Socket Node IPC examples") |

| 的     | 支持的套接字               |
| ----- | -------------------- |
| Linux | Unix、 波六、TCP、TLS、UDP |
| Mac   | Unix、 波六、TCP、TLS、UDP |
| 赢得    | 窗口、TCP、TLS、UDP       |

* * *

#### IPC 配置

`ipc.config`  

在`ipc.config`范围以覆盖或设置默认值。

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

| 变量     | 文档                                                                                                                                                 |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 应用空间   | 用于 Unix 套接字（Unix 域套接字）名称间距。如果未特别设置，Unix 域套接字将组合套接字根、应用空间和 id 以形成用于创建或绑定的 Unix 套接字路径。如果系统上运行了许多应用，则此可用，可能有多个具有相同 ID 的套接字，但如果更改应用空间，则仍将具有应用规范的唯一套写字。 |
| 套接字根   | 要在其中创建或绑定到 Unix 套接字的目录                                                                                                                             |
| Id     | 此套接字或服务的 ID                                                                                                                                        |
| 网络主机   | TCP、TLS 或 UDP 套接字应连接的本地或远程主机                                                                                                                       |
| 网络端口   | TCP、TLS 或 UDP 套接字应连接的默认端口                                                                                                                          |
| 编码     | 套接字上发送数据的默认编码。如果原始缓冲区设置为 true，则主要用于。有效值为 ：`ascii` `utf8` `utf16le` `ucs2` `base64` `hex`.                                                          |
| 原始缓冲区  | 如果为 true，数据将作为原始节点发送和接收`Buffer` **不**a`Object`作为JSON。这非常适合二进制或十六进制 IPC，以及以 C 和 C++ 等语言与其他进程通信                                                      |
| 分隔符    | 每个数据包末尾的分隔符。                                                                                                                                       |
| 同步     | 同步请求。在服务器应答之前，客户端不会发送新请求。                                                                                                                          |
| 沉默     | 打开/关闭日志记录默认值为 false，这意味着日志记录已打开                                                                                                                    |
| 日志颜色   | 打开/关闭 util.检查 ipc.log 的颜色                                                                                                                          |
| 日志深度   | 设置在 ipc.log 期间用于 util.检查的深度                                                                                                                        |
| 记录     | 从 ipc.log 接收输出的函数;应采用单个字符串参数                                                                                                                       |
| 最大连接   | 这是允许到套接字的最大连接数。它当前仅在 Unix 套接字上设置。其他套接字类型正在使用系统默认值。                                                                                                 |
| 重试     | 这是客户端在尝试重新连接到服务器（如果连接丢失）之前等待的时间（以毫秒为单位）。这不会影响 UDP 套接字，因为它们没有像 Unix 套接字和 TCP 套接字这样的客户端服务器关系。                                                        |
| 最大雷特里斯 | 如果设置，它表示每次断开连接后的最大重试次数，然后放弃并完全终止特定连接                                                                                                               |
| 停止重试   | 错误含义的默认值客户端将继续重试，以在重试间隔内无限期地连接到服务器。如果设置为任意数字，则每次断开连接后超过该数字时，客户端将停止重试。如果实时设置为 true，则无论最大重试数如何，它都将立即停止尝试连接。如果设置为 0，则客户端将**_不_**尝试重新连接。               |
| 取消链接   | 默认值为 true，表示模块将在启动之前负责删除 IPC 套接字。 如果您使用`node-ipc`在同一套接字上将有多个侦听器的群集环境中，必须将此设置为`false`然后注意删除您自己的代码中的套接字。                                             |
| 接口     | 在指定客户端应连接的接口时使用。请参阅[套接字.连接节点中的文档.js api](https://nodejs.org/api/net.html#net_socket_connect_options_connectlistener)                               |

* * *

#### IPC 方法

这些方法在 IPC 作用域中可用。

* * *

##### 日志

`ipc.log(a,b,c,d,e...);`  

ipc.log 将接受任意数量的参数，如果`ipc.config.silent`未设置，它将将它们与它们之间的单个空格"，然后记录到控制台。这是快速的，因为它防止任何串联发生，如果ipc.config.silent设置`true`.这样，如果将日志记录保留到位，则对性能几乎没有任何影响。

日志还使用 util.inspect 您可以控制是否应通过`ipc.config`

```javascript
    ipc.config.logInColor=true; //default
    ipc.config.logDepth=5; //default    
    ipc.config.logger=console.log.bind(console); // default
```

* * *

##### 连接到

`ipc.connectTo(id,path,callback);`  

用于作为客户端连接到本地 Unix 套接字和 Windows 套接字。**_这是同一台计算机上进程进行通信的最快方式_**因为它绕过了TCP和UDP都必须使用的网卡。

| 变量  | 必填  | 定义                                                                                                                          |
| --- | --- | --------------------------------------------------------------------------------------------------------------------------- |
| Id  | 必填  | 是要连接到的套接字的字符串 ID。创建具有此 ID 的套接字将添加到 ipc.of 对象中。                                                                              |
| 路径  | 选   | 是 Unix 域套接字文件的路径，如果系统是 Windows，则会自动转换为与 Unix 域套接字文件具有相同信息的相应管道。如果未设置，则默认为`ipc.config.socketRoot`+`ipc.config.appspace`+`id` |
| 回调  | 选   | 这是创建套接字时要执行的函数。                                                                                                             |

**例子**参数可以省略，只要它们仍然井然有序。

```javascript
    ipc.connectTo('world');
```

或者只使用 ID 和回调

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

或显式设置路径

```javascript
    ipc.connectTo(
        'world',
        'myapp.world'
    );
```

或显式设置带回调的路径

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

##### 连接到网络

`ipc.connectToNet(id,host,port,callback)`  

用作将客户端连接到 TCP 或[TLS 插座](https://github.com/RIAEvangelist/node-ipc/tree/master/example/TLSSocket)通过网络卡。这可以是本地的，也可以是远程的，如果是本地的，建议您使用 Unix 和 Windows 套接字实现`connectTo`而是因为它要快得多，因为它完全避免了网卡。

有关 TLS 和 SSL 套接字，请参阅[node-ipc TLS 和 SSL 文档](https://github.com/RIAEvangelist/node-ipc/tree/master/example/TLSSocket).他们有一些额外的要求，以及需要了解的事情，因此有自己的文档。

| 变量  | 必填  | 定义                                                                     |
| --- | --- | ---------------------------------------------------------------------- |
| Id  | 必填  | 是要连接到的套接字的字符串 ID。对于 TCP 和 TLS 套接字，此 ID 将添加到`ipc.of`使用对套接字的引用创建套接字时的对象。 |
| 主机  | 选   | 是 TCP 或 TLS 套接字所在的主机。 这将默认为 `ipc.config.networkHost`如果未指定。             |
| 港口  | 选   | TCP 或 TLS 套接字所在的端口。                                                    |
| 回调  | 选   | 这是创建套接字时要执行的函数。                                                        |

**例子**参数可以省略，只要它们仍然井然有序。  
因此，虽然默认值为 ：（id、host、端口、回调），以下示例仍然有效，因为它们仍然按顺序（id、port、回调）或（id、host、回调）或（id、port）等。

```javascript
    ipc.connectToNet('world');
```

或者只使用 ID 和回调

```javascript
    ipc.connectToNet(
        'world',
        function(){
            ...
        }
    );
```

或显式设置主机和路径

```javascript
    ipc.connectToNet(
        'world',
        'myapp.com',serve(path,callback)
        3435
    );
```

或仅显式设置端口和回调

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

##### 断开

`ipc.disconnect(id)`  

用于断开客户端与 Unix、Windows、TCP 或 TLS 套接字的连接。套接字及其重功能将从内存中删除，并且`ipc.of`范围。这可以是本地的，也可以是远程的。UDP 客户端不维护连接，因此没有客户端，此方法对它们没有价值。

| 变量  | 必填  | 定义               |
| --- | --- | ---------------- |
| Id  | 必填  | 是要断开的套接字的字符串 ID。 |

**例子**

```javascript
    ipc.disconnect('world');
```

* * *

##### 服务

`ipc.serve(path,callback);`  

用于创建客户端可以绑定到的本地 Unix 套接字服务器或 Windows 套接字服务器。服务器可以`emit`事件到特定的客户端套接字，或`broadcast`事件到所有已知的客户端套接字。

| 变量  | 必填  | 定义                                                                                                                           |
| --- | --- | ---------------------------------------------------------------------------------------------------------------------------- |
| 路径  | 选   | 这是 Unix 域套接字文件的路径，如果系统是 Windows，则会自动转换为与 Unix 域套接字文件具有相同信息的相应管道。如果未设置，则默认为`ipc.config.socketRoot`+`ipc.config.appspace`+`id` |
| 回调  | 选   | 这是服务器启动后要调用的函数。这也可以通过将事件绑定到开始事件来实现，例如`ipc.server.on('start',function(){});`                                                  |

**_例子_**参数可以省略，只要它们仍然按顺序排列。

```javascript
    ipc.serve();
```

或指定回调

```javascript
    ipc.serve(
        function(){...}
    );
```

或指定路径

```javascript
    ipc.serve(
        '/tmp/myapp.myservice'
    );
```

或指定所有内容

```javascript
    ipc.serve(
        '/tmp/myapp.myservice',
        function(){...}
    );
```

* * *

##### 服务网

`serveNet(host,port,UDPType,callback)`

用于创建 TCP、TLS 或 UDP 套接字服务器，客户端可以绑定到这些服务器或其他服务器可以将数据发送到该服务器。服务器可以`emit`事件到特定的客户端套接字，或`broadcast`事件到所有已知的客户端套接字。

| 变量    | 必填  | 定义                                                                                   |
| ----- | --- | ------------------------------------------------------------------------------------ |
| 主机    | 选   | 如果未指定此默认值为 os.networkInterface（）中的第一个地址。对于 TCP、TLS 和 UDP 服务器，这很可能是 127.0.0.1 或 ：：1   |
| 港口    | 选   | TCP、UDP 或 TLS 套接字服务器将绑定的端口，如果未指定，则默认为 8000                                           |
| UDP类型 | 选   | 如果设置，这将创建服务器作为 UDP 套接字。"udp4"或"udp6"是有效的值。这默认为未设置。使用 udp6 时，请确保指定有效的 IPv6 主机，例如`::1` |
| 回调    | 选   | 创建服务器时要调用的函数                                                                         |

**_例子_**参数可以省略，只要它们仍然井然有序。

默认 tcp 服务器

```javascript
    ipc.serveNet();
```

默认 udp 服务器

```javascript
    ipc.serveNet('udp4');
```

或指定具有回调的 TCP 服务器

```javascript
    ipc.serveNet(
        function(){...}
    );
```

或指定具有回调的 UDP 服务器

```javascript
    ipc.serveNet(
        'udp4',
        function(){...}
    );
```

或指定端口

```javascript
    ipc.serveNet(
        3435
    );
```

或指定所有 TCP

```javascript
    ipc.serveNet(
        'MyMostAwesomeApp.com',
        3435,
        function(){...}
    );
```

或指定所有 UDP

```javascript
    ipc.serveNet(
        'MyMostAwesomeApp.com',
        3435,
        'udp4',
        function(){...}
    );
```

* * *

### IPC 存储和默认变量

| 变量         | 定义                                                                               |
| ---------- | -------------------------------------------------------------------------------- |
| ipc.of     | 这是当通过`ipc.connectTo`或`iupc.connectToNet`.它们将基于用于创建它们的 ID 进行存储，例如：ipc.of.mySocket |
| ipc.server | 这是对由`ipc.serve`或`ipc.serveNet`                                                   |

* * *

### IPC 服务器方法

| 方法  | 定义                                |
| --- | --------------------------------- |
| 开始  | 开始服务需要调用`serve`或`serveNet`首先设置服务器 |
| 停止  | 关闭服务器并停止服务                        |

* * *

### IPC 活动

| 事件名称         | Params       | 定义                                                                               |
| ------------ | ------------ | -------------------------------------------------------------------------------- |
| 错误           | err obj      | 发生错误时触发                                                                          |
| 连接           |              | 接字连接时触发                                                                          |
| 断开           |              | 当套接字与服务器断开连接时由客户端触发                                                              |
| 套接字。         | 套接字已损坏套接字    | 客户端套接字断开连接时由服务器触发                                                                |
| 摧毁           |              | 当套接字被完全销毁时触发，不会再发生自动重试，并且所有引用都消失了。                                               |
| 数据           | 缓冲区          | 当 ipc.config.rawBuffer 为 true 并收到消息时触发。                                          |
| **_您的事件类型_** | **_您的事件数据_** | 收到 JSON 消息时触发。事件名称将是消息中的类型字符串，param 将是消息中的数据对象，例如：`{ type:'myEvent',data:{a:1}}` |
|              |              |                                                                                  |

### 多个 IPC 实例

有时您可能需要node-ipc 的显式和独立实例。就此类方案而言，我们在 IPC 单例上公开了核心 IPC 类。

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

### 基本示例

你可以找到[高级示例](https://github.com/RIAEvangelist/node-ipc/tree/master/example)在示例文件夹中。在示例中，您将找到更复杂的演示，包括多客户端示例。

#### 用于 Unix 套接字、Windows 插槽和 TCP 套接字的服务器

服务器是保持 IPC 的套接字打开的过程。多个套接字可以连接到此服务器并连接到它。它还可以广播到所有客户端或向特定客户端发出。这是适用于本地 Unix 和 Windows 套接字以及本地或远程网络 TCP 套接字的最基本示例。

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

#### Unix 套接字和 TCP 套接字的客户端

客户端连接到服务器套接字进行进程间通信。套接字将接收专门发送到它的事件以及服务器在套接字上广播的事件。这是适用于本地 Unix 套接字和本地或远程网络 TCP 套接字的最基本示例。

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

#### 用于 UDP 套接字的服务器和客户端

UDP 套接字与 Unix、Windows 和 TCP 套接字不同，因为它们必须绑定到其计算机上的唯一端口才能接收消息。例如，TCP、Unix 或 Windows 套接字客户端可以仅连接到单独的 TCP、Unix 或 Windows 套接字服务器。然后，该客户端可以在服务器端口或位置上交换发送和接收数据。UDP 套接字无法执行此操作。它们必须绑定到端口才能接收或发送数据。 

这意味着 UDP 客户端和服务器是一回事，因为为了接收数据，UDP 套接字必须有自己的端口才能接收数据，并且一次只能有一个进程使用此端口。这也意味着，为了`emit`或`broadcast`数据 UDP 服务器需要知道它打算向其广播数据的套接字的主机和端口。

这是适用于本地和远程 UDP 套接字的最基本示例。

##### UDP 服务器 1 - "世界"

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

##### UDP 服务器 2 - "你好"

_注意_我们在此处将端口设置为 8001，因为世界服务器已在使用默认的 ipc.config.networkPort 8000。因此，当世界正在使用它时，我们不能绑定到8000。

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

#### 原始缓冲区或二进制套接字

二进制或缓冲区套接字可用于上述任何套接字类型，但数据事件的发出方式为**_稍_**不同。如果使用嵌入式系统或 C / C++流程，这些可能派上用场。您甚至可以确保匹配 C 或C++字符串键入。

设置原始缓冲区套接字时，必须将其指定为：

```javascript
    ipc.config.rawBuffer=true;
```

您还可以指定其编码类型。默认值为`utf8`

```javascript
    ipc.config.encoding='utf8';
```

发出字符串缓冲区 ：

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

发出字节数组缓冲区：

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

发出二进制或十六进制数组缓冲区，这是最佳实时数据传输，特别是whan连接到C或C++进程，或嵌入式系统：

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

在连接到 C 或 C++ 进程或嵌入式系统时，将显式缓冲区、int 类型、双精度值、浮点等以及大端端和小端端数据写入原始缓冲区，无论在内，都极其有价值（请参阅此处有关缓冲区以及 UInt、Int、Double 等的更多详细信息）[https://nodejs.org/api/buffer.html]&#x3A;

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

#### 服务器与`cluster`模块

`node-ipc`可与 Node.js 一起使用[集群模块](https://nodejs.org/api/cluster.html)提供为单个套接字具有多个读取器的能力。 这样做只需要您设置`unlink`属性`false`并注意在主进程中取消链接套接字路径：

##### 服务器

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

##### 客户

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

#### 根据 DBAD 许可证获得许可

请参阅[DBAD 许可证](https://github.com/philsturgeon/dbad)您的语言或我们的[licence.md](https://github.com/RIAEvangelist/node-phidget-API/blob/master/license.md)文件。
