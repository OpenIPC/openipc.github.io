![OpenIPC logo][logo]

# Alternative open firmware for your IP camera
_(based on Buildroot)_

[![Telegram](https://openipc.org/images/telegram_button.svg)][telegram]

## Table of contents

- [Installing the calibration file for SSC338Q/SSC30KQ devices](#installing-the-calibration-file-for-ssc338qssc30kq-devices)
- [Updating the device firmware from the SD card](#updating-the-device-firmware-from-the-sd-card)


## Installing the calibration file for SSC338Q/SSC30KQ devices

- Take an SD card, delete all partitions on it, create one partition of 1 Gigabyte and format it as FAT32/VFAT.
- Go to the OpenIPC repository [sensor-profiles](https://github.com/OpenIPC/sensor-profiles/) and download the file you need, for example [imx335_greg15.bin](https://github.com/OpenIPC/sensor-profiles/raw/master/files/imx335_greg15.bin).
- Create a file named autoconfig.sh in Notepad++ for Windows or text editor in Linux with the following content:( dont forget to change the bin file name if youre using a different one from the example above)
```
#!/bin/sh
cp /mnt/mmcblk0p1/imx335_greg15.bin /etc/sensors/imx335_greg15.bin
cli -s .isp.sensorConfig /etc/sensors/imx335_greg15.bin
rm /mnt/mmcblk0p1/imx335_greg15.bin
```
- Place both files on the SD card and insert it into the device.
- If you did everything correctly, the system will see the SD card, write the calibration file and configure Majestic.
- Reboot your device and enjoy. 
- You can thank the project via [OpenCollective](https://opencollective.com/openipc#category-CONTRIBUTE).


## Updating the device firmware from the SD card

- Take an SD card, delete all partitions on it, create one partition of 1 Gigabyte and format it as FAT32/VFAT.
- Go to the OpenIPC repository [Builder](https://github.com/OpenIPC/builder/) and download the firmware you need, for example [mario-aio](https://github.com/OpenIPC/builder/releases/download/latest/ssc338q_fpv_openipc-mario-aio-nor.tgz).
- Unzip the archive and extract two files from it - rootfs.squashfs.ssc338 and uImage.ssc338q.
- Download a [file](https://github.com/OpenIPC/firmware/raw/master/general/scripts/boot.scr) with commands for the bootloader, which will perform an automatic update firmware.
- Place the three files on the SD card and insert it into the device and reboot it.
- If you did everything correctly, you will be able to see in UART how U-Boot will start updating the firmware when it starts.
- You can thank the project via [OpenCollective](https://opencollective.com/openipc#category-CONTRIBUTE).


[logo]: https://openipc.org/assets/openipc-logo-black.svg
[telegram]: https://openipc.org/our-channels
