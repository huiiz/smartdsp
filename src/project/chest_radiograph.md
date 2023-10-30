---
cover: /project/project_image/1.jpg
article: false
editLink: false
---

# 胸部 X 射线肺部疾病检测

## 项目简介

我们采用了一种新的机器学习模型，可以让计算机通过胸透照片自动诊断肺炎，其诊断准确率达到了放射科医师标准。

![](/project/project_image/2.jpg)

## 训练模型

**改进的 DensNet121 模型**

![](/project/project_image/3.jpg)
通道数加权提取:目标是确保网络能够利用增加网络本身对有价值信息的敏感性，以使得这些有价值的信息在之后的网络层中能够得到利用，而没有什么用的特征信息则被舍弃

对通道数进行压缩和激励:为了达到对通道之间的依赖关系进行精确建模以校准卷积核操作，自动获取到每个特征通道的重要程度，然后依照这个重要程度去提升有用的特征并抑制对当前任务用处不大的特征

## 实验结果

![](/project/project_image/4.jpg)
AUCS OF ROC CURVES FOR MULTI-LABEL CLASSIFICATION FOR CHESTX-RAY14
**实验结果对比**

实验表明，改进之后的模型在性能上提高了 2 个百分点

![](/project/project_image/5.jpg)
蓝框是 GT HEAT MAP 绿框是检测框

**热度图展示**
通过类似注意力机制的方法，对最后分类影响最大的区域认为是病灶区域，可以画的出每个肺部疾病的热度图

![](/project/project_image/6.jpg)
AUCS OF ROC CURVES FOR MULTI-LABEL CLASSIFICATION FOR 2H
**二院数据结果**
直接用之前的模型在二院 122 个数据上测试，平均 AUC 为 0.724。若再在二院数据上训练 2000 次，平均 AUC 为 0.825，说明我们的模型泛化能力还不够好
