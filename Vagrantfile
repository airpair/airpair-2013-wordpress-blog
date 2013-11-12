# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"
HOST_NAME = "airpair.local"
BOX_NAME  = ENV['BOX_NAME'] || "airpair-blog"
BOX_URI   = ENV['BOX_URI']  || "https://s3.amazonaws.com/gr3g/boxes/airpair-precise64.box"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box             = BOX_NAME
  config.vm.box_url         = BOX_URI
  config.vm.hostname        = HOST_NAME
  config.ssh.forward_agent  = true
  config.vm.synced_folder   ".", "/airpair_blog/", nfs: true
  config.vm.network         :private_network, ip: "192.168.33.10"
  
  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--memory", "1024"]
    vb.customize ["modifyvm", :id, "--cpuexecutioncap", "50"]
  end
end
