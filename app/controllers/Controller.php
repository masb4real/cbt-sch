<?php 
class Controller {

    protected $app;
    protected $db;

    function beforeroute() {
    }

    function afterroute() {
    }

    function __construct() {
        // this the F3 db connection instance
        $app=Base::instance();
        $db=new DB\SQL(
            $app->get('db_dns') . $app->get('db_name'),
            $app->get('db_user'),
            $app->get('db_pass'),
            array( \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION )
        );

	$this->app=$app;
    $this->db=$db;
    }
    
    //this method is my custom connection instance for use where I desire more control
    function customConn(){
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "cbt";
        return new mysqli($servername, $username, $password, $dbname); 
    }
}
