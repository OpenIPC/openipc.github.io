
## Source code

**At the moment, we are working on creating a high-quality repository with source code.**

**Please be patient because we want to provide a completely beautiful and ready-made project.**

-----

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

#### Hi3516Ev300

```
export PLATFORM=hisilicon
make prepare
make BOARD=unknown_unknown_hi3516ev300_openipc all
```

#### Hi3518Ev300

```
export PLATFORM=hisilicon
make prepare
make BOARD=unknown_unknown_hi3518ev300_openipc all
```

#### SSC335

```
export PLATFORM=sigmastar
make prepare
make BOARD=unknown_unknown_ssc335_openipc all
```

#### XM530

```
export PLATFORM=xiongmai
make prepare
make BOARD=unknown_unknown_xm530_openipc all
```

-----

## Statistical data

Software might do product usage data collection including SoC and sensor model name to gather statistics used in QA process. 

We guaranty that the data is fully anonymized, and does not contain anything that can arguably be considered data about an individual, that could be considered end-user data; or that could be sensitive or confidential to users.