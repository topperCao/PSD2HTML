/**
 * 后台返回给前台的信息.
 *
 * Author: 	hustcer
 * Date: 	2012-05-16   
 */
exports.nodeMsg = {

	IMG_NOT_EXIST: 	'生成HTML所需的图片文件不存在！',
    CONF_NOT_EXIST: '生成HTML所需的配置文件不存在！',
    DATA_ERROR:     '很遗憾，生成HTML所需的数据不符合要求！',
    COMMON_FAIL:    '文件处理失败, 请重试！'
}

exports.conf = {
   /**
    * 文件上传存放路径
    */
    UPLOAD_DIR:     './public/uploads/',
   /**
    * 生成HTML所需的图片名字
    */
    IMG_FILE_NAME:  'view.png',
   /**
    * 生成HTML所需的配置文件名字
    */
    CONF_FILE_NAME: 'conf.txt'
} 