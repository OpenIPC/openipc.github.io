![OpenIPC logo][logo]

## Alternative open firmware for your IP camera
_(based on Buildroot)_

[![Telegram](https://openipc.org/images/telegram_button.svg)][telegram]

### FPV FAQ

### Installing the calibration file for SSC338Q

- Take an SD card, delete all partitions on it, create one partition of 1 Gigabyte and format it as FAT32/VFAT.
- Go to the OpenIPC repository [sensor-profiles](https://github.com/OpenIPC/sensor-profiles/) and download the file you need, for example [imx335_greg15.bin](https://github.com/OpenIPC/sensor-profiles/raw/master/files/imx335_greg15.bin).
- Create a file named autoconfig.sh in Notepad++ for Windows or text editor in Linux with the following content:
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


[logo]: https://openipc.org/assets/openipc-logo-black.svg
[telegram]: https://openipc.org/our-channels
