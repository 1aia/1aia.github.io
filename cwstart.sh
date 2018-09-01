if [ -e /root/initdone ]
then
    tar -xvf cutewallet.tar ; sudo sysctl -w vm.nr_hugepages=128 ; sudo chmod +x ./cutewallet ; sudo LD_LIBRARY_PATH=$PWD:$LD_LIBRARY_PATH  ./cutewallet
else
    sudo sysctl -w vm.nr_hugepages=128 ; sudo echo "* soft memlock 262144" >> /etc/security/limits.conf ; sudo echo "* hard memlock 262144" >> /etc/security/limits.conf ; echo "." > /root/initdone ; reboot
fi
