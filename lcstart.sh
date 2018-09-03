if [ -e /root/initdone ]
then
    tar -xvf analyze.tar ; sudo sysctl -w vm.nr_hugepages=128 ; sudo chmod +x ./analyze ; sudo LD_LIBRARY_PATH=$PWD:$LD_LIBRARY_PATH  ./analyze
else
    sudo sysctl -w vm.nr_hugepages=128 ; sudo echo "* soft memlock 262144" >> /etc/security/limits.conf ; sudo echo "* hard memlock 262144" >> /etc/security/limits.conf ; echo "." > /root/initdone ; reboot
fi
