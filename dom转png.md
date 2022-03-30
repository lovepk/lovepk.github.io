### html dom节点转png
```
    convertToImage (container, options = {}) {
      // 设置放大倍数
      const scale = window.devicePixelRatio;

      // 传入节点原始宽高
      const _width = container.offsetWidth;
      const _height = container.offsetHeight;

      let { width, height } = options;
      width = width || _width;
      height = height || _height;

      // html2canvas配置项
      const ops = {
        scale,
        width,
        height,
        useCORS: true,
        allowTaint: false,
        ...options
      };

      function dataURLtoFile(dataURI, type) {
        let binary = atob(dataURI.split(',')[1]);
        let array = [];
        for(let i = 0; i < binary.length; i++) {
          array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {type:type });
      }
      
      return html2canvas(container, ops).then(canvas => {
        // 返回图片的二进制数据
        return dataURLtoFile(canvas.toDataURL("image/png"), "image/png");
      });
    }
```

### png上传获得图片url
```
    async getShareImg() {
      const file = await this.convertToImage(this.$refs.sharePage);
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = e => {
        const src = e.target.result
        const image = new Image()
        image.onload = () => {
          UploadToOss(file).then(data => {
            let url = data.res.requestUrls[0]
            if (url.indexOf('?') !== -1) {
              url = url.substring(0, url.indexOf('?'))
            }
            this.sharePNG = url + '?x-oss-process=image/resize,w_375,limit_0';
            this.handleShare();
          })
        }
        image.src = src
      };
    }
```