
### Quick build from sources

Install some packages to system and clone OpenIPC repo

```
sudo apt-get update -y ; sudo apt-get install -y bc build-essential git unzip
git clone --depth=1 https://github.com/OpenIPC/openipc-2.1.git
cd openipc-2.1
```

Run the commands below for your board and your files will end up in the "output/images" directory


#### Hi3516Ev200

```
export PLATFORM=hisilicon 
make prepare
make BOARD=unknown_unknown_hi3516ev200_openipc all
```

**Hi3516Ev300**

```
export PLATFORM=hisilicon
make prepare
make BOARD=unknown_unknown_hi3516ev300_openipc all
```

**Hi3518Ev300**

```
export PLATFORM=hisilicon
make prepare
make BOARD=unknown_unknown_hi3518ev300_openipc all
```