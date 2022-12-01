import { Schema, model } from "mongoose";

const processoSchema = new Schema(
	{
		documentName: {
			type: String,
			required: true,
			trim: true,
			minLength: 2,
			maxLength: 40,
		},
		status: {
			type: String,
			trim: true,
			required: true,
		},
		details: {
			type: String,
			trim: true,
		},
		dateInit: {
			type: String,
			required: true,
		},
		comments: [{ type: String }],
	},
	{
		timestamps: true,
	}
);

const ProcessoModel = model("Processo", processoSchema);

export default ProcessoModel;
