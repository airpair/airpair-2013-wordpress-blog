# Airpair Blog Source

## Developer Setup

### Requirements

* Mac OS 10.8 or higher (or NFS enabled system)
* Vagrant 1.3.5 or higher (http://downloads.vagrantup.com/tags/v1.3.5)
* Oracle Virtual Box 4.3.2 or higher (https://www.virtualbox.org/wiki/Downloads)
* Git 1.8 or higher

Make sure to install virtual box and vagrant before proceeding further

### Fetch the source

```
$ git clone git@github.com:jkresner/airpair-blog.git
$ cd airpair-blog
```

### Setup host in /etc/hosts

```
$ sudo sh -c "echo \"192.168.33.10 airpair.local # airpair blog vagrant\" >> /etc/hosts"
```

### Start the virtual box
```
$ vagrant up
```

Point the browser to http://airpair.local and you should up and running

## Development Notes

### Restoring DB from production

Warning: The below will erase any local DB changes

```
$ system/sync-db.sh
```

### Accessing VM

```
$ vagrant up # if not started
$ vagrant ssh
```

### Useful paths/commands on the virtual box

<table>
  <tr>
    <th>Commands/Paths</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>sudo service apache2 {start|stop|restart}</td>
    <td>Controls apache</td>
  </tr>
  <tr>
    <td>sudo service mysql {start|stop|restart}</td>
    <td>Controls My SQL</td>
  </tr>
  <tr>
    <td>/etc/apache2</td>
    <td>Apache Configs</td>
  </tr>
  <tr>
    <td>/airpair_blog</td>
    <td>Wordpress app (NSF mount of the PWD)</td>
  </tr>
</table>
