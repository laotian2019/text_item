<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import * as Three from 'three'
export default {
  name: 'ThreeTest',
  data () {
    return {
      chang: 0.2,
      kuan: 0.3,
      gao: 0.2,
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      plane: null,
      sphere: null
    }
  },
  methods: {
    init: function () {
      const container = document.getElementById('container')
      this.camera = new Three.PerspectiveCamera(80, container.clientWidth / container.clientHeight, 0.01, 10)
      this.camera.position.z = 0.6
      this.scene = new Three.Scene()
      // 图形
      const geometry = new Three.BoxGeometry(this.chang, this.kuan, this.gao)
      const material = new Three.MeshNormalMaterial({ color: 0x00ff00 })
      this.mesh = new Three.Mesh(geometry, material)
      this.scene.add(this.mesh)

      this.renderer = new Three.WebGLRenderer({ antialias: true })
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)

      //   this.step += 0.03// 跳动的速度
      //   this.sphere.position.x = 6 + (6 * (Math.cos(this.step)))// 左右的宽度
      //   this.sphere.position.y = 1 + (3 * Math.abs(Math.sin(this.step)))// 上下的高度

      // 创建2D平面图
      //   const planeGeometry = new Three.PlaneGeometry(0.6, 0.1, 0.1, 0.1)
      //   const planeMaterial = new Three.MeshLambertMaterial({ color: 0xffffff })
      //   const plane = new Three.Mesh(planeGeometry, planeMaterial)
      //   plane.receiveShadow = false
      //   plane.rotation.x = -0.5 * Math.PI
      //   plane.position.x = -15
      //   plane.position.y = 0
      //   plane.position.z = 0
      //   this.scene.add(this.plane)

      // 创建一个球体
      //   const sphereGeometry = new Three.SphereGeometry(2, 50, 50)
      //   const sphereMaterial = new Three.MeshLambertMaterial({ color: 0x778899 })
      //   const sphere = new Three.Mesh(sphereGeometry, sphereMaterial)
      // 球体位置
      //   sphere.position.x = -2
      //   sphere.position.y = -3
      //   sphere.position.z = -1
      //   sphere.castShadow = true
      //   // 把球体添加进去
      //   this.scene.add(this.sphere)

      // 设置背景颜色
      this.renderer.setClearColor(new Three.Color(0xFFFFFF))
      // this.renderer.setSize(window.innerWidth, window.innerHeight)

      // this.plane.receiveShadow = true
      // 设置渲染器渲染阴影效果
      //   this.renderer.setClearColor(new Three.Color(0x000000))
      //   this.renderer.setSize(window.innerWidth, window.innerHeight)
      //   this.renderer.shadowMap.enabled = true
    //   const planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1)
    //   const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccc })
    //   const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    //   this.plane.rotation.x = -0.5 * Math.PI
    //   this.plane.position.x = 15
    //   this.plane.position.y = 0
    //   this.plane.position.z = 0
    //   this.scene.add(plane)
    },
    animate: function () {
      requestAnimationFrame(this.animate)
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.02
      this.renderer.render(this.scene, this.camera)
    }
  },
  mounted () {
    this.init()
    this.animate()
  }
}
</script>
<style scoped>
  #container {
    height: 370px;
    width: 400px;
  }
</style>
