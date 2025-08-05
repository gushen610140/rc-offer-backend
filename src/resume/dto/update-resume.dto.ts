import { ApiProperty } from "@nestjs/swagger";

export class UpdateResumeDto {
    @ApiProperty({ description: '姓名', required: false })
    name?: string;

    @ApiProperty({ description: '电话号码', required: false })
    phone_number?: string;

    @ApiProperty({ description: '电子邮箱', required: false })
    email?: string;

    @ApiProperty({ description: '微信号', required: false })
    wechat_number?: string;

    @ApiProperty({ description: '所在寝室', required: false, nullable: true })
    location?: string | null;

    @ApiProperty({ description: '目标岗位', required: false })
    intent?: string;

    @ApiProperty({ description: '个人简介', required: false })
    summary?: string;

    @ApiProperty({ description: '专业', required: false })
    major?: string;

    @ApiProperty({ description: '班级简称', required: false })
    class?: string;

    @ApiProperty({ description: '技能特长，可包含编程语言、工具等', required: false })
    skills?: string;

    @ApiProperty({ description: '项目经验', required: false, nullable: true })
    project_experience?: string | null;

    @ApiProperty({ description: '证书资质，如职业认证等', required: false, nullable: true })
    certifications?: string | null;

    @ApiProperty({ description: '荣誉奖项', required: false, nullable: true })
    honor?: string | null;

    @ApiProperty({ description: '语言能力，如外语水平', required: false, nullable: true })
    language?: string | null;

    @ApiProperty({ description: '个人网站/博客', required: false, nullable: true })
    website?: string | null;

    @ApiProperty({ description: 'GitHub账号链接', required: false, nullable: true })
    github?: string | null;

    @ApiProperty({ description: '补充信息', required: false, nullable: true })
    extra_info?: string | null;
}