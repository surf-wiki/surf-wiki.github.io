// 3D模型交互脚本
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('surfboard-3d');
    if (!container) return;
    
    // 这里将实现Three.js的3D模型渲染
    // 实际项目中需要引入Three.js库并编写完整渲染逻辑
    
    // 示例：创建简单的交互界面
    const createControls = () => {
      const controlsDiv = document.createElement('div');
      controlsDiv.className = 'model-controls';
      
      const boardTypes = ['长板', '短板', '鱼板', '枪板', '软顶板'];
      boardTypes.forEach(type => {
        const button = document.createElement('button');
        button.textContent = type;
        button.addEventListener('click', () => {
          // 这里添加切换模型的逻辑
          alert(`已切换到${type}模型`);
        });
        controlsDiv.appendChild(button);
      });
      
      container.parentNode.appendChild(controlsDiv);
    };
    
    createControls();
    
    // 提示用户
    const infoDiv = document.createElement('div');
    infoDiv.style.position = 'absolute';
    infoDiv.style.top = '10px';
    infoDiv.style.left = '10px';
    infoDiv.style.background = 'rgba(0,0,0,0.7)';
    infoDiv.style.color = 'white';
    infoDiv.style.padding = '5px 10px';
    infoDiv.style.borderRadius = '4px';
    infoDiv.style.fontSize = '0.8rem';
    infoDiv.textContent = '鼠标拖动旋转，滚轮缩放';
    container.appendChild(infoDiv);
  });