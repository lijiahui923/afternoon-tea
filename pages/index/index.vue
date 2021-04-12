<template>
	<view class="content">
		<button type="primary" open-type="getUserInfo" @getuserinfo="getuserinfo" withCredentials="true">微信登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
		this.test()
		},
		methods: {
			getuserinfo() {
				// wx登录
				wx.login({
				success(res) {
					if (res.code) {
						//发起网络请求
						const code = res.code;
						// 获取微信用户信息
						wx.getUserInfo({
							success: function(res) {
								//用户信息
								const userInfo = res.userInfo;
								//性别 0：未知、1：男、2：女
								const { nickName, avatarUrl, gender, province, city, country } = userInfo;
									uni.setStorageSync('userInfo', userInfo);
										uni.navigateTo({
											url: './wxinfo/wxinfo'
										});
										},
										fail: res => {
											// 获取失败的去引导用户授权
											uni.showToast({
												title: '您需要授权，才能获取您的信息！'
											});
										}
									});
								} else {
									//
								}
							}
						});
					},
			test() {
				this.$api.selectList().then(res => {
				   // 获得数据 
				   console.log(res) 
				}).catch(res => {
				　　// 失败进行的操作
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
