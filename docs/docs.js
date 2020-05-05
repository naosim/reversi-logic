var data = {
	"id": 0,
	"name": "reversi",
	"kind": 0,
	"flags": {},
	"children": [
		{
			"id": 65,
			"name": "\"node_modules/@types/board2d/dist/board/board.d\"",
			"kind": 1,
			"kindString": "Module",
			"flags": {
				"isExported": true,
				"isExternal": true
			},
			"originalName": "/Users/fujitanao/googledrive/script/simplegame/reversi/node_modules/@types/board2d/dist/board/board.d.ts",
			"children": [
				{
					"id": 152,
					"name": "Board",
					"kind": 128,
					"kindString": "Class",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"comment": {
						"shortText": "盤",
						"text": "2次元配列のラッパークラス\n空のセルにはnullが入っている\n\n"
					},
					"typeParameter": [
						{
							"id": 153,
							"name": "T",
							"kind": 131072,
							"kindString": "Type parameter",
							"flags": {
								"isExported": true
							}
						}
					],
					"children": [
						{
							"id": 155,
							"name": "constructor",
							"kind": 512,
							"kindString": "Constructor",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 156,
									"name": "new Board",
									"kind": 16384,
									"kindString": "Constructor signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 157,
											"name": "boardCore",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 105,
												"typeArguments": [
													{
														"type": "typeParameter",
														"name": "T"
													}
												],
												"name": "BoardCore"
											}
										},
										{
											"id": 158,
											"name": "skipCopy",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true,
												"isOptional": true
											},
											"type": {
												"type": "reference",
												"id": 271,
												"name": "SkipCopy"
											}
										}
									],
									"type": {
										"type": "reference",
										"id": 152,
										"name": "Board"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 94,
									"character": 13
								}
							]
						},
						{
							"id": 159,
							"name": "xSize",
							"kind": 262144,
							"kindString": "Accessor",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"getSignature": [
								{
									"id": 160,
									"name": "__get",
									"kind": 524288,
									"kindString": "Get signature",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "intrinsic",
										"name": "number"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 96,
									"character": 13
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 68,
								"name": "BoardReadable.xSize"
							}
						},
						{
							"id": 161,
							"name": "ySize",
							"kind": 262144,
							"kindString": "Accessor",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"getSignature": [
								{
									"id": 162,
									"name": "__get",
									"kind": 524288,
									"kindString": "Get signature",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "intrinsic",
										"name": "number"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 97,
									"character": 13
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 69,
								"name": "BoardReadable.ySize"
							}
						},
						{
							"id": 184,
							"name": "copy",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 185,
									"name": "copy",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 152,
										"typeArguments": [
											{
												"type": "typeParameter",
												"name": "T"
											}
										],
										"name": "Board"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 117,
									"character": 8
								}
							]
						},
						{
							"id": 181,
							"name": "exists",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 182,
									"name": "exists",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 183,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 2,
												"name": "PosReadable"
											}
										}
									],
									"type": {
										"type": "intrinsic",
										"name": "boolean"
									},
									"implementationOf": {
										"type": "reference",
										"id": 85,
										"name": "BoardReadable.exists"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 116,
									"character": 10
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 84,
								"name": "BoardReadable.exists"
							}
						},
						{
							"id": 193,
							"name": "find",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 194,
									"name": "find",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 195,
											"name": "check",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reflection",
												"declaration": {
													"id": 196,
													"name": "__type",
													"kind": 65536,
													"kindString": "Type literal",
													"flags": {
														"isExported": true
													},
													"signatures": [
														{
															"id": 197,
															"name": "__call",
															"kind": 4096,
															"kindString": "Call signature",
															"flags": {
																"isExported": true
															},
															"parameters": [
																{
																	"id": 198,
																	"name": "pos",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "reference",
																		"id": 5,
																		"name": "Pos"
																	}
																},
																{
																	"id": 199,
																	"name": "value",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "union",
																		"types": [
																			{
																				"type": "typeParameter",
																				"name": "T"
																			},
																			{
																				"type": "intrinsic",
																				"name": "null"
																			}
																		]
																	}
																}
															],
															"type": {
																"type": "intrinsic",
																"name": "boolean"
															}
														}
													],
													"sources": [
														{
															"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
															"line": 119,
															"character": 15
														}
													]
												}
											}
										}
									],
									"type": {
										"type": "union",
										"types": [
											{
												"type": "reference",
												"id": 274,
												"typeArguments": [
													{
														"type": "union",
														"types": [
															{
																"type": "typeParameter",
																"name": "T"
															},
															{
																"type": "intrinsic",
																"name": "null"
															}
														]
													}
												],
												"name": "ValueAndPos"
											},
											{
												"type": "intrinsic",
												"name": "null"
											}
										]
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 119,
									"character": 8
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 94,
								"name": "BoardReadable.find"
							}
						},
						{
							"id": 167,
							"name": "forEach",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 168,
									"name": "forEach",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 169,
											"name": "callback",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reflection",
												"declaration": {
													"id": 170,
													"name": "__type",
													"kind": 65536,
													"kindString": "Type literal",
													"flags": {
														"isExported": true
													},
													"signatures": [
														{
															"id": 171,
															"name": "__call",
															"kind": 4096,
															"kindString": "Call signature",
															"flags": {
																"isExported": true
															},
															"parameters": [
																{
																	"id": 172,
																	"name": "pos",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "reference",
																		"id": 5,
																		"name": "Pos"
																	}
																},
																{
																	"id": 173,
																	"name": "value",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "union",
																		"types": [
																			{
																				"type": "typeParameter",
																				"name": "T"
																			},
																			{
																				"type": "intrinsic",
																				"name": "null"
																			}
																		]
																	}
																}
															],
															"type": {
																"type": "intrinsic",
																"name": "void"
															}
														}
													],
													"sources": [
														{
															"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
															"line": 113,
															"character": 21
														}
													]
												}
											}
										}
									],
									"type": {
										"type": "intrinsic",
										"name": "void"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 113,
									"character": 11
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 70,
								"name": "BoardReadable.forEach"
							}
						},
						{
							"id": 200,
							"name": "getFromDrection",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 201,
									"name": "getFromDrection",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 202,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 2,
												"name": "PosReadable"
											}
										},
										{
											"id": 203,
											"name": "direction",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 48,
												"name": "Direction"
											}
										}
									],
									"type": {
										"type": "union",
										"types": [
											{
												"type": "reference",
												"id": 274,
												"typeArguments": [
													{
														"type": "union",
														"types": [
															{
																"type": "typeParameter",
																"name": "T"
															},
															{
																"type": "intrinsic",
																"name": "null"
															}
														]
													}
												],
												"name": "ValueAndPos"
											},
											{
												"type": "intrinsic",
												"name": "undefined"
											}
										]
									},
									"implementationOf": {
										"type": "reference",
										"id": 102,
										"name": "BoardReadable.getFromDrection"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 120,
									"character": 19
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 101,
								"name": "BoardReadable.getFromDrection"
							}
						},
						{
							"id": 174,
							"name": "getValue",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 175,
									"name": "getValue",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 176,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 2,
												"name": "PosReadable"
											}
										}
									],
									"type": {
										"type": "union",
										"types": [
											{
												"type": "typeParameter",
												"name": "T"
											},
											{
												"type": "intrinsic",
												"name": "null"
											},
											{
												"type": "intrinsic",
												"name": "undefined"
											}
										]
									},
									"implementationOf": {
										"type": "reference",
										"id": 78,
										"name": "BoardReadable.getValue"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 114,
									"character": 12
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 77,
								"name": "BoardReadable.getValue"
							}
						},
						{
							"id": 177,
							"name": "getValueFromXY",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 178,
									"name": "getValueFromXY",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 179,
											"name": "x",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 58,
												"name": "X"
											}
										},
										{
											"id": 180,
											"name": "y",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 62,
												"name": "Y"
											}
										}
									],
									"type": {
										"type": "union",
										"types": [
											{
												"type": "typeParameter",
												"name": "T"
											},
											{
												"type": "intrinsic",
												"name": "null"
											},
											{
												"type": "intrinsic",
												"name": "undefined"
											}
										]
									},
									"implementationOf": {
										"type": "reference",
										"id": 81,
										"name": "BoardReadable.getValueFromXY"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 115,
									"character": 18
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 80,
								"name": "BoardReadable.getValueFromXY"
							}
						},
						{
							"id": 163,
							"name": "put",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 164,
									"name": "put",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"comment": {
										"shortText": "盤に駒を置く (イミュータブル)\n盤上のセルに駒をおきます。下記では3x3の盤上の`(x, y)=(2, 2)`に`\"x\"`という駒を置いています。\n```javascript\nvar board = new board2d.Board<string>(3, 3);\nvar newBoard = board.put(new board2d.Pos(2, 2), 'x'); // 駒を置く\nconsole.log(board.getValue(new board2d.Pos(2, 2)));    // null(空)\nconsole.log(newBoard.getValue(new board2d.Pos(2, 2))); // x\n```",
										"text": "メソッドの戻り値は駒を置いた結果の盤です。元のインスタンスは変更されません。そのため上記の例の場合、`board変数`の状態は変化しません。また引数の`value`に`null`を指定した場合、そのセルは空になります。"
									},
									"parameters": [
										{
											"id": 165,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {},
											"type": {
												"type": "reference",
												"id": 2,
												"name": "PosReadable"
											}
										},
										{
											"id": 166,
											"name": "value",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {
												"text": "\n"
											},
											"type": {
												"type": "union",
												"types": [
													{
														"type": "typeParameter",
														"name": "T"
													},
													{
														"type": "intrinsic",
														"name": "null"
													}
												]
											}
										}
									],
									"type": {
										"type": "reference",
										"id": 152,
										"typeArguments": [
											{
												"type": "typeParameter",
												"name": "T"
											}
										],
										"name": "Board"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 112,
									"character": 7
								}
							]
						},
						{
							"id": 186,
							"name": "some",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 187,
									"name": "some",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 188,
											"name": "check",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reflection",
												"declaration": {
													"id": 189,
													"name": "__type",
													"kind": 65536,
													"kindString": "Type literal",
													"flags": {
														"isExported": true
													},
													"signatures": [
														{
															"id": 190,
															"name": "__call",
															"kind": 4096,
															"kindString": "Call signature",
															"flags": {
																"isExported": true
															},
															"parameters": [
																{
																	"id": 191,
																	"name": "pos",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "reference",
																		"id": 5,
																		"name": "Pos"
																	}
																},
																{
																	"id": 192,
																	"name": "value",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "union",
																		"types": [
																			{
																				"type": "typeParameter",
																				"name": "T"
																			},
																			{
																				"type": "intrinsic",
																				"name": "null"
																			}
																		]
																	}
																}
															],
															"type": {
																"type": "intrinsic",
																"name": "boolean"
															}
														}
													],
													"sources": [
														{
															"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
															"line": 118,
															"character": 15
														}
													]
												}
											}
										}
									],
									"type": {
										"type": "intrinsic",
										"name": "boolean"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 118,
									"character": 8
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 87,
								"name": "BoardReadable.some"
							}
						},
						{
							"id": 204,
							"name": "toMutable",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 205,
									"name": "toMutable",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 211,
										"typeArguments": [
											{
												"type": "typeParameter",
												"name": "T"
											}
										],
										"name": "BoardMutable"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 121,
									"character": 13
								}
							]
						},
						{
							"id": 206,
							"name": "empty",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isStatic": true,
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 207,
									"name": "empty",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"typeParameter": [
										{
											"id": 208,
											"name": "T",
											"kind": 131072,
											"kindString": "Type parameter",
											"flags": {
												"isExported": true
											}
										}
									],
									"parameters": [
										{
											"id": 209,
											"name": "xSize",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "intrinsic",
												"name": "number"
											}
										},
										{
											"id": 210,
											"name": "ySize",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "intrinsic",
												"name": "number"
											}
										}
									],
									"type": {
										"type": "reference",
										"id": 152,
										"typeArguments": [
											{
												"type": "typeParameter",
												"name": "T"
											}
										],
										"name": "Board"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 122,
									"character": 16
								}
							]
						}
					],
					"groups": [
						{
							"title": "Constructors",
							"kind": 512,
							"children": [
								155
							]
						},
						{
							"title": "Accessors",
							"kind": 262144,
							"children": [
								159,
								161
							]
						},
						{
							"title": "Methods",
							"kind": 2048,
							"children": [
								184,
								181,
								193,
								167,
								200,
								174,
								177,
								163,
								186,
								204,
								206
							]
						}
					],
					"sources": [
						{
							"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
							"line": 93,
							"character": 26
						}
					],
					"implementedTypes": [
						{
							"type": "reference",
							"id": 66,
							"typeArguments": [
								{
									"type": "typeParameter",
									"name": "T"
								}
							],
							"name": "BoardReadable"
						}
					]
				},
				{
					"id": 105,
					"name": "BoardCore",
					"kind": 128,
					"kindString": "Class",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"typeParameter": [
						{
							"id": 106,
							"name": "T",
							"kind": 131072,
							"kindString": "Type parameter",
							"flags": {
								"isExported": true
							}
						}
					],
					"children": [
						{
							"id": 111,
							"name": "constructor",
							"kind": 512,
							"kindString": "Constructor",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"comment": {
								"shortText": "盤のサイズを指定してインスタンスを生成します。下記は3x3の盤を作っています。\n```javascript\nvar board = new board2d.Board<string>(3, 3);\n```"
							},
							"signatures": [
								{
									"id": 112,
									"name": "new BoardCore",
									"kind": 16384,
									"kindString": "Constructor signature",
									"flags": {
										"isExported": true
									},
									"comment": {
										"shortText": "盤のサイズを指定してインスタンスを生成します。下記は3x3の盤を作っています。\n```javascript\nvar board = new board2d.Board<string>(3, 3);\n```"
									},
									"parameters": [
										{
											"id": 113,
											"name": "xSize",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {},
											"type": {
												"type": "intrinsic",
												"name": "number"
											}
										},
										{
											"id": 114,
											"name": "ySize",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {
												"shortText": "\n"
											},
											"type": {
												"type": "intrinsic",
												"name": "number"
											}
										}
									],
									"type": {
										"type": "reference",
										"id": 105,
										"name": "BoardCore"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 66,
									"character": 36
								}
							]
						},
						{
							"id": 110,
							"name": "values",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isExported": true,
								"isExternal": true,
								"isReadonly": true
							},
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 66,
									"character": 19
								}
							],
							"type": {
								"type": "array",
								"elementType": {
									"type": "array",
									"elementType": {
										"type": "union",
										"types": [
											{
												"type": "intrinsic",
												"name": "null"
											},
											{
												"type": "unknown",
												"name": "T"
											}
										]
									}
								}
							}
						},
						{
							"id": 108,
							"name": "xSize",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isExported": true,
								"isExternal": true,
								"isReadonly": true
							},
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 64,
									"character": 18
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "number"
							},
							"implementationOf": {
								"type": "reference",
								"id": 68,
								"name": "BoardReadable.xSize"
							}
						},
						{
							"id": 109,
							"name": "ySize",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isExported": true,
								"isExternal": true,
								"isReadonly": true
							},
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 65,
									"character": 18
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "number"
							},
							"implementationOf": {
								"type": "reference",
								"id": 69,
								"name": "BoardReadable.ySize"
							}
						},
						{
							"id": 150,
							"name": "copy",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 151,
									"name": "copy",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 105,
										"typeArguments": [
											{
												"type": "typeParameter",
												"name": "T"
											}
										],
										"name": "BoardCore"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 84,
									"character": 8
								}
							]
						},
						{
							"id": 129,
							"name": "exists",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 130,
									"name": "exists",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 131,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 2,
												"name": "PosReadable"
											}
										}
									],
									"type": {
										"type": "intrinsic",
										"name": "boolean"
									},
									"implementationOf": {
										"type": "reference",
										"id": 85,
										"name": "BoardReadable.exists"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 80,
									"character": 10
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 84,
								"name": "BoardReadable.exists"
							}
						},
						{
							"id": 139,
							"name": "find",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 140,
									"name": "find",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 141,
											"name": "check",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reflection",
												"declaration": {
													"id": 142,
													"name": "__type",
													"kind": 65536,
													"kindString": "Type literal",
													"flags": {
														"isExported": true
													},
													"signatures": [
														{
															"id": 143,
															"name": "__call",
															"kind": 4096,
															"kindString": "Call signature",
															"flags": {
																"isExported": true
															},
															"parameters": [
																{
																	"id": 144,
																	"name": "pos",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "reference",
																		"id": 5,
																		"name": "Pos"
																	}
																},
																{
																	"id": 145,
																	"name": "value",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "union",
																		"types": [
																			{
																				"type": "typeParameter",
																				"name": "T"
																			},
																			{
																				"type": "intrinsic",
																				"name": "null"
																			}
																		]
																	}
																}
															],
															"type": {
																"type": "intrinsic",
																"name": "boolean"
															}
														}
													],
													"sources": [
														{
															"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
															"line": 82,
															"character": 15
														}
													]
												}
											}
										}
									],
									"type": {
										"type": "union",
										"types": [
											{
												"type": "reference",
												"id": 274,
												"typeArguments": [
													{
														"type": "union",
														"types": [
															{
																"type": "typeParameter",
																"name": "T"
															},
															{
																"type": "intrinsic",
																"name": "null"
															}
														]
													}
												],
												"name": "ValueAndPos"
											},
											{
												"type": "intrinsic",
												"name": "null"
											}
										]
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 82,
									"character": 8
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 94,
								"name": "BoardReadable.find"
							}
						},
						{
							"id": 115,
							"name": "forEach",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 116,
									"name": "forEach",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 117,
											"name": "callback",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reflection",
												"declaration": {
													"id": 118,
													"name": "__type",
													"kind": 65536,
													"kindString": "Type literal",
													"flags": {
														"isExported": true
													},
													"signatures": [
														{
															"id": 119,
															"name": "__call",
															"kind": 4096,
															"kindString": "Call signature",
															"flags": {
																"isExported": true
															},
															"parameters": [
																{
																	"id": 120,
																	"name": "pos",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "reference",
																		"id": 5,
																		"name": "Pos"
																	}
																},
																{
																	"id": 121,
																	"name": "value",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "union",
																		"types": [
																			{
																				"type": "typeParameter",
																				"name": "T"
																			},
																			{
																				"type": "intrinsic",
																				"name": "null"
																			}
																		]
																	}
																}
															],
															"type": {
																"type": "intrinsic",
																"name": "void"
															}
														}
													],
													"sources": [
														{
															"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
															"line": 77,
															"character": 21
														}
													]
												}
											}
										}
									],
									"type": {
										"type": "intrinsic",
										"name": "void"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 77,
									"character": 11
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 70,
								"name": "BoardReadable.forEach"
							}
						},
						{
							"id": 146,
							"name": "getFromDrection",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 147,
									"name": "getFromDrection",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 148,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 2,
												"name": "PosReadable"
											}
										},
										{
											"id": 149,
											"name": "direction",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 48,
												"name": "Direction"
											}
										}
									],
									"type": {
										"type": "union",
										"types": [
											{
												"type": "reference",
												"id": 274,
												"typeArguments": [
													{
														"type": "union",
														"types": [
															{
																"type": "typeParameter",
																"name": "T"
															},
															{
																"type": "intrinsic",
																"name": "null"
															}
														]
													}
												],
												"name": "ValueAndPos"
											},
											{
												"type": "intrinsic",
												"name": "undefined"
											}
										]
									},
									"implementationOf": {
										"type": "reference",
										"id": 102,
										"name": "BoardReadable.getFromDrection"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 83,
									"character": 19
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 101,
								"name": "BoardReadable.getFromDrection"
							}
						},
						{
							"id": 122,
							"name": "getValue",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 123,
									"name": "getValue",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 124,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 2,
												"name": "PosReadable"
											}
										}
									],
									"type": {
										"type": "union",
										"types": [
											{
												"type": "typeParameter",
												"name": "T"
											},
											{
												"type": "intrinsic",
												"name": "null"
											},
											{
												"type": "intrinsic",
												"name": "undefined"
											}
										]
									},
									"implementationOf": {
										"type": "reference",
										"id": 78,
										"name": "BoardReadable.getValue"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 78,
									"character": 12
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 77,
								"name": "BoardReadable.getValue"
							}
						},
						{
							"id": 125,
							"name": "getValueFromXY",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 126,
									"name": "getValueFromXY",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 127,
											"name": "x",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 58,
												"name": "X"
											}
										},
										{
											"id": 128,
											"name": "y",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 62,
												"name": "Y"
											}
										}
									],
									"type": {
										"type": "union",
										"types": [
											{
												"type": "typeParameter",
												"name": "T"
											},
											{
												"type": "intrinsic",
												"name": "null"
											},
											{
												"type": "intrinsic",
												"name": "undefined"
											}
										]
									},
									"implementationOf": {
										"type": "reference",
										"id": 81,
										"name": "BoardReadable.getValueFromXY"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 79,
									"character": 18
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 80,
								"name": "BoardReadable.getValueFromXY"
							}
						},
						{
							"id": 132,
							"name": "some",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 133,
									"name": "some",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 134,
											"name": "check",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reflection",
												"declaration": {
													"id": 135,
													"name": "__type",
													"kind": 65536,
													"kindString": "Type literal",
													"flags": {
														"isExported": true
													},
													"signatures": [
														{
															"id": 136,
															"name": "__call",
															"kind": 4096,
															"kindString": "Call signature",
															"flags": {
																"isExported": true
															},
															"parameters": [
																{
																	"id": 137,
																	"name": "pos",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "reference",
																		"id": 5,
																		"name": "Pos"
																	}
																},
																{
																	"id": 138,
																	"name": "value",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "union",
																		"types": [
																			{
																				"type": "typeParameter",
																				"name": "T"
																			},
																			{
																				"type": "intrinsic",
																				"name": "null"
																			}
																		]
																	}
																}
															],
															"type": {
																"type": "intrinsic",
																"name": "boolean"
															}
														}
													],
													"sources": [
														{
															"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
															"line": 81,
															"character": 15
														}
													]
												}
											}
										}
									],
									"type": {
										"type": "intrinsic",
										"name": "boolean"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 81,
									"character": 8
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 87,
								"name": "BoardReadable.some"
							}
						}
					],
					"groups": [
						{
							"title": "Constructors",
							"kind": 512,
							"children": [
								111
							]
						},
						{
							"title": "Properties",
							"kind": 1024,
							"children": [
								110,
								108,
								109
							]
						},
						{
							"title": "Methods",
							"kind": 2048,
							"children": [
								150,
								129,
								139,
								115,
								146,
								122,
								125,
								132
							]
						}
					],
					"sources": [
						{
							"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
							"line": 62,
							"character": 30
						}
					],
					"implementedTypes": [
						{
							"type": "reference",
							"id": 66,
							"typeArguments": [
								{
									"type": "typeParameter",
									"name": "T"
								}
							],
							"name": "BoardReadable"
						}
					]
				},
				{
					"id": 211,
					"name": "BoardMutable",
					"kind": 128,
					"kindString": "Class",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"typeParameter": [
						{
							"id": 212,
							"name": "T",
							"kind": 131072,
							"kindString": "Type parameter",
							"flags": {
								"isExported": true
							}
						}
					],
					"children": [
						{
							"id": 214,
							"name": "constructor",
							"kind": 512,
							"kindString": "Constructor",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 215,
									"name": "new BoardMutable",
									"kind": 16384,
									"kindString": "Constructor signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 216,
											"name": "boardCore",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 105,
												"typeArguments": [
													{
														"type": "typeParameter",
														"name": "T"
													}
												],
												"name": "BoardCore"
											}
										},
										{
											"id": 217,
											"name": "skipCopy",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true,
												"isOptional": true
											},
											"type": {
												"type": "reference",
												"id": 271,
												"name": "SkipCopy"
											}
										}
									],
									"type": {
										"type": "reference",
										"id": 211,
										"name": "BoardMutable"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 125,
									"character": 28
								}
							]
						},
						{
							"id": 213,
							"name": "boardCore",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 125,
									"character": 13
								}
							],
							"type": {
								"type": "reference",
								"id": 105,
								"typeArguments": [
									{
										"type": "typeParameter",
										"name": "T"
									}
								],
								"name": "BoardCore"
							}
						},
						{
							"id": 218,
							"name": "xSize",
							"kind": 262144,
							"kindString": "Accessor",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"getSignature": [
								{
									"id": 219,
									"name": "__get",
									"kind": 524288,
									"kindString": "Get signature",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "intrinsic",
										"name": "number"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 127,
									"character": 13
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 68,
								"name": "BoardReadable.xSize"
							}
						},
						{
							"id": 220,
							"name": "ySize",
							"kind": 262144,
							"kindString": "Accessor",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"getSignature": [
								{
									"id": 221,
									"name": "__get",
									"kind": 524288,
									"kindString": "Get signature",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "intrinsic",
										"name": "number"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 128,
									"character": 13
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 69,
								"name": "BoardReadable.ySize"
							}
						},
						{
							"id": 243,
							"name": "copy",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 244,
									"name": "copy",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 152,
										"typeArguments": [
											{
												"type": "typeParameter",
												"name": "T"
											}
										],
										"name": "Board"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 140,
									"character": 8
								}
							]
						},
						{
							"id": 240,
							"name": "exists",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 241,
									"name": "exists",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 242,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 2,
												"name": "PosReadable"
											}
										}
									],
									"type": {
										"type": "intrinsic",
										"name": "boolean"
									},
									"implementationOf": {
										"type": "reference",
										"id": 85,
										"name": "BoardReadable.exists"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 139,
									"character": 10
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 84,
								"name": "BoardReadable.exists"
							}
						},
						{
							"id": 252,
							"name": "find",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 253,
									"name": "find",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 254,
											"name": "check",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reflection",
												"declaration": {
													"id": 255,
													"name": "__type",
													"kind": 65536,
													"kindString": "Type literal",
													"flags": {
														"isExported": true
													},
													"signatures": [
														{
															"id": 256,
															"name": "__call",
															"kind": 4096,
															"kindString": "Call signature",
															"flags": {
																"isExported": true
															},
															"parameters": [
																{
																	"id": 257,
																	"name": "pos",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "reference",
																		"id": 5,
																		"name": "Pos"
																	}
																},
																{
																	"id": 258,
																	"name": "value",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "union",
																		"types": [
																			{
																				"type": "typeParameter",
																				"name": "T"
																			},
																			{
																				"type": "intrinsic",
																				"name": "null"
																			}
																		]
																	}
																}
															],
															"type": {
																"type": "intrinsic",
																"name": "boolean"
															}
														}
													],
													"sources": [
														{
															"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
															"line": 142,
															"character": 15
														}
													]
												}
											}
										}
									],
									"type": {
										"type": "union",
										"types": [
											{
												"type": "reference",
												"id": 274,
												"typeArguments": [
													{
														"type": "union",
														"types": [
															{
																"type": "typeParameter",
																"name": "T"
															},
															{
																"type": "intrinsic",
																"name": "null"
															}
														]
													}
												],
												"name": "ValueAndPos"
											},
											{
												"type": "intrinsic",
												"name": "null"
											}
										]
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 142,
									"character": 8
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 94,
								"name": "BoardReadable.find"
							}
						},
						{
							"id": 226,
							"name": "forEach",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 227,
									"name": "forEach",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 228,
											"name": "callback",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reflection",
												"declaration": {
													"id": 229,
													"name": "__type",
													"kind": 65536,
													"kindString": "Type literal",
													"flags": {
														"isExported": true
													},
													"signatures": [
														{
															"id": 230,
															"name": "__call",
															"kind": 4096,
															"kindString": "Call signature",
															"flags": {
																"isExported": true
															},
															"parameters": [
																{
																	"id": 231,
																	"name": "pos",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "reference",
																		"id": 5,
																		"name": "Pos"
																	}
																},
																{
																	"id": 232,
																	"name": "value",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "union",
																		"types": [
																			{
																				"type": "typeParameter",
																				"name": "T"
																			},
																			{
																				"type": "intrinsic",
																				"name": "null"
																			}
																		]
																	}
																}
															],
															"type": {
																"type": "intrinsic",
																"name": "void"
															}
														}
													],
													"sources": [
														{
															"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
															"line": 136,
															"character": 21
														}
													]
												}
											}
										}
									],
									"type": {
										"type": "intrinsic",
										"name": "void"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 136,
									"character": 11
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 70,
								"name": "BoardReadable.forEach"
							}
						},
						{
							"id": 259,
							"name": "getFromDrection",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 260,
									"name": "getFromDrection",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 261,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 2,
												"name": "PosReadable"
											}
										},
										{
											"id": 262,
											"name": "direction",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 48,
												"name": "Direction"
											}
										}
									],
									"type": {
										"type": "union",
										"types": [
											{
												"type": "reference",
												"id": 274,
												"typeArguments": [
													{
														"type": "union",
														"types": [
															{
																"type": "typeParameter",
																"name": "T"
															},
															{
																"type": "intrinsic",
																"name": "null"
															}
														]
													}
												],
												"name": "ValueAndPos"
											},
											{
												"type": "intrinsic",
												"name": "undefined"
											}
										]
									},
									"implementationOf": {
										"type": "reference",
										"id": 102,
										"name": "BoardReadable.getFromDrection"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 143,
									"character": 19
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 101,
								"name": "BoardReadable.getFromDrection"
							}
						},
						{
							"id": 233,
							"name": "getValue",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 234,
									"name": "getValue",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 235,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 2,
												"name": "PosReadable"
											}
										}
									],
									"type": {
										"type": "union",
										"types": [
											{
												"type": "typeParameter",
												"name": "T"
											},
											{
												"type": "intrinsic",
												"name": "null"
											},
											{
												"type": "intrinsic",
												"name": "undefined"
											}
										]
									},
									"implementationOf": {
										"type": "reference",
										"id": 78,
										"name": "BoardReadable.getValue"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 137,
									"character": 12
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 77,
								"name": "BoardReadable.getValue"
							}
						},
						{
							"id": 236,
							"name": "getValueFromXY",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 237,
									"name": "getValueFromXY",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 238,
											"name": "x",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 58,
												"name": "X"
											}
										},
										{
											"id": 239,
											"name": "y",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 62,
												"name": "Y"
											}
										}
									],
									"type": {
										"type": "union",
										"types": [
											{
												"type": "typeParameter",
												"name": "T"
											},
											{
												"type": "intrinsic",
												"name": "null"
											},
											{
												"type": "intrinsic",
												"name": "undefined"
											}
										]
									},
									"implementationOf": {
										"type": "reference",
										"id": 81,
										"name": "BoardReadable.getValueFromXY"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 138,
									"character": 18
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 80,
								"name": "BoardReadable.getValueFromXY"
							}
						},
						{
							"id": 222,
							"name": "put",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 223,
									"name": "put",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"comment": {
										"shortText": "盤を更新する"
									},
									"parameters": [
										{
											"id": 224,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {},
											"type": {
												"type": "reference",
												"id": 2,
												"name": "PosReadable"
											}
										},
										{
											"id": 225,
											"name": "value",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {
												"text": "\n"
											},
											"type": {
												"type": "union",
												"types": [
													{
														"type": "typeParameter",
														"name": "T"
													},
													{
														"type": "intrinsic",
														"name": "null"
													}
												]
											}
										}
									],
									"type": {
										"type": "reference",
										"id": 211,
										"typeArguments": [
											{
												"type": "typeParameter",
												"name": "T"
											}
										],
										"name": "BoardMutable"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 135,
									"character": 7
								}
							]
						},
						{
							"id": 245,
							"name": "some",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 246,
									"name": "some",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 247,
											"name": "check",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reflection",
												"declaration": {
													"id": 248,
													"name": "__type",
													"kind": 65536,
													"kindString": "Type literal",
													"flags": {
														"isExported": true
													},
													"signatures": [
														{
															"id": 249,
															"name": "__call",
															"kind": 4096,
															"kindString": "Call signature",
															"flags": {
																"isExported": true
															},
															"parameters": [
																{
																	"id": 250,
																	"name": "pos",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "reference",
																		"id": 5,
																		"name": "Pos"
																	}
																},
																{
																	"id": 251,
																	"name": "value",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "union",
																		"types": [
																			{
																				"type": "typeParameter",
																				"name": "T"
																			},
																			{
																				"type": "intrinsic",
																				"name": "null"
																			}
																		]
																	}
																}
															],
															"type": {
																"type": "intrinsic",
																"name": "boolean"
															}
														}
													],
													"sources": [
														{
															"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
															"line": 141,
															"character": 15
														}
													]
												}
											}
										}
									],
									"type": {
										"type": "intrinsic",
										"name": "boolean"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 141,
									"character": 8
								}
							],
							"implementationOf": {
								"type": "reference",
								"id": 87,
								"name": "BoardReadable.some"
							}
						},
						{
							"id": 268,
							"name": "toImmutable",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 269,
									"name": "toImmutable",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 152,
										"typeArguments": [
											{
												"type": "typeParameter",
												"name": "T"
											}
										],
										"name": "Board"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 145,
									"character": 15
								}
							]
						},
						{
							"id": 263,
							"name": "empty",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isStatic": true,
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 264,
									"name": "empty",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"typeParameter": [
										{
											"id": 265,
											"name": "T",
											"kind": 131072,
											"kindString": "Type parameter",
											"flags": {
												"isExported": true
											}
										}
									],
									"parameters": [
										{
											"id": 266,
											"name": "xSize",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "intrinsic",
												"name": "number"
											}
										},
										{
											"id": 267,
											"name": "ySize",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "intrinsic",
												"name": "number"
											}
										}
									],
									"type": {
										"type": "reference",
										"id": 211,
										"typeArguments": [
											{
												"type": "typeParameter",
												"name": "T"
											}
										],
										"name": "BoardMutable"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 144,
									"character": 16
								}
							]
						}
					],
					"groups": [
						{
							"title": "Constructors",
							"kind": 512,
							"children": [
								214
							]
						},
						{
							"title": "Properties",
							"kind": 1024,
							"children": [
								213
							]
						},
						{
							"title": "Accessors",
							"kind": 262144,
							"children": [
								218,
								220
							]
						},
						{
							"title": "Methods",
							"kind": 2048,
							"children": [
								243,
								240,
								252,
								226,
								259,
								233,
								236,
								222,
								245,
								268,
								263
							]
						}
					],
					"sources": [
						{
							"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
							"line": 124,
							"character": 33
						}
					],
					"implementedTypes": [
						{
							"type": "reference",
							"id": 66,
							"typeArguments": [
								{
									"type": "typeParameter",
									"name": "T"
								}
							],
							"name": "BoardReadable"
						}
					]
				},
				{
					"id": 66,
					"name": "BoardReadable",
					"kind": 256,
					"kindString": "Interface",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"typeParameter": [
						{
							"id": 67,
							"name": "T",
							"kind": 131072,
							"kindString": "Type parameter",
							"flags": {
								"isExported": true
							}
						}
					],
					"children": [
						{
							"id": 68,
							"name": "xSize",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isExported": true,
								"isExternal": true,
								"isReadonly": true
							},
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 14,
									"character": 18
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "number"
							}
						},
						{
							"id": 69,
							"name": "ySize",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isExported": true,
								"isExternal": true,
								"isReadonly": true
							},
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 15,
									"character": 18
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "number"
							}
						},
						{
							"id": 84,
							"name": "exists",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 85,
									"name": "exists",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"comment": {
										"shortText": "指定した位置に駒があるかどうかを取得する",
										"text": "駒がある場合はtrueを返す。\n駒がない、または、位置が盤の外側の場合、falseを返す。"
									},
									"parameters": [
										{
											"id": 86,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {
												"text": "\n"
											},
											"type": {
												"type": "reference",
												"id": 2,
												"name": "PosReadable"
											}
										}
									],
									"type": {
										"type": "intrinsic",
										"name": "boolean"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 52,
									"character": 10
								}
							]
						},
						{
							"id": 94,
							"name": "find",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 95,
									"name": "find",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 96,
											"name": "check",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reflection",
												"declaration": {
													"id": 97,
													"name": "__type",
													"kind": 65536,
													"kindString": "Type literal",
													"flags": {
														"isExported": true
													},
													"signatures": [
														{
															"id": 98,
															"name": "__call",
															"kind": 4096,
															"kindString": "Call signature",
															"flags": {
																"isExported": true
															},
															"parameters": [
																{
																	"id": 99,
																	"name": "pos",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "reference",
																		"id": 5,
																		"name": "Pos"
																	}
																},
																{
																	"id": 100,
																	"name": "value",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "union",
																		"types": [
																			{
																				"type": "typeParameter",
																				"name": "T"
																			},
																			{
																				"type": "intrinsic",
																				"name": "null"
																			}
																		]
																	}
																}
															],
															"type": {
																"type": "intrinsic",
																"name": "boolean"
															}
														}
													],
													"sources": [
														{
															"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
															"line": 54,
															"character": 15
														}
													]
												}
											}
										}
									],
									"type": {
										"type": "union",
										"types": [
											{
												"type": "reference",
												"id": 274,
												"typeArguments": [
													{
														"type": "union",
														"types": [
															{
																"type": "typeParameter",
																"name": "T"
															},
															{
																"type": "intrinsic",
																"name": "null"
															}
														]
													}
												],
												"name": "ValueAndPos"
											},
											{
												"type": "intrinsic",
												"name": "null"
											}
										]
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 54,
									"character": 8
								}
							]
						},
						{
							"id": 70,
							"name": "forEach",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 71,
									"name": "forEach",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"comment": {
										"shortText": "callback関数を、盤上の各セルに対して一度ずつ実行する"
									},
									"parameters": [
										{
											"id": 72,
											"name": "callback",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {
												"text": "\n"
											},
											"type": {
												"type": "reflection",
												"declaration": {
													"id": 73,
													"name": "__type",
													"kind": 65536,
													"kindString": "Type literal",
													"flags": {
														"isExported": true
													},
													"signatures": [
														{
															"id": 74,
															"name": "__call",
															"kind": 4096,
															"kindString": "Call signature",
															"flags": {
																"isExported": true
															},
															"parameters": [
																{
																	"id": 75,
																	"name": "pos",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "reference",
																		"id": 5,
																		"name": "Pos"
																	}
																},
																{
																	"id": 76,
																	"name": "value",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "union",
																		"types": [
																			{
																				"type": "typeParameter",
																				"name": "T"
																			},
																			{
																				"type": "intrinsic",
																				"name": "null"
																			}
																		]
																	}
																}
															],
															"type": {
																"type": "intrinsic",
																"name": "void"
															}
														}
													],
													"sources": [
														{
															"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
															"line": 20,
															"character": 21
														}
													]
												}
											}
										}
									],
									"type": {
										"type": "intrinsic",
										"name": "void"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 20,
									"character": 11
								}
							]
						},
						{
							"id": 101,
							"name": "getFromDrection",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 102,
									"name": "getFromDrection",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"comment": {
										"shortText": "posからdirectionの方向に1歩進んだ場所を取得する"
									},
									"parameters": [
										{
											"id": 103,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {},
											"type": {
												"type": "reference",
												"id": 2,
												"name": "PosReadable"
											}
										},
										{
											"id": 104,
											"name": "direction",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {
												"text": "\n"
											},
											"type": {
												"type": "reference",
												"id": 48,
												"name": "Direction"
											}
										}
									],
									"type": {
										"type": "union",
										"types": [
											{
												"type": "reference",
												"id": 274,
												"typeArguments": [
													{
														"type": "union",
														"types": [
															{
																"type": "typeParameter",
																"name": "T"
															},
															{
																"type": "intrinsic",
																"name": "null"
															}
														]
													}
												],
												"name": "ValueAndPos"
											},
											{
												"type": "intrinsic",
												"name": "undefined"
											}
										]
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 60,
									"character": 19
								}
							]
						},
						{
							"id": 77,
							"name": "getValue",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 78,
									"name": "getValue",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"comment": {
										"shortText": "指定した位置にある駒を取得する",
										"text": "指定した位置が空の場合はnullを返す。盤の外側の場合はundefinedを返す。\n```javascript\nvar board = new board2d.Board<string>(2, 2).put(new board2d.Pos(1, 1), 'x');\nvar a = board.getValue(new board2d.Pos(1, 1)); // 'x'\nvar b = board.getValue(new board2d.Pos(0, 0)); // null\nvar c = board.getValue(new board2d.Pos(-1, -1)); // undefined\n```\n",
										"returns": "空の場合はnullを返す。盤の外側の場合はundefinedを返す。\n"
									},
									"parameters": [
										{
											"id": 79,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {},
											"type": {
												"type": "reference",
												"id": 2,
												"name": "PosReadable"
											}
										}
									],
									"type": {
										"type": "union",
										"types": [
											{
												"type": "typeParameter",
												"name": "T"
											},
											{
												"type": "intrinsic",
												"name": "null"
											},
											{
												"type": "intrinsic",
												"name": "undefined"
											}
										]
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 35,
									"character": 12
								}
							]
						},
						{
							"id": 80,
							"name": "getValueFromXY",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 81,
									"name": "getValueFromXY",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"comment": {
										"shortText": "指定した位置にある駒を取得する",
										"text": "引数がx, yであること以外は、`getValue()`と同じ。",
										"returns": "空の場合はnullを返す。盤の外側の場合、undefinedを返す。\n"
									},
									"parameters": [
										{
											"id": 82,
											"name": "x",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {},
											"type": {
												"type": "reference",
												"id": 58,
												"name": "X"
											}
										},
										{
											"id": 83,
											"name": "y",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {},
											"type": {
												"type": "reference",
												"id": 62,
												"name": "Y"
											}
										}
									],
									"type": {
										"type": "union",
										"types": [
											{
												"type": "typeParameter",
												"name": "T"
											},
											{
												"type": "intrinsic",
												"name": "null"
											},
											{
												"type": "intrinsic",
												"name": "undefined"
											}
										]
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 44,
									"character": 18
								}
							]
						},
						{
							"id": 87,
							"name": "some",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 88,
									"name": "some",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 89,
											"name": "check",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reflection",
												"declaration": {
													"id": 90,
													"name": "__type",
													"kind": 65536,
													"kindString": "Type literal",
													"flags": {
														"isExported": true
													},
													"signatures": [
														{
															"id": 91,
															"name": "__call",
															"kind": 4096,
															"kindString": "Call signature",
															"flags": {
																"isExported": true
															},
															"parameters": [
																{
																	"id": 92,
																	"name": "pos",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "reference",
																		"id": 5,
																		"name": "Pos"
																	}
																},
																{
																	"id": 93,
																	"name": "value",
																	"kind": 32768,
																	"kindString": "Parameter",
																	"flags": {
																		"isExported": true
																	},
																	"type": {
																		"type": "union",
																		"types": [
																			{
																				"type": "typeParameter",
																				"name": "T"
																			},
																			{
																				"type": "intrinsic",
																				"name": "null"
																			}
																		]
																	}
																}
															],
															"type": {
																"type": "intrinsic",
																"name": "boolean"
															}
														}
													],
													"sources": [
														{
															"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
															"line": 53,
															"character": 15
														}
													]
												}
											}
										}
									],
									"type": {
										"type": "intrinsic",
										"name": "boolean"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 53,
									"character": 8
								}
							]
						}
					],
					"groups": [
						{
							"title": "Properties",
							"kind": 1024,
							"children": [
								68,
								69
							]
						},
						{
							"title": "Methods",
							"kind": 2048,
							"children": [
								84,
								94,
								70,
								101,
								77,
								80,
								87
							]
						}
					],
					"sources": [
						{
							"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
							"line": 13,
							"character": 30
						}
					],
					"implementedBy": [
						{
							"type": "reference",
							"id": 152,
							"name": "Board"
						},
						{
							"type": "reference",
							"id": 105,
							"name": "BoardCore"
						},
						{
							"type": "reference",
							"id": 211,
							"name": "BoardMutable"
						}
					]
				},
				{
					"id": 271,
					"name": "SkipCopy",
					"kind": 4194304,
					"kindString": "Type alias",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"comment": {
						"shortText": "コピーを省略するフラグ\nboolean型の拡張"
					},
					"sources": [
						{
							"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
							"line": 10,
							"character": 28
						}
					],
					"type": {
						"type": "intersection",
						"types": [
							{
								"type": "intrinsic",
								"name": "boolean"
							},
							{
								"type": "reflection",
								"declaration": {
									"id": 272,
									"name": "__type",
									"kind": 65536,
									"kindString": "Type literal",
									"flags": {
										"isExported": true
									},
									"children": [
										{
											"id": 273,
											"name": "[SkipCopyNominality]",
											"kind": 32,
											"kindString": "Variable",
											"flags": {
												"isExported": true,
												"isExternal": true
											},
											"sources": [
												{
													"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
													"line": 11,
													"character": 24
												}
											],
											"type": {
												"type": "intrinsic",
												"name": "never"
											}
										}
									],
									"groups": [
										{
											"title": "Variables",
											"kind": 32,
											"children": [
												273
											]
										}
									],
									"sources": [
										{
											"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
											"line": 10,
											"character": 40
										}
									]
								}
							}
						]
					}
				},
				{
					"id": 274,
					"name": "ValueAndPos",
					"kind": 4194304,
					"kindString": "Type alias",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"typeParameter": [
						{
							"id": 275,
							"name": "T",
							"kind": 131072,
							"kindString": "Type parameter",
							"flags": {
								"isExported": true
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
							"line": 147,
							"character": 31
						}
					],
					"type": {
						"type": "reflection",
						"declaration": {
							"id": 276,
							"name": "__type",
							"kind": 65536,
							"kindString": "Type literal",
							"flags": {
								"isExported": true
							},
							"children": [
								{
									"id": 277,
									"name": "pos",
									"kind": 32,
									"kindString": "Variable",
									"flags": {
										"isExported": true,
										"isExternal": true,
										"isReadonly": true
									},
									"sources": [
										{
											"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
											"line": 148,
											"character": 16
										}
									],
									"type": {
										"type": "reference",
										"id": 5,
										"name": "Pos"
									}
								},
								{
									"id": 278,
									"name": "value",
									"kind": 32,
									"kindString": "Variable",
									"flags": {
										"isExported": true,
										"isExternal": true,
										"isReadonly": true
									},
									"sources": [
										{
											"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
											"line": 149,
											"character": 18
										}
									],
									"type": {
										"type": "typeParameter",
										"name": "T"
									}
								}
							],
							"groups": [
								{
									"title": "Variables",
									"kind": 32,
									"children": [
										277,
										278
									]
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
									"line": 147,
									"character": 36
								}
							]
						}
					}
				}
			],
			"groups": [
				{
					"title": "Classes",
					"kind": 128,
					"children": [
						152,
						105,
						211
					]
				},
				{
					"title": "Interfaces",
					"kind": 256,
					"children": [
						66
					]
				},
				{
					"title": "Type aliases",
					"kind": 4194304,
					"children": [
						271,
						274
					]
				}
			],
			"sources": [
				{
					"fileName": "node_modules/@types/board2d/dist/board/board.d.ts",
					"line": 1,
					"character": 0
				}
			]
		},
		{
			"id": 279,
			"name": "\"node_modules/@types/board2d/dist/index.d\"",
			"kind": 1,
			"kindString": "Module",
			"flags": {
				"isExported": true,
				"isExternal": true
			},
			"originalName": "/Users/fujitanao/googledrive/script/simplegame/reversi/node_modules/@types/board2d/dist/index.d.ts",
			"children": [
				{
					"id": 290,
					"name": "Board",
					"kind": 16777216,
					"kindString": "Reference",
					"flags": {
						"isExported": true
					},
					"target": 152
				},
				{
					"id": 289,
					"name": "BoardCore",
					"kind": 16777216,
					"kindString": "Reference",
					"flags": {
						"isExported": true
					},
					"target": 105
				},
				{
					"id": 291,
					"name": "BoardMutable",
					"kind": 16777216,
					"kindString": "Reference",
					"flags": {
						"isExported": true
					},
					"target": 211
				},
				{
					"id": 288,
					"name": "BoardReadable",
					"kind": 16777216,
					"kindString": "Reference",
					"flags": {
						"isExported": true
					},
					"target": 66
				},
				{
					"id": 286,
					"name": "Direction",
					"kind": 16777216,
					"kindString": "Reference",
					"flags": {
						"isExported": true
					},
					"target": 48
				},
				{
					"id": 284,
					"name": "Pos",
					"kind": 16777216,
					"kindString": "Reference",
					"flags": {
						"isExported": true
					},
					"target": 5
				},
				{
					"id": 285,
					"name": "PosMutable",
					"kind": 16777216,
					"kindString": "Reference",
					"flags": {
						"isExported": true
					},
					"target": 28
				},
				{
					"id": 283,
					"name": "PosReadable",
					"kind": 16777216,
					"kindString": "Reference",
					"flags": {
						"isExported": true
					},
					"target": 2
				},
				{
					"id": 287,
					"name": "SkipCopy",
					"kind": 16777216,
					"kindString": "Reference",
					"flags": {
						"isExported": true
					},
					"target": 271
				},
				{
					"id": 292,
					"name": "ValueAndPos",
					"kind": 16777216,
					"kindString": "Reference",
					"flags": {
						"isExported": true
					},
					"target": 274
				},
				{
					"id": 281,
					"name": "X",
					"kind": 16777216,
					"kindString": "Reference",
					"flags": {
						"isExported": true
					},
					"target": 58
				},
				{
					"id": 282,
					"name": "Y",
					"kind": 16777216,
					"kindString": "Reference",
					"flags": {
						"isExported": true
					},
					"target": 62
				},
				{
					"id": 280,
					"name": "version",
					"kind": 32,
					"kindString": "Variable",
					"flags": {
						"isExported": true,
						"isExternal": true,
						"isConst": true
					},
					"comment": {
						"shortText": "盤ライブラリ\nバージョン: 3.2.0"
					},
					"sources": [
						{
							"fileName": "node_modules/@types/board2d/dist/index.d.ts",
							"line": 5,
							"character": 28
						}
					],
					"type": {
						"type": "stringLiteral",
						"value": "3.2.0"
					},
					"defaultValue": "\"3.2.0\""
				}
			],
			"groups": [
				{
					"title": "References",
					"kind": 16777216,
					"children": [
						290,
						289,
						291,
						288,
						286,
						284,
						285,
						283,
						287,
						292,
						281,
						282
					]
				},
				{
					"title": "Variables",
					"kind": 32,
					"children": [
						280
					]
				}
			],
			"sources": [
				{
					"fileName": "node_modules/@types/board2d/dist/index.d.ts",
					"line": 1,
					"character": 0
				}
			]
		},
		{
			"id": 1,
			"name": "\"node_modules/@types/board2d/dist/pos/pos.d\"",
			"kind": 1,
			"kindString": "Module",
			"flags": {
				"isExported": true,
				"isExternal": true
			},
			"originalName": "/Users/fujitanao/googledrive/script/simplegame/reversi/node_modules/@types/board2d/dist/pos/pos.d.ts",
			"children": [
				{
					"id": 48,
					"name": "Direction",
					"kind": 4,
					"kindString": "Enumeration",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"comment": {
						"shortText": "方向"
					},
					"children": [
						{
							"id": 50,
							"name": "down",
							"kind": 16,
							"kindString": "Enumeration member",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 80,
									"character": 8
								}
							],
							"defaultValue": "1"
						},
						{
							"id": 55,
							"name": "downLeft",
							"kind": 16,
							"kindString": "Enumeration member",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 85,
									"character": 12
								}
							],
							"defaultValue": "6"
						},
						{
							"id": 56,
							"name": "downRight",
							"kind": 16,
							"kindString": "Enumeration member",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 86,
									"character": 13
								}
							],
							"defaultValue": "7"
						},
						{
							"id": 51,
							"name": "left",
							"kind": 16,
							"kindString": "Enumeration member",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 81,
									"character": 8
								}
							],
							"defaultValue": "2"
						},
						{
							"id": 52,
							"name": "right",
							"kind": 16,
							"kindString": "Enumeration member",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 82,
									"character": 9
								}
							],
							"defaultValue": "3"
						},
						{
							"id": 49,
							"name": "up",
							"kind": 16,
							"kindString": "Enumeration member",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 79,
									"character": 6
								}
							],
							"defaultValue": "0"
						},
						{
							"id": 53,
							"name": "upLeft",
							"kind": 16,
							"kindString": "Enumeration member",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 83,
									"character": 10
								}
							],
							"defaultValue": "4"
						},
						{
							"id": 54,
							"name": "upRight",
							"kind": 16,
							"kindString": "Enumeration member",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 84,
									"character": 11
								}
							],
							"defaultValue": "5"
						}
					],
					"groups": [
						{
							"title": "Enumeration members",
							"kind": 16,
							"children": [
								50,
								55,
								56,
								51,
								52,
								49,
								53,
								54
							]
						}
					],
					"sources": [
						{
							"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
							"line": 78,
							"character": 29
						}
					]
				},
				{
					"id": 5,
					"name": "Pos",
					"kind": 128,
					"kindString": "Class",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"comment": {
						"shortText": "位置(不変)"
					},
					"children": [
						{
							"id": 8,
							"name": "constructor",
							"kind": 512,
							"kindString": "Constructor",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 9,
									"name": "new Pos",
									"kind": 16384,
									"kindString": "Constructor signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 10,
											"name": "x",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 58,
												"name": "X"
											}
										},
										{
											"id": 11,
											"name": "y",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 62,
												"name": "Y"
											}
										}
									],
									"type": {
										"type": "reference",
										"id": 5,
										"name": "Pos"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 35,
									"character": 18
								}
							]
						},
						{
							"id": 6,
							"name": "x",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isExported": true,
								"isExternal": true,
								"isReadonly": true
							},
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 34,
									"character": 14
								}
							],
							"type": {
								"type": "reference",
								"id": 58,
								"name": "X"
							},
							"implementationOf": {
								"type": "reference",
								"id": 3,
								"name": "PosReadable.x"
							}
						},
						{
							"id": 7,
							"name": "y",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isExported": true,
								"isExternal": true,
								"isReadonly": true
							},
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 35,
									"character": 14
								}
							],
							"type": {
								"type": "reference",
								"id": 62,
								"name": "Y"
							},
							"implementationOf": {
								"type": "reference",
								"id": 4,
								"name": "PosReadable.y"
							}
						},
						{
							"id": 12,
							"name": "add",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 13,
									"name": "add",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 14,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 2,
												"name": "PosReadable"
											}
										}
									],
									"type": {
										"type": "reference",
										"id": 5,
										"name": "Pos"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 37,
									"character": 7
								}
							]
						},
						{
							"id": 19,
							"name": "addDirection",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 20,
									"name": "addDirection",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"comment": {
										"shortText": "方向を加えた位置を取得する",
										"text": "現在(x, y) = (0, 0)にいる場合\nup なら    ( 0, -1)\ndown なら  ( 0,  1)\nright なら ( 1,  0)\nleft なら  (-1,  0)"
									},
									"parameters": [
										{
											"id": 21,
											"name": "direction",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {
												"text": "\n"
											},
											"type": {
												"type": "reference",
												"id": 48,
												"name": "Direction"
											}
										}
									],
									"type": {
										"type": "reference",
										"id": 5,
										"name": "Pos"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 49,
									"character": 16
								}
							]
						},
						{
							"id": 15,
							"name": "addXY",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 16,
									"name": "addXY",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 17,
											"name": "x",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 58,
												"name": "X"
											}
										},
										{
											"id": 18,
											"name": "y",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 62,
												"name": "Y"
											}
										}
									],
									"type": {
										"type": "reference",
										"id": 5,
										"name": "Pos"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 38,
									"character": 9
								}
							]
						},
						{
							"id": 25,
							"name": "createFromDirection",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isStatic": true,
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 26,
									"name": "createFromDirection",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 27,
											"name": "direction",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 48,
												"name": "Direction"
											}
										}
									],
									"type": {
										"type": "reference",
										"id": 5,
										"name": "Pos"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 51,
									"character": 30
								}
							]
						},
						{
							"id": 22,
							"name": "createFromPos",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isStatic": true,
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 23,
									"name": "createFromPos",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 24,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 2,
												"name": "PosReadable"
											}
										}
									],
									"type": {
										"type": "reference",
										"id": 5,
										"name": "Pos"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 50,
									"character": 24
								}
							]
						}
					],
					"groups": [
						{
							"title": "Constructors",
							"kind": 512,
							"children": [
								8
							]
						},
						{
							"title": "Properties",
							"kind": 1024,
							"children": [
								6,
								7
							]
						},
						{
							"title": "Methods",
							"kind": 2048,
							"children": [
								12,
								19,
								15,
								25,
								22
							]
						}
					],
					"sources": [
						{
							"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
							"line": 33,
							"character": 24
						}
					],
					"implementedTypes": [
						{
							"type": "reference",
							"id": 2,
							"name": "PosReadable"
						}
					]
				},
				{
					"id": 28,
					"name": "PosMutable",
					"kind": 128,
					"kindString": "Class",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"comment": {
						"shortText": "位置"
					},
					"children": [
						{
							"id": 31,
							"name": "constructor",
							"kind": 512,
							"kindString": "Constructor",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 32,
									"name": "new PosMutable",
									"kind": 16384,
									"kindString": "Constructor signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 33,
											"name": "x",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 58,
												"name": "X"
											}
										},
										{
											"id": 34,
											"name": "y",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 62,
												"name": "Y"
											}
										}
									],
									"type": {
										"type": "reference",
										"id": 28,
										"name": "PosMutable"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 58,
									"character": 9
								}
							]
						},
						{
							"id": 29,
							"name": "x",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 57,
									"character": 5
								}
							],
							"type": {
								"type": "reference",
								"id": 58,
								"name": "X"
							},
							"implementationOf": {
								"type": "reference",
								"id": 3,
								"name": "PosReadable.x"
							}
						},
						{
							"id": 30,
							"name": "y",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 58,
									"character": 5
								}
							],
							"type": {
								"type": "reference",
								"id": 62,
								"name": "Y"
							},
							"implementationOf": {
								"type": "reference",
								"id": 4,
								"name": "PosReadable.y"
							}
						},
						{
							"id": 35,
							"name": "add",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 36,
									"name": "add",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 37,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 2,
												"name": "PosReadable"
											}
										}
									],
									"type": {
										"type": "reference",
										"id": 28,
										"name": "PosMutable"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 60,
									"character": 7
								}
							]
						},
						{
							"id": 42,
							"name": "addDirection",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 43,
									"name": "addDirection",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"comment": {
										"shortText": "方向を加えた位置を取得する",
										"text": "現在(x, y) = (0, 0)にいる場合\nup なら    ( 0, -1)\ndown なら  ( 0,  1)\nright なら ( 1,  0)\nleft なら  (-1,  0)"
									},
									"parameters": [
										{
											"id": 44,
											"name": "direction",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {
												"text": "\n"
											},
											"type": {
												"type": "reference",
												"id": 48,
												"name": "Direction"
											}
										}
									],
									"type": {
										"type": "reference",
										"id": 28,
										"name": "PosMutable"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 72,
									"character": 16
								}
							]
						},
						{
							"id": 38,
							"name": "addXY",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 39,
									"name": "addXY",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 40,
											"name": "x",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 58,
												"name": "X"
											}
										},
										{
											"id": 41,
											"name": "y",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 62,
												"name": "Y"
											}
										}
									],
									"type": {
										"type": "reference",
										"id": 28,
										"name": "PosMutable"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 61,
									"character": 9
								}
							]
						},
						{
							"id": 45,
							"name": "createFromPos",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isStatic": true,
								"isExported": true,
								"isExternal": true
							},
							"signatures": [
								{
									"id": 46,
									"name": "createFromPos",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 47,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 2,
												"name": "PosReadable"
											}
										}
									],
									"type": {
										"type": "reference",
										"id": 28,
										"name": "PosMutable"
									}
								}
							],
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 73,
									"character": 24
								}
							]
						}
					],
					"groups": [
						{
							"title": "Constructors",
							"kind": 512,
							"children": [
								31
							]
						},
						{
							"title": "Properties",
							"kind": 1024,
							"children": [
								29,
								30
							]
						},
						{
							"title": "Methods",
							"kind": 2048,
							"children": [
								35,
								42,
								38,
								45
							]
						}
					],
					"sources": [
						{
							"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
							"line": 56,
							"character": 31
						}
					],
					"implementedTypes": [
						{
							"type": "reference",
							"id": 2,
							"name": "PosReadable"
						}
					]
				},
				{
					"id": 2,
					"name": "PosReadable",
					"kind": 256,
					"kindString": "Interface",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"comment": {
						"shortText": "位置"
					},
					"children": [
						{
							"id": 3,
							"name": "x",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isExported": true,
								"isExternal": true,
								"isReadonly": true
							},
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 27,
									"character": 14
								}
							],
							"type": {
								"type": "reference",
								"id": 58,
								"name": "X"
							}
						},
						{
							"id": 4,
							"name": "y",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isExported": true,
								"isExternal": true,
								"isReadonly": true
							},
							"sources": [
								{
									"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
									"line": 28,
									"character": 14
								}
							],
							"type": {
								"type": "reference",
								"id": 62,
								"name": "Y"
							}
						}
					],
					"groups": [
						{
							"title": "Properties",
							"kind": 1024,
							"children": [
								3,
								4
							]
						}
					],
					"sources": [
						{
							"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
							"line": 26,
							"character": 28
						}
					],
					"implementedBy": [
						{
							"type": "reference",
							"id": 5,
							"name": "Pos"
						},
						{
							"type": "reference",
							"id": 28,
							"name": "PosMutable"
						}
					]
				},
				{
					"id": 58,
					"name": "X",
					"kind": 4194304,
					"kindString": "Type alias",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"comment": {
						"shortText": "X座標\nnumber型の拡張"
					},
					"sources": [
						{
							"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
							"line": 9,
							"character": 21
						}
					],
					"type": {
						"type": "intersection",
						"types": [
							{
								"type": "intrinsic",
								"name": "number"
							},
							{
								"type": "reflection",
								"declaration": {
									"id": 59,
									"name": "__type",
									"kind": 65536,
									"kindString": "Type literal",
									"flags": {
										"isExported": true
									},
									"children": [
										{
											"id": 60,
											"name": "[XNominality]",
											"kind": 32,
											"kindString": "Variable",
											"flags": {
												"isExported": true,
												"isExternal": true
											},
											"sources": [
												{
													"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
													"line": 10,
													"character": 17
												}
											],
											"type": {
												"type": "intrinsic",
												"name": "never"
											}
										}
									],
									"groups": [
										{
											"title": "Variables",
											"kind": 32,
											"children": [
												60
											]
										}
									],
									"sources": [
										{
											"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
											"line": 9,
											"character": 32
										}
									]
								}
							}
						]
					}
				},
				{
					"id": 62,
					"name": "Y",
					"kind": 4194304,
					"kindString": "Type alias",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"comment": {
						"shortText": "Y座標\nnumber型の拡張"
					},
					"sources": [
						{
							"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
							"line": 20,
							"character": 21
						}
					],
					"type": {
						"type": "intersection",
						"types": [
							{
								"type": "intrinsic",
								"name": "number"
							},
							{
								"type": "reflection",
								"declaration": {
									"id": 63,
									"name": "__type",
									"kind": 65536,
									"kindString": "Type literal",
									"flags": {
										"isExported": true
									},
									"children": [
										{
											"id": 64,
											"name": "[YNominality]",
											"kind": 32,
											"kindString": "Variable",
											"flags": {
												"isExported": true,
												"isExternal": true
											},
											"sources": [
												{
													"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
													"line": 21,
													"character": 17
												}
											],
											"type": {
												"type": "intrinsic",
												"name": "never"
											}
										}
									],
									"groups": [
										{
											"title": "Variables",
											"kind": 32,
											"children": [
												64
											]
										}
									],
									"sources": [
										{
											"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
											"line": 20,
											"character": 32
										}
									]
								}
							}
						]
					}
				}
			],
			"groups": [
				{
					"title": "Enumerations",
					"kind": 4,
					"children": [
						48
					]
				},
				{
					"title": "Classes",
					"kind": 128,
					"children": [
						5,
						28
					]
				},
				{
					"title": "Interfaces",
					"kind": 256,
					"children": [
						2
					]
				},
				{
					"title": "Type aliases",
					"kind": 4194304,
					"children": [
						58,
						62
					]
				}
			],
			"sources": [
				{
					"fileName": "node_modules/@types/board2d/dist/pos/pos.d.ts",
					"line": 1,
					"character": 0
				}
			]
		},
		{
			"id": 293,
			"name": "\"src/index\"",
			"kind": 1,
			"kindString": "Module",
			"flags": {
				"isExported": true
			},
			"originalName": "/Users/fujitanao/googledrive/script/simplegame/reversi/src/index.ts",
			"children": [
				{
					"id": 349,
					"name": "Disk",
					"kind": 4,
					"kindString": "Enumeration",
					"flags": {
						"isExported": true
					},
					"comment": {
						"shortText": "ディスク"
					},
					"children": [
						{
							"id": 351,
							"name": "dark",
							"kind": 16,
							"kindString": "Enumeration member",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 165,
									"character": 6
								}
							],
							"defaultValue": "\"d\""
						},
						{
							"id": 350,
							"name": "light",
							"kind": 16,
							"kindString": "Enumeration member",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 164,
									"character": 7
								}
							],
							"defaultValue": "\"l\""
						}
					],
					"groups": [
						{
							"title": "Enumeration members",
							"kind": 16,
							"children": [
								351,
								350
							]
						}
					],
					"sources": [
						{
							"fileName": "src/index.ts",
							"line": 163,
							"character": 16
						}
					]
				},
				{
					"id": 352,
					"name": "Event",
					"kind": 128,
					"kindString": "Class",
					"flags": {},
					"children": [
						{
							"id": 353,
							"name": "constructor",
							"kind": 512,
							"kindString": "Constructor",
							"flags": {},
							"signatures": [
								{
									"id": 356,
									"name": "new Event",
									"kind": 16384,
									"kindString": "Constructor signature",
									"flags": {},
									"parameters": [
										{
											"id": 357,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {},
											"type": {
												"type": "reference",
												"id": 5,
												"name": "Pos"
											}
										},
										{
											"id": 358,
											"name": "mark",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {},
											"type": {
												"type": "reference",
												"id": 349,
												"name": "Disk"
											}
										}
									],
									"type": {
										"type": "reference",
										"id": 352,
										"name": "Event"
									}
								}
							],
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 168,
									"character": 13
								}
							]
						},
						{
							"id": 355,
							"name": "mark",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isPublic": true,
								"isConstructorProperty": true
							},
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 169,
									"character": 50
								}
							],
							"type": {
								"type": "reference",
								"id": 349,
								"name": "Disk"
							}
						},
						{
							"id": 354,
							"name": "pos",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isPublic": true,
								"isConstructorProperty": true
							},
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 169,
									"character": 24
								}
							],
							"type": {
								"type": "reference",
								"id": 5,
								"name": "Pos"
							}
						}
					],
					"groups": [
						{
							"title": "Constructors",
							"kind": 512,
							"children": [
								353
							]
						},
						{
							"title": "Properties",
							"kind": 1024,
							"children": [
								355,
								354
							]
						}
					],
					"sources": [
						{
							"fileName": "src/index.ts",
							"line": 168,
							"character": 11
						}
					]
				},
				{
					"id": 294,
					"name": "Game",
					"kind": 128,
					"kindString": "Class",
					"flags": {
						"isExported": true
					},
					"children": [
						{
							"id": 295,
							"name": "constructor",
							"kind": 512,
							"kindString": "Constructor",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": "コンストラクタ",
								"text": "ゲームを始める際は`Game.init()`を使ってください。\n"
							},
							"signatures": [
								{
									"id": 300,
									"name": "new Game",
									"kind": 16384,
									"kindString": "Constructor signature",
									"flags": {
										"isExported": true
									},
									"comment": {
										"shortText": "コンストラクタ",
										"text": "ゲームを始める際は`Game.init()`を使ってください。\n"
									},
									"parameters": [
										{
											"id": 301,
											"name": "turn",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {
												"shortText": "出番"
											},
											"type": {
												"type": "reference",
												"id": 349,
												"name": "Disk"
											}
										},
										{
											"id": 302,
											"name": "board",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {
												"shortText": "盤"
											},
											"type": {
												"type": "reference",
												"id": 152,
												"typeArguments": [
													{
														"type": "reference",
														"id": 349,
														"name": "Disk"
													}
												],
												"name": "Board"
											}
										},
										{
											"id": 303,
											"name": "winner",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {
												"shortText": "勝者 決まってない場合はnull"
											},
											"type": {
												"type": "union",
												"types": [
													{
														"type": "reference",
														"id": 349,
														"name": "Disk"
													},
													{
														"type": "intrinsic",
														"name": "null"
													}
												]
											},
											"defaultValue": "null"
										},
										{
											"id": 304,
											"name": "_eventList",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {
												"shortText": "履歴\n"
											},
											"type": {
												"type": "array",
												"elementType": {
													"type": "reference",
													"id": 352,
													"name": "Event"
												}
											},
											"defaultValue": "[]"
										}
									],
									"type": {
										"type": "reference",
										"id": 294,
										"name": "Game"
									}
								}
							],
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 3,
									"character": 19
								}
							]
						},
						{
							"id": 297,
							"name": "board",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isExported": true,
								"isConstructorProperty": true,
								"isReadonly": true
							},
							"comment": {
								"shortText": "盤"
							},
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 16,
									"character": 18
								}
							],
							"type": {
								"type": "reference",
								"id": 152,
								"typeArguments": [
									{
										"type": "reference",
										"id": 349,
										"name": "Disk"
									}
								],
								"name": "Board"
							}
						},
						{
							"id": 296,
							"name": "turn",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isExported": true,
								"isConstructorProperty": true,
								"isReadonly": true
							},
							"comment": {
								"shortText": "出番"
							},
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 15,
									"character": 17
								}
							],
							"type": {
								"type": "reference",
								"id": 349,
								"name": "Disk"
							}
						},
						{
							"id": 298,
							"name": "winner",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isExported": true,
								"isConstructorProperty": true,
								"isReadonly": true
							},
							"comment": {
								"shortText": "勝者 決まってない場合はnull"
							},
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 17,
									"character": 19
								}
							],
							"type": {
								"type": "union",
								"types": [
									{
										"type": "reference",
										"id": 349,
										"name": "Disk"
									},
									{
										"type": "intrinsic",
										"name": "null"
									}
								]
							}
						},
						{
							"id": 309,
							"name": "isGameOver",
							"kind": 262144,
							"kindString": "Accessor",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": "決着がついたかどうか"
							},
							"getSignature": [
								{
									"id": 310,
									"name": "__get",
									"kind": 524288,
									"kindString": "Get signature",
									"flags": {
										"isExported": true
									},
									"comment": {
										"shortText": "決着がついたかどうか"
									},
									"type": {
										"type": "intrinsic",
										"name": "boolean"
									}
								}
							],
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 54,
									"character": 16
								}
							]
						},
						{
							"id": 307,
							"name": "score",
							"kind": 262144,
							"kindString": "Accessor",
							"flags": {
								"isExported": true
							},
							"getSignature": [
								{
									"id": 308,
									"name": "__get",
									"kind": 524288,
									"kindString": "Get signature",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 359,
										"name": "Score"
									}
								}
							],
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 37,
									"character": 11
								}
							]
						},
						{
							"id": 311,
							"name": "getTunableDiskPosList",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true
							},
							"signatures": [
								{
									"id": 312,
									"name": "getTunableDiskPosList",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 313,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 5,
												"name": "Pos"
											}
										},
										{
											"id": 314,
											"name": "disk",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 349,
												"name": "Disk"
											}
										}
									],
									"type": {
										"type": "array",
										"elementType": {
											"type": "reference",
											"id": 5,
											"name": "Pos"
										}
									}
								}
							],
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 58,
									"character": 23
								}
							]
						},
						{
							"id": 315,
							"name": "getTunableDiskPosListFromXY",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true
							},
							"signatures": [
								{
									"id": 316,
									"name": "getTunableDiskPosListFromXY",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"parameters": [
										{
											"id": 317,
											"name": "x",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"name": "board2d.X"
											}
										},
										{
											"id": 318,
											"name": "y",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"name": "board2d.Y"
											}
										},
										{
											"id": 319,
											"name": "disk",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 349,
												"name": "Disk"
											}
										}
									],
									"type": {
										"type": "array",
										"elementType": {
											"type": "reference",
											"id": 5,
											"name": "Pos"
										}
									}
								}
							],
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 88,
									"character": 29
								}
							]
						},
						{
							"id": 336,
							"name": "hasTurnableDiskPos",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true
							},
							"signatures": [
								{
									"id": 337,
									"name": "hasTurnableDiskPos",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"comment": {
										"shortText": "ディスクを置ける場所があるか？"
									},
									"parameters": [
										{
											"id": 338,
											"name": "disk",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 349,
												"name": "Disk"
											}
										}
									],
									"type": {
										"type": "intrinsic",
										"name": "boolean"
									}
								}
							],
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 144,
									"character": 20
								}
							]
						},
						{
							"id": 320,
							"name": "isMarked",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true
							},
							"signatures": [
								{
									"id": 321,
									"name": "isMarked",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"comment": {
										"shortText": "指定の位置がすでにマークされてるかどうか"
									},
									"parameters": [
										{
											"id": 322,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {
												"text": "\n"
											},
											"type": {
												"type": "reference",
												"id": 5,
												"name": "Pos"
											}
										}
									],
									"type": {
										"type": "intrinsic",
										"name": "boolean"
									}
								}
							],
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 98,
									"character": 10
								}
							]
						},
						{
							"id": 323,
							"name": "isMarkedFromXY",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true
							},
							"signatures": [
								{
									"id": 324,
									"name": "isMarkedFromXY",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"comment": {
										"shortText": "指定の位置がすでにマークされてるかどうか"
									},
									"parameters": [
										{
											"id": 325,
											"name": "x",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {},
											"type": {
												"type": "reference",
												"name": "board2d.X"
											}
										},
										{
											"id": 326,
											"name": "y",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {
												"text": "\n"
											},
											"type": {
												"type": "reference",
												"name": "board2d.Y"
											}
										}
									],
									"type": {
										"type": "intrinsic",
										"name": "boolean"
									}
								}
							],
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 107,
									"character": 16
								}
							]
						},
						{
							"id": 327,
							"name": "placeDisk",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true
							},
							"signatures": [
								{
									"id": 328,
									"name": "placeDisk",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"comment": {
										"shortText": "マークする。結果はcallbackで返る"
									},
									"parameters": [
										{
											"id": 329,
											"name": "pos",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {},
											"type": {
												"type": "reference",
												"id": 5,
												"name": "Pos"
											}
										},
										{
											"id": 330,
											"name": "disk",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"type": {
												"type": "reference",
												"id": 349,
												"name": "Disk"
											}
										},
										{
											"id": 331,
											"name": "callback",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true,
												"isOptional": true
											},
											"comment": {
												"text": "\n"
											},
											"type": {
												"type": "union",
												"types": [
													{
														"type": "intrinsic",
														"name": "undefined"
													},
													{
														"type": "reflection",
														"declaration": {
															"id": 332,
															"name": "__type",
															"kind": 65536,
															"kindString": "Type literal",
															"flags": {
																"isExported": true
															},
															"signatures": [
																{
																	"id": 333,
																	"name": "__call",
																	"kind": 4096,
																	"kindString": "Call signature",
																	"flags": {
																		"isExported": true
																	},
																	"parameters": [
																		{
																			"id": 334,
																			"name": "e",
																			"kind": 32768,
																			"kindString": "Parameter",
																			"flags": {
																				"isExported": true
																			},
																			"type": {
																				"type": "union",
																				"types": [
																					{
																						"type": "intrinsic",
																						"name": "any"
																					},
																					{
																						"type": "intrinsic",
																						"name": "null"
																					}
																				]
																			}
																		},
																		{
																			"id": 335,
																			"name": "game",
																			"kind": 32768,
																			"kindString": "Parameter",
																			"flags": {
																				"isExported": true,
																				"isOptional": true
																			},
																			"type": {
																				"type": "reference",
																				"id": 294,
																				"name": "Game"
																			}
																		}
																	],
																	"type": {
																		"type": "intrinsic",
																		"name": "void"
																	}
																}
															]
														}
													}
												]
											}
										}
									],
									"type": {
										"type": "intrinsic",
										"name": "void"
									}
								}
							],
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 117,
									"character": 11
								}
							]
						},
						{
							"id": 339,
							"name": "placeDiskFromXY",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isExported": true
							},
							"signatures": [
								{
									"id": 340,
									"name": "placeDiskFromXY",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"comment": {
										"shortText": "マークする。結果はcallbackで返る"
									},
									"parameters": [
										{
											"id": 341,
											"name": "x",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {},
											"type": {
												"type": "reference",
												"name": "board2d.X"
											}
										},
										{
											"id": 342,
											"name": "y",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {},
											"type": {
												"type": "reference",
												"name": "board2d.Y"
											}
										},
										{
											"id": 343,
											"name": "mark",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true
											},
											"comment": {},
											"type": {
												"type": "reference",
												"id": 349,
												"name": "Disk"
											}
										},
										{
											"id": 344,
											"name": "callback",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {
												"isExported": true,
												"isOptional": true
											},
											"comment": {
												"text": "\n"
											},
											"type": {
												"type": "union",
												"types": [
													{
														"type": "intrinsic",
														"name": "undefined"
													},
													{
														"type": "reflection",
														"declaration": {
															"id": 345,
															"name": "__type",
															"kind": 65536,
															"kindString": "Type literal",
															"flags": {
																"isExported": true
															},
															"signatures": [
																{
																	"id": 346,
																	"name": "__call",
																	"kind": 4096,
																	"kindString": "Call signature",
																	"flags": {
																		"isExported": true
																	},
																	"parameters": [
																		{
																			"id": 347,
																			"name": "e",
																			"kind": 32768,
																			"kindString": "Parameter",
																			"flags": {
																				"isExported": true
																			},
																			"type": {
																				"type": "union",
																				"types": [
																					{
																						"type": "intrinsic",
																						"name": "any"
																					},
																					{
																						"type": "intrinsic",
																						"name": "null"
																					}
																				]
																			}
																		},
																		{
																			"id": 348,
																			"name": "game",
																			"kind": 32768,
																			"kindString": "Parameter",
																			"flags": {
																				"isExported": true,
																				"isOptional": true
																			},
																			"type": {
																				"type": "reference",
																				"id": 294,
																				"name": "Game"
																			}
																		}
																	],
																	"type": {
																		"type": "intrinsic",
																		"name": "void"
																	}
																}
															]
														}
													}
												]
											}
										}
									],
									"type": {
										"type": "intrinsic",
										"name": "void"
									}
								}
							],
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 155,
									"character": 17
								}
							]
						},
						{
							"id": 305,
							"name": "init",
							"kind": 2048,
							"kindString": "Method",
							"flags": {
								"isStatic": true,
								"isExported": true
							},
							"signatures": [
								{
									"id": 306,
									"name": "init",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {
										"isExported": true
									},
									"comment": {
										"shortText": "ゲームを始める"
									},
									"type": {
										"type": "reference",
										"id": 294,
										"name": "Game"
									}
								}
							],
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 24,
									"character": 13
								}
							]
						}
					],
					"groups": [
						{
							"title": "Constructors",
							"kind": 512,
							"children": [
								295
							]
						},
						{
							"title": "Properties",
							"kind": 1024,
							"children": [
								297,
								296,
								298
							]
						},
						{
							"title": "Accessors",
							"kind": 262144,
							"children": [
								309,
								307
							]
						},
						{
							"title": "Methods",
							"kind": 2048,
							"children": [
								311,
								315,
								336,
								320,
								323,
								327,
								339,
								305
							]
						}
					],
					"sources": [
						{
							"fileName": "src/index.ts",
							"line": 3,
							"character": 17
						}
					]
				},
				{
					"id": 359,
					"name": "Score",
					"kind": 128,
					"kindString": "Class",
					"flags": {},
					"children": [
						{
							"id": 360,
							"name": "constructor",
							"kind": 512,
							"kindString": "Constructor",
							"flags": {},
							"signatures": [
								{
									"id": 363,
									"name": "new Score",
									"kind": 16384,
									"kindString": "Constructor signature",
									"flags": {},
									"parameters": [
										{
											"id": 364,
											"name": "lightCount",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {},
											"type": {
												"type": "intrinsic",
												"name": "number"
											}
										},
										{
											"id": 365,
											"name": "darkCount",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {},
											"type": {
												"type": "intrinsic",
												"name": "number"
											}
										}
									],
									"type": {
										"type": "reference",
										"id": 359,
										"name": "Score"
									}
								}
							],
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 174,
									"character": 13
								}
							]
						},
						{
							"id": 362,
							"name": "darkCount",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isConstructorProperty": true,
								"isReadonly": true
							},
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 175,
									"character": 61
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "number"
							}
						},
						{
							"id": 361,
							"name": "lightCount",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isConstructorProperty": true,
								"isReadonly": true
							},
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 175,
									"character": 33
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "number"
							}
						},
						{
							"id": 369,
							"name": "winner",
							"kind": 262144,
							"kindString": "Accessor",
							"flags": {},
							"getSignature": [
								{
									"id": 370,
									"name": "__get",
									"kind": 524288,
									"kindString": "Get signature",
									"flags": {},
									"type": {
										"type": "union",
										"types": [
											{
												"type": "reference",
												"id": 349,
												"name": "Disk"
											},
											{
												"type": "intrinsic",
												"name": "null"
											}
										]
									}
								}
							],
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 182,
									"character": 12
								}
							]
						},
						{
							"id": 366,
							"name": "getDiscCount",
							"kind": 2048,
							"kindString": "Method",
							"flags": {},
							"signatures": [
								{
									"id": 367,
									"name": "getDiscCount",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {},
									"parameters": [
										{
											"id": 368,
											"name": "disk",
											"kind": 32768,
											"kindString": "Parameter",
											"flags": {},
											"type": {
												"type": "reference",
												"id": 349,
												"name": "Disk"
											}
										}
									],
									"type": {
										"type": "intrinsic",
										"name": "number"
									}
								}
							],
							"sources": [
								{
									"fileName": "src/index.ts",
									"line": 178,
									"character": 14
								}
							]
						}
					],
					"groups": [
						{
							"title": "Constructors",
							"kind": 512,
							"children": [
								360
							]
						},
						{
							"title": "Properties",
							"kind": 1024,
							"children": [
								362,
								361
							]
						},
						{
							"title": "Accessors",
							"kind": 262144,
							"children": [
								369
							]
						},
						{
							"title": "Methods",
							"kind": 2048,
							"children": [
								366
							]
						}
					],
					"sources": [
						{
							"fileName": "src/index.ts",
							"line": 174,
							"character": 11
						}
					]
				}
			],
			"groups": [
				{
					"title": "Enumerations",
					"kind": 4,
					"children": [
						349
					]
				},
				{
					"title": "Classes",
					"kind": 128,
					"children": [
						352,
						294,
						359
					]
				}
			],
			"sources": [
				{
					"fileName": "src/index.ts",
					"line": 1,
					"character": 0
				}
			]
		}
	],
	"groups": [
		{
			"title": "Modules",
			"kind": 1,
			"children": [
				65,
				279,
				1,
				293
			]
		}
	]
};