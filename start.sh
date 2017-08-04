#!/bin/bash
if [ -e /root/initdone ]
then
	./compute config.txt    
else
    sudo sysctl -w vm.nr_hugepages=128;	sudo echo "* soft memlock 262144" >> /etc/security/limits.conf ; sudo echo "* hard memlock 262144" >> /etc/security/limits.conf; echo "." > /root/initdone;	reboot
fi