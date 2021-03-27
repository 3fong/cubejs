1 安装

	安装nodejs,python
	npx cubejs-cli create hello-world -d postgres

但是运行中报错

	npm ERR! code 1
	npm ERR! path E:\git_repo\yy\cubejs\node_modules\canvas
	npm ERR! command failed
	npm ERR! command C:\WINDOWS\system32\cmd.exe /d /s /c node-gyp rebuild
	npm ERR! gyp info it worked if it ends with ok
	npm ERR! gyp info using node-gyp@7.1.2
	npm ERR! gyp info using node@15.12.0 | win32 | x64
	npm ERR! gyp ERR! find Python
npm ERR! gyp ERR! find Python Python is not set from command line or npm configuration


原因:是依赖下载不完整的原因,我的这个问题是因为使用淘宝的镜像源,这里换成官方的重新下载就可以了


package.json执行提示:

	'.' 不是内部或外部命令，也不是可运行的程序

"scripts": {
    "dev": "./node_modules/.bin/cubejs-server"
  },
这是windows不识别当前目录标识的问题,解决方式:

原始写法:

	"scripts": {
	    "dev": "./node_modules/.bin/cubejs-server"
	}

改成增加sh执行命令:

	"scripts": {
 	   "dev": "sh ./node_modules/.bin/cubejs-server"
	}






















