# 新建一篇博客草稿。用法（在项目根目录）：
#   .\new-post.ps1
# 会提示输入「网址用的英文短名」和「中文标题」，自动生成带当天日期的 .mdx 文件。

$ErrorActionPreference = "Stop"

$slug = Read-Host "网址短名（英文/数字/连字符，如 my-first-note）"
if ([string]::IsNullOrWhiteSpace($slug)) {
    Write-Host "短名不能为空，已取消。" -ForegroundColor Red
    exit 1
}
# 清洗：转小写，非法字符换成连字符
$slug = ($slug.Trim().ToLower() -replace '[^a-z0-9\-]', '-') -replace '-+', '-'

$title = Read-Host "文章标题（中文即可）"
if ([string]::IsNullOrWhiteSpace($title)) { $title = $slug }

$today = Get-Date -Format "yyyy-MM-dd"
$fileName = "$today-$slug.mdx"
$dir = Join-Path $PSScriptRoot "content\posts"
$path = Join-Path $dir $fileName

if (Test-Path $path) {
    Write-Host "文件已存在：$path" -ForegroundColor Red
    exit 1
}

$content = @"
---
title: "$title"
date: "$today"
excerpt: "一句话摘要，显示在文章列表里。"
tags: [笔记]
draft: true
---

正文从这里开始，直接写 Markdown。

## 二级标题

写点什么。
"@

Set-Content -Path $path -Value $content -Encoding UTF8
Write-Host ""
Write-Host "已创建：content\posts\$fileName" -ForegroundColor Green
Write-Host "  · draft 现在是 true（只在本地预览，不会发布）。写好后改成 false。"
Write-Host "  · 本地预览： npm run dev  然后开 http://localhost:3000/writing"
Write-Host "  · 发布： git add content/posts/ ; git commit -m '新文章：$title' ; git push"
