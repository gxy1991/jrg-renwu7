	<?php
    // ��� php ���Խӿ��ļ�
		header("Content-type: ");
    $start = $_GET['start']; //2
    $len = $_GET['len'];  //6
    $items = array();
    for($i = 0; $i < $len; $i++){
        array_push($items, '����' . ($start+$i));
    }
    $ret = array('status'=>1, 'data'=>$items);
    //{status: 1, data: ['����1','����2','����3']}
    sleep(0.5);
    echo json_encode($ret);
		?>