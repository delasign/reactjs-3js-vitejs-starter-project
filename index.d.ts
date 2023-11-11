// Definitions to let TS understand .vs, .fs, .glsl shader files
declare module '*.glsl' {
	const value: string
	export default value
}

declare module '*.vert' {
	const value: string
	export default value
}

declare module '*.frag' {
	const value: string
	export default value
}