### 弹窗
```
<template>
  <div class="drawer-wrap">
    <el-dialog ref="dialog" :title="title" :model-value="open" width="530px" append-to-body
      :close-on-click-modal="false" :destroy-on-close="true" :show-close="false" @closed="handleClosed">
      <el-form ref="formRef" class="dialog-form" :model="form" :rules="formRules" label-width="100px"
        label-position="right">
        <el-row>
          <el-col :span="24">
            <el-form-item label="城市:" prop="name">
              <el-select style="width: 100%" v-model="form.name" placeholder="城市" clearable filterable size="small">
                <el-option v-for="ct in cityList" :key="ct.value" :label="ct.label" :value="ct.value" />
              </el-select>
              <div>{{ form.name }}市</div>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="经度:" prop="longitude">
              <el-input-number style="width: 100%" v-model="form.longitude" placeholder="经度" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="纬度:" prop="latitude">
              <el-input-number style="width: 100%" v-model="form.latitude" placeholder="纬度" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleSubmitForm">确 定</el-button>
        <el-button @click="handleCancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref, watch } from "vue"
import { $debounce } from "@/utils/tools"

const emit = defineEmits(["save", "close"])
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  checkFields: {
    type: Object,
    default() {
      return {}
    },
  },
  cityList: {
    type: Array,
    default() {
      return []
    },
  }
})

const formRef = ref()

let form = ref({
  id: null,
  name: null,
  longitude: null,
  latitude: null,
  state: true,
})

watch(
  () => props.checkFields,
  (val) => {
    const newValue = Object.assign({}, { ...val })
    if (val.id) {
      newValue.state = val.state === 1
    } else {
      newValue.state = true
    }
    form.value = newValue
  }
)

const formRules = ref({
  name: [{ required: true, message: "请选择城市", trigger: "blur" }],
  longitude: [{ required: true, message: "请输入经度", trigger: "blur" }],
  latitude: [{ required: true, message: "请输入纬度", trigger: "blur" }],
})

const handleSubmitForm = $debounce(() => {
  const { name, longitude, latitude, id } = form.value
  formRef.value.validate((valid) => {
    if (valid) {
      const jsonData = {
        id,
        name,
        longitude,
        latitude,
      }
      emit("save", jsonData)
    }
  })
}, 500)

const handleCancel = () => {
  emit("close")
}

const handleClosed = () => {
  formRef.value.resetFields()
}
</script>

<style scoped lang="scss">
.dialog-form {
  width: 90%;
  margin: 0 auto;
}

.dialog-footer {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;

  .el-button {
    margin-left: 10px;
  }
}
</style>
```