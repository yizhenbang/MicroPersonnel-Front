<template>
  <div class="register_info">

      <el-button @click="drawer = true" type="primary" style="width:100%">
        完善其他信息
      </el-button>
      <el-drawer
        title="员工个人信息"
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose">

        <el-form ref="form" label-width="80px">
          <el-row :gutter="20">
            <el-col :span="2"></el-col>
            <el-col :span="20">
              <div class="grid-content bg-purple">
                <el-form-item label="头像">
                  <!-- 头像-->
                  <el-upload
                    class="avatar-uploader portrait"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="2"></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="10">
              <!--年龄-->
              <div class="grid-content bg-purple">
                <el-form-item label="年龄">
                  <el-input-number v-model:value="personnelInfo.personnelAge" :max="110" :min="1"
                                   controls-position="right" size="small"></el-input-number>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="15">
              <!--性别-->
              <div class="grid-content bg-purple">
                <el-form-item label="性别">
                  <el-radio v-model="personnelInfo.personnelGender" label="男">男</el-radio>
                  <el-radio v-model="personnelInfo.personnelGender" label="女">女</el-radio>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="10">
              <!--生日-->
              <div class="grid-content bg-purple">
                <el-form-item label="生日">
                  <el-date-picker
                    v-model:value="personnelInfo.birthday"
                    type="date"
                    placeholder="选择日期"
                    size="small" class="SetWidth">
                  </el-date-picker>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <!--身份证号码-->
              <div class="grid-content bg-purple">
                <el-form-item label="身份证号">
                  <el-input
                    type="text"
                    placeholder="请输入身份证号码"
                    v-model="personnelInfo.Id_number"
                    maxlength="14"
                    show-word-limit
                  >
                  </el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>


          <el-form-item label="地址">
            <el-row :gutter="20">
              <el-col :span="8">
                <!--地址-->
                <div class="grid-content bg-purple">
                  <!--省-->
                  <el-select v-model="personnelInfo.address" placeholder="请选择" size="small" class="SetWidth">
                    <el-option
                      v-for="item in province"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <!--市-->
                  <el-select v-model="personnelInfo.address" placeholder="请选择" size="small" class="SetWidth">
                    <el-option
                      v-for="item in city"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="7">
                <!--地址-->
                <div class="grid-content bg-purple">
                  <!--区/县-->
                  <el-select v-model="personnelInfo.address" placeholder="请选择" size="small" class="SetWidth">
                    <el-option
                      v-for="item in region"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </el-col>
            </el-row>
          </el-form-item>

        </el-form>
      </el-drawer>
    </div>
</template>

<script>
import "@/css/register.css"

export default {

  name: "register_info",
  data() {
    return {
      personnelInfo: {
        personnelName: this.UserProperty.personnelName,
        personnelPassword: this.UserProperty.personnelPassword,
        personnelAge: this.UserProperty.personnelAge,
        birthday: this.UserProperty.birthday,
        personnelGender: this.UserProperty.personnelGender,
        height: this.UserProperty.height,
        weight: this.UserProperty.weight,
        address: this.UserProperty.address,
        tel: this.UserProperty.tel,
        email: this.UserProperty.email,
        portrait: this.UserProperty.portrait,
        Id_number: this.UserProperty.Id_number
      },
      drawer: false,
      direction: 'rtl',
      imageUrl: "",

      /*地址数据*/
      province: [
        {
          value: '选项1',
          label: '湖南省'
        }
      ],
      city: [
        {
          value: '选项1',
          label: '长沙市'
        }
      ],
      region: [
        {
          value: '选项1',
          label: '望城区'
        }
      ],
      value: ''
    }

  }, methods: {
    handleClose(done) {
      done();
      /*this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {
        });*/
    }, handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
}
</script>

