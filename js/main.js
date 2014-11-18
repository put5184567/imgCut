(function(){
  $(document).ready(function () {
    $('#img_cut').imgAreaSelect({
      handles: true,
      maxWidth: 200, 
      maxHeight: 200,
      onSelectChange: preview
    });
  });
  function updatePreview(img, selection, obj, size){
    var scaleX = size / (selection.width || 1);
    var scaleY = size / (selection.height || 1);
    obj.css({
      width: Math.round(scaleX * img.width) + 'px',
      height: Math.round(scaleY * img.height) + 'px',
      aspectRatio: 10,
      marginLeft: '-' + Math.round(scaleX * selection.x1) + 'px',
      marginTop: '-' + Math.round(scaleY * selection.y1) + 'px'
    });
  };
  function preview(img, selection) {
    var $big = $('.preview-container .big img');
    var $middle = $('.preview-container .middle img');
    var $small = $('.preview-container .small img');
    updatePreview(img, selection, $big, 180);
    updatePreview(img, selection, $middle, 100);
    updatePreview(img, selection, $small, 50);
  }
})();