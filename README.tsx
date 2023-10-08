import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';

class AnimatedViewDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scaleValue: new Animated.Value(1), // 初始化为 1，表示原始大小
    };
  }

  // 放大动画
  scaleUp = () => {
    Animated.timing(this.state.scaleValue, {
      toValue: 1.5, // 放大倍数
      duration: 500, // 动画持续时间（毫秒）
      useNativeDriver: false, // 不使用原生动画驱动
    }).start();
  };

  // 还原大小动画
  resetScale = () => {
    Animated.timing(this.state.scaleValue, {
      toValue: 1, // 还原到原始大小
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  render() {
    const { scaleValue } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Animated.View
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'lightblue',
            transform: [{ scale: scaleValue }], // 使用 transform 属性添加放大效果
          }}
        >
          {/* 这里放置你要放大的内容 */}
          <Text>放大的内容</Text>
        </Animated.View>
        <TouchableOpacity onPress={this.scaleUp}>
          <Text>放大</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.resetScale}>
          <Text>还原</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AnimatedViewDemo;
