
## Supported devices

### Processors

* [**Fullhan**](https://www.fullhan.com/en/index.php) (see code in [br-ext-chip-fullhan](https://github.com/OpenIPC/openipc-2.1/tree/master/br-ext-chip-fullhan))
    * **fh8852** - start of development
    * **fh8856** - start of development

* [**HiSilicon**](http://www.hisilicon.com/en/) (see code in [br-ext-chip-hisilicon](https://github.com/OpenIPC/openipc-2.1/tree/master/br-ext-chip-hisilicon))
    * **hi3516ev200** - fully ready for use :100: :ok:
    * **hi3516ev300** - fully ready for use :100: :ok:
    * **hi3518ev300** - ready to use but need more usage reports :+1:
    * we are also porting other processors from our [old project](https://openipc.org/firmware/#flashing-new-firmware)

* [**SigmaStar**](http://www.sigmastarsemi.com/index.php) (see code in [br-ext-chip-sigmastar](https://github.com/OpenIPC/openipc-2.1/tree/master/br-ext-chip-sigmastar))
    * **ssc335** - final stage of development :eye:

* [**Xiongmai**](http://www.xiongmaitech.com/en/)  (see code in [br-ext-chip-xiongmai](https://github.com/OpenIPC/openipc-2.1/tree/master/br-ext-chip-xiongmai))
    * **xm530** - experimental stage of development :office_worker:
    * **xm550** - experimental stage of development :office_worker:

**In the future, support processors is planned:**

* Anyka
* Goke
* Grainmedia
* Ingenic
* and others...

---------------------------------------------------------------------------------

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