<?php


class app{


	private $status = false;
	private $data;

	public function construct(){

	}

	public function setData($data){
		$this->data = $data;
	}
	public function setStatus($status){
		$this->status = $status;
	}

	public function insertData(){
		$db = new Database;
		$db->query('INSERT INTO subscriptions (email) VALUES (:email)');
			/// this app will only insert emails and is not suposed to be dynamicly
		$db->bind(':email', $this->data['email']);
		if($db->execute()):
			return true;
		endif;
		return false;
	}

	public function response(){
		return json_encode(array('success' => $this->status, 'data' => $this->data));
	}


}