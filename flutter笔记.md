# Flutter学习笔记
## 常见问题
### flutter upgrade 卡住问题
删除 /flutter/bin/cache文件后，重新执行`flutter upgrade`
### Brew发现自动更新homebrew时卡住
换成中科大的源
```
// 替换brew.git:
cd "$(brew --repo)"
git remote set-url origin https://mirrors.ustc.edu.cn/brew.git

// 替换homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git

// 替换homebrew-cask.git:
cd "$(brew --repo)"/Library/Taps/homebrew/homebrew-cask 
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git
```
### ruby的gem下载东西卡住
```
gem sources -l
sudo gem update --system
gem sources --remove https://rubygems.org/
gem sources --add https://gems.ruby-china.com/
```
### cocoapods安装
```
sudo gem install -n /usr/local/bin cocoapods
pod setup
```