window.addEventListener('load', function() {
    const masonry = new Masonry('.news-masonry', {
      itemSelector: '.news-card',
      columnWidth: '.news-card',
      gutter: 20
    });
  });

  // 留言编辑模拟
function editMessage(id) {
    alert(`编辑留言 ID: ${id}`);
    // 实际逻辑：获取留言内容，弹出编辑框，提交更新
  }
  
  // 留言删除模拟
  function deleteMessage(id) {
    if (confirm('确定删除这条留言吗？')) {
      alert(`已删除留言 ID: ${id}`);
      // 实际逻辑：调用接口删除留言，更新列表
    }
  }
  
  // 发布留言模拟
  function submitMessage() {
    const content = document.getElementById('message-input').value;
    const category = document.getElementById('message-category').value;
    if (content.trim() === '') {
      alert('请输入留言内容');
      return false;
    }
    alert(`发布留言：${content}（分类：${category}）`);
    // 实际逻辑：调用接口提交留言，更新留言列表
    return false; // 阻止表单默认提交
  }
  
  // 社交绑定/解绑模拟
  function bindAccount(platform) {
    alert(`开始绑定 ${platform} 账号`);
    // 实际逻辑：跳转授权页面，完成绑定后更新已绑定列表
  }
  function unbindAccount(platform) {
    if (confirm(`确定解除绑定 ${platform} 账号吗？`)) {
      alert(`已解除绑定 ${platform} 账号`);
      // 实际逻辑：调用接口解除绑定，更新已绑定列表
    }
  }