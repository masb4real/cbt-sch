# DSC project
This is a project done to help schools and student get the most out of practicing Computer Base Test kindof of exams especially in Africa 
looking at Nigeria where students are required to write an entering exams called JAMB before they gain admission into the university.

# Host react application on Apache server

### Step 1 : Create your app

```
$ npm install -g create-react-app 
$ create-react-app my-app
```

### Step 2 : Build it for production

```
$ cd my-app
$ npm run build
```

### Step 3 : deploy

- copy and paste everything in build folder to your server
- edit /etc/httpd/conf/httpd.conf 

```
<Directory "/var/www/html">
    ...
    AllowOverride All
    ...
</Directory>
```

- create a “.htaccess” file in html directory and add this snippet :

```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```
or edit /etc/httpd/conf/httpd.conf

```
<Directory "/var/www/html">
    #
    # Possible values for the Options directive are "None", "All",
    # or any combination of:
    #   Indexes Includes FollowSymLinks SymLinksifOwnerMatch ExecCGI MultiViews
    #
    # Note that "MultiViews" must be named *explicitly* --- "Options All"
    # doesn't give it to you.
    #
    # The Options directive is both complicated and important.  Please see
    # http://httpd.apache.org/docs/2.4/mod/core.html#options
    # for more information.
    #
    Options Indexes FollowSymLinks

    #
    # AllowOverride controls what directives may be placed in .htaccess files.
    # It can be "All", "None", or any combination of the keywords:
    #   Options FileInfo AuthConfig Limit
    #
    AllowOverride All

    Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]

    #
    # Controls who can get stuff from this server.
    #
    Require all granted
</Directory>
```


### Reference

[Host react application on Apache server](https://medium.com/@kayode.adechinan/host-react-application-on-apache-server-90c803241483)
