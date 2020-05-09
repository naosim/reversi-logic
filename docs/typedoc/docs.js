var data = {
	"id": 0,
	"name": "reversi",
	"kind": 0,
	"flags": {},
	"children": [
		{
			"id": 47,
			"name": "Direction",
			"kind": 4,
			"kindString": "Enumeration",
			"flags": {
				"isExported": true,
				"isExternal": true
			},
			"children": [
				{
					"id": 49,
					"name": "down",
					"kind": 16,
					"kindString": "Enumeration member",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 67,
							"character": 8
						}
					],
					"defaultValue": "1"
				},
				{
					"id": 54,
					"name": "downLeft",
					"kind": 16,
					"kindString": "Enumeration member",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 72,
							"character": 12
						}
					],
					"defaultValue": "6"
				},
				{
					"id": 55,
					"name": "downRight",
					"kind": 16,
					"kindString": "Enumeration member",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 73,
							"character": 13
						}
					],
					"defaultValue": "7"
				},
				{
					"id": 50,
					"name": "left",
					"kind": 16,
					"kindString": "Enumeration member",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 68,
							"character": 8
						}
					],
					"defaultValue": "2"
				},
				{
					"id": 51,
					"name": "right",
					"kind": 16,
					"kindString": "Enumeration member",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 69,
							"character": 9
						}
					],
					"defaultValue": "3"
				},
				{
					"id": 48,
					"name": "up",
					"kind": 16,
					"kindString": "Enumeration member",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 66,
							"character": 6
						}
					],
					"defaultValue": "0"
				},
				{
					"id": 52,
					"name": "upLeft",
					"kind": 16,
					"kindString": "Enumeration member",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 70,
							"character": 10
						}
					],
					"defaultValue": "4"
				},
				{
					"id": 53,
					"name": "upRight",
					"kind": 16,
					"kindString": "Enumeration member",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 71,
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
						49,
						54,
						55,
						50,
						51,
						48,
						52,
						53
					]
				}
			],
			"sources": [
				{
					"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
					"line": 65,
					"character": 29
				}
			]
		},
		{
			"id": 432,
			"name": "Disk",
			"kind": 4,
			"kindString": "Enumeration",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 434,
					"name": "dark",
					"kind": 16,
					"kindString": "Enumeration member",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "src/index.ts",
							"line": 194,
							"character": 6
						}
					],
					"defaultValue": "\"d\""
				},
				{
					"id": 433,
					"name": "light",
					"kind": 16,
					"kindString": "Enumeration member",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "src/index.ts",
							"line": 193,
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
						434,
						433
					]
				}
			],
			"sources": [
				{
					"fileName": "src/index.ts",
					"line": 192,
					"character": 16
				}
			]
		},
		{
			"id": 192,
			"name": "Board",
			"kind": 128,
			"kindString": "Class",
			"flags": {
				"isExported": true,
				"isExternal": true
			},
			"comment": {
				"shortText": "Two-dimensional board"
			},
			"typeParameter": [
				{
					"id": 193,
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
					"id": 195,
					"name": "constructor",
					"kind": 512,
					"kindString": "Constructor",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 196,
							"name": "new Board",
							"kind": 16384,
							"kindString": "Constructor signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 197,
									"name": "boardCore",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 124,
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
									"id": 198,
									"name": "skipCopy",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true,
										"isOptional": true
									},
									"type": {
										"type": "reference",
										"id": 365,
										"name": "SkipCopy"
									}
								}
							],
							"type": {
								"type": "reference",
								"id": 192,
								"name": "Board"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 99,
							"character": 13
						}
					]
				},
				{
					"id": 203,
					"name": "values",
					"kind": 262144,
					"kindString": "Accessor",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"comment": {
						"shortText": "Two-dimensional array as raw data on the board",
						"returns": "Return a copy. Updating the returned value does not affect the board.\n"
					},
					"getSignature": [
						{
							"id": 204,
							"name": "__get",
							"kind": 524288,
							"kindString": "Get signature",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": "Two-dimensional array as raw data on the board",
								"returns": "Return a copy. Updating the returned value does not affect the board.\n"
							},
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
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 108,
							"character": 14
						}
					]
				},
				{
					"id": 199,
					"name": "xSize",
					"kind": 262144,
					"kindString": "Accessor",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"getSignature": [
						{
							"id": 200,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 101,
							"character": 13
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 66,
						"name": "BoardReadable.xSize"
					}
				},
				{
					"id": 201,
					"name": "ySize",
					"kind": 262144,
					"kindString": "Accessor",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"getSignature": [
						{
							"id": 202,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 102,
							"character": 13
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 67,
						"name": "BoardReadable.ySize"
					}
				},
				{
					"id": 240,
					"name": "copy",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 241,
							"name": "copy",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"type": {
								"type": "reference",
								"id": 192,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 128,
							"character": 8
						}
					]
				},
				{
					"id": 237,
					"name": "exists",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 238,
							"name": "exists",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 239,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 1,
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
								"id": 87,
								"name": "BoardReadable.exists"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 127,
							"character": 10
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 86,
						"name": "BoardReadable.exists"
					}
				},
				{
					"id": 249,
					"name": "find",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 250,
							"name": "find",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 251,
									"name": "check",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reflection",
										"declaration": {
											"id": 252,
											"name": "__type",
											"kind": 65536,
											"kindString": "Type literal",
											"flags": {
												"isExported": true
											},
											"signatures": [
												{
													"id": 253,
													"name": "__call",
													"kind": 4096,
													"kindString": "Call signature",
													"flags": {
														"isExported": true
													},
													"parameters": [
														{
															"id": 254,
															"name": "pos",
															"kind": 32768,
															"kindString": "Parameter",
															"flags": {
																"isExported": true
															},
															"type": {
																"type": "reference",
																"id": 4,
																"name": "Pos"
															}
														},
														{
															"id": 255,
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
													"fileName": "node_modules/board2d/dist/board/board.d.ts",
													"line": 130,
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
										"id": 368,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 130,
							"character": 8
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 96,
						"name": "BoardReadable.find"
					}
				},
				{
					"id": 256,
					"name": "findAll",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 257,
							"name": "findAll",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 258,
									"name": "check",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reflection",
										"declaration": {
											"id": 259,
											"name": "__type",
											"kind": 65536,
											"kindString": "Type literal",
											"flags": {
												"isExported": true
											},
											"signatures": [
												{
													"id": 260,
													"name": "__call",
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
																"id": 4,
																"name": "Pos"
															}
														},
														{
															"id": 262,
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
													"fileName": "node_modules/board2d/dist/board/board.d.ts",
													"line": 131,
													"character": 18
												}
											]
										}
									}
								}
							],
							"type": {
								"type": "array",
								"elementType": {
									"type": "reference",
									"id": 368,
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
								}
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 131,
							"character": 11
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 103,
						"name": "BoardReadable.findAll"
					}
				},
				{
					"id": 219,
					"name": "forEach",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 220,
							"name": "forEach",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 221,
									"name": "callback",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reflection",
										"declaration": {
											"id": 222,
											"name": "__type",
											"kind": 65536,
											"kindString": "Type literal",
											"flags": {
												"isExported": true
											},
											"signatures": [
												{
													"id": 223,
													"name": "__call",
													"kind": 4096,
													"kindString": "Call signature",
													"flags": {
														"isExported": true
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
															"type": {
																"type": "reference",
																"id": 4,
																"name": "Pos"
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
													"fileName": "node_modules/board2d/dist/board/board.d.ts",
													"line": 119,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 119,
							"character": 11
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 68,
						"name": "BoardReadable.forEach"
					}
				},
				{
					"id": 226,
					"name": "getValue",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 227,
							"name": "getValue",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 228,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 1,
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
								"id": 76,
								"name": "BoardReadable.getValue"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 120,
							"character": 12
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 75,
						"name": "BoardReadable.getValue"
					}
				},
				{
					"id": 267,
					"name": "getValueWithDirection",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 268,
							"name": "getValueWithDirection",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 269,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 1,
										"name": "PosReadable"
									}
								},
								{
									"id": 270,
									"name": "direction",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 47,
										"name": "Direction"
									}
								}
							],
							"type": {
								"type": "union",
								"types": [
									{
										"type": "reference",
										"id": 368,
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
								"id": 115,
								"name": "BoardReadable.getValueWithDirection"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 137,
							"character": 25
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 114,
						"name": "BoardReadable.getValueWithDirection"
					}
				},
				{
					"id": 233,
					"name": "getValueWithXY",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 234,
							"name": "getValueWithXY",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 235,
									"name": "x",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 57,
										"name": "X"
									}
								},
								{
									"id": 236,
									"name": "y",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 61,
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
								"id": 83,
								"name": "BoardReadable.getValueWithXY"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 126,
							"character": 18
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 82,
						"name": "BoardReadable.getValueWithXY"
					}
				},
				{
					"id": 271,
					"name": "indexToPos",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 272,
							"name": "indexToPos",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 273,
									"name": "index",
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
								"id": 4,
								"name": "Pos"
							},
							"implementationOf": {
								"type": "reference",
								"id": 119,
								"name": "BoardReadable.indexToPos"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 138,
							"character": 14
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 118,
						"name": "BoardReadable.indexToPos"
					}
				},
				{
					"id": 274,
					"name": "posToIndex",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 275,
							"name": "posToIndex",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 276,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 1,
										"name": "PosReadable"
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "number"
							},
							"implementationOf": {
								"type": "reference",
								"id": 122,
								"name": "BoardReadable.posToIndex"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 139,
							"character": 14
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 121,
						"name": "BoardReadable.posToIndex"
					}
				},
				{
					"id": 205,
					"name": "put",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 206,
							"name": "put",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": "Put pieces on the board (immutable)"
							},
							"parameters": [
								{
									"id": 207,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 1,
										"name": "PosReadable"
									}
								},
								{
									"id": 208,
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
								"type": "reference",
								"id": 192,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 112,
							"character": 7
						}
					]
				},
				{
					"id": 214,
					"name": "putWithXY",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 215,
							"name": "putWithXY",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 216,
									"name": "x",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 57,
										"name": "X"
									}
								},
								{
									"id": 217,
									"name": "y",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 61,
										"name": "Y"
									}
								},
								{
									"id": 218,
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
								"type": "reference",
								"id": 192,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 118,
							"character": 13
						}
					]
				},
				{
					"id": 242,
					"name": "some",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 243,
							"name": "some",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 244,
									"name": "check",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reflection",
										"declaration": {
											"id": 245,
											"name": "__type",
											"kind": 65536,
											"kindString": "Type literal",
											"flags": {
												"isExported": true
											},
											"signatures": [
												{
													"id": 246,
													"name": "__call",
													"kind": 4096,
													"kindString": "Call signature",
													"flags": {
														"isExported": true
													},
													"parameters": [
														{
															"id": 247,
															"name": "pos",
															"kind": 32768,
															"kindString": "Parameter",
															"flags": {
																"isExported": true
															},
															"type": {
																"type": "reference",
																"id": 4,
																"name": "Pos"
															}
														},
														{
															"id": 248,
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
													"fileName": "node_modules/board2d/dist/board/board.d.ts",
													"line": 129,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 129,
							"character": 8
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 89,
						"name": "BoardReadable.some"
					}
				},
				{
					"id": 277,
					"name": "toMutable",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 278,
							"name": "toMutable",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"type": {
								"type": "reference",
								"id": 284,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 140,
							"character": 13
						}
					]
				},
				{
					"id": 279,
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
							"id": 280,
							"name": "empty",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"typeParameter": [
								{
									"id": 281,
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
									"id": 282,
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
									"id": 283,
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
								"id": 192,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 141,
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
						195
					]
				},
				{
					"title": "Accessors",
					"kind": 262144,
					"children": [
						203,
						199,
						201
					]
				},
				{
					"title": "Methods",
					"kind": 2048,
					"children": [
						240,
						237,
						249,
						256,
						219,
						226,
						267,
						233,
						271,
						274,
						205,
						214,
						242,
						277,
						279
					]
				}
			],
			"sources": [
				{
					"fileName": "node_modules/board2d/dist/board/board.d.ts",
					"line": 98,
					"character": 26
				}
			],
			"implementedTypes": [
				{
					"type": "reference",
					"id": 64,
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
			"id": 124,
			"name": "BoardCore",
			"kind": 128,
			"kindString": "Class",
			"flags": {
				"isExported": true,
				"isExternal": true
			},
			"typeParameter": [
				{
					"id": 125,
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
					"id": 130,
					"name": "constructor",
					"kind": 512,
					"kindString": "Constructor",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"comment": {
						"shortText": "Create with board size."
					},
					"signatures": [
						{
							"id": 131,
							"name": "new BoardCore",
							"kind": 16384,
							"kindString": "Constructor signature",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": "Create with board size."
							},
							"parameters": [
								{
									"id": 132,
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
									"id": 133,
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
								"id": 124,
								"name": "BoardCore"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 68,
							"character": 36
						}
					]
				},
				{
					"id": 129,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 68,
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
					"id": 127,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 66,
							"character": 18
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "number"
					},
					"implementationOf": {
						"type": "reference",
						"id": 66,
						"name": "BoardReadable.xSize"
					}
				},
				{
					"id": 128,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 67,
							"character": 18
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "number"
					},
					"implementationOf": {
						"type": "reference",
						"id": 67,
						"name": "BoardReadable.ySize"
					}
				},
				{
					"id": 190,
					"name": "copy",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 191,
							"name": "copy",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"type": {
								"type": "reference",
								"id": 124,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 93,
							"character": 8
						}
					]
				},
				{
					"id": 152,
					"name": "exists",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 153,
							"name": "exists",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 154,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 1,
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
								"id": 87,
								"name": "BoardReadable.exists"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 81,
							"character": 10
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 86,
						"name": "BoardReadable.exists"
					}
				},
				{
					"id": 162,
					"name": "find",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 163,
							"name": "find",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 164,
									"name": "check",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reflection",
										"declaration": {
											"id": 165,
											"name": "__type",
											"kind": 65536,
											"kindString": "Type literal",
											"flags": {
												"isExported": true
											},
											"signatures": [
												{
													"id": 166,
													"name": "__call",
													"kind": 4096,
													"kindString": "Call signature",
													"flags": {
														"isExported": true
													},
													"parameters": [
														{
															"id": 167,
															"name": "pos",
															"kind": 32768,
															"kindString": "Parameter",
															"flags": {
																"isExported": true
															},
															"type": {
																"type": "reference",
																"id": 4,
																"name": "Pos"
															}
														},
														{
															"id": 168,
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
													"fileName": "node_modules/board2d/dist/board/board.d.ts",
													"line": 83,
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
										"id": 368,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 83,
							"character": 8
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 96,
						"name": "BoardReadable.find"
					}
				},
				{
					"id": 169,
					"name": "findAll",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 170,
							"name": "findAll",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 171,
									"name": "check",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reflection",
										"declaration": {
											"id": 172,
											"name": "__type",
											"kind": 65536,
											"kindString": "Type literal",
											"flags": {
												"isExported": true
											},
											"signatures": [
												{
													"id": 173,
													"name": "__call",
													"kind": 4096,
													"kindString": "Call signature",
													"flags": {
														"isExported": true
													},
													"parameters": [
														{
															"id": 174,
															"name": "pos",
															"kind": 32768,
															"kindString": "Parameter",
															"flags": {
																"isExported": true
															},
															"type": {
																"type": "reference",
																"id": 4,
																"name": "Pos"
															}
														},
														{
															"id": 175,
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
													"fileName": "node_modules/board2d/dist/board/board.d.ts",
													"line": 84,
													"character": 18
												}
											]
										}
									}
								}
							],
							"type": {
								"type": "array",
								"elementType": {
									"type": "reference",
									"id": 368,
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
								}
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 84,
							"character": 11
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 103,
						"name": "BoardReadable.findAll"
					}
				},
				{
					"id": 134,
					"name": "forEach",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 135,
							"name": "forEach",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 136,
									"name": "callback",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reflection",
										"declaration": {
											"id": 137,
											"name": "__type",
											"kind": 65536,
											"kindString": "Type literal",
											"flags": {
												"isExported": true
											},
											"signatures": [
												{
													"id": 138,
													"name": "__call",
													"kind": 4096,
													"kindString": "Call signature",
													"flags": {
														"isExported": true
													},
													"parameters": [
														{
															"id": 139,
															"name": "pos",
															"kind": 32768,
															"kindString": "Parameter",
															"flags": {
																"isExported": true
															},
															"type": {
																"type": "reference",
																"id": 4,
																"name": "Pos"
															}
														},
														{
															"id": 140,
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
													"fileName": "node_modules/board2d/dist/board/board.d.ts",
													"line": 73,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 73,
							"character": 11
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 68,
						"name": "BoardReadable.forEach"
					}
				},
				{
					"id": 141,
					"name": "getValue",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 142,
							"name": "getValue",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 143,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 1,
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
								"id": 76,
								"name": "BoardReadable.getValue"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 74,
							"character": 12
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 75,
						"name": "BoardReadable.getValue"
					}
				},
				{
					"id": 180,
					"name": "getValueWithDirection",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 181,
							"name": "getValueWithDirection",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 182,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 1,
										"name": "PosReadable"
									}
								},
								{
									"id": 183,
									"name": "direction",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 47,
										"name": "Direction"
									}
								}
							],
							"type": {
								"type": "union",
								"types": [
									{
										"type": "reference",
										"id": 368,
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
								"id": 115,
								"name": "BoardReadable.getValueWithDirection"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 90,
							"character": 25
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 114,
						"name": "BoardReadable.getValueWithDirection"
					}
				},
				{
					"id": 148,
					"name": "getValueWithXY",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 149,
							"name": "getValueWithXY",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 150,
									"name": "x",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 57,
										"name": "X"
									}
								},
								{
									"id": 151,
									"name": "y",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 61,
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
								"id": 83,
								"name": "BoardReadable.getValueWithXY"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 80,
							"character": 18
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 82,
						"name": "BoardReadable.getValueWithXY"
					}
				},
				{
					"id": 184,
					"name": "indexToPos",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 185,
							"name": "indexToPos",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 186,
									"name": "index",
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
								"id": 4,
								"name": "Pos"
							},
							"implementationOf": {
								"type": "reference",
								"id": 119,
								"name": "BoardReadable.indexToPos"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 91,
							"character": 14
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 118,
						"name": "BoardReadable.indexToPos"
					}
				},
				{
					"id": 187,
					"name": "posToIndex",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 188,
							"name": "posToIndex",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 189,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 1,
										"name": "PosReadable"
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "number"
							},
							"implementationOf": {
								"type": "reference",
								"id": 122,
								"name": "BoardReadable.posToIndex"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 92,
							"character": 14
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 121,
						"name": "BoardReadable.posToIndex"
					}
				},
				{
					"id": 155,
					"name": "some",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 156,
							"name": "some",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 157,
									"name": "check",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reflection",
										"declaration": {
											"id": 158,
											"name": "__type",
											"kind": 65536,
											"kindString": "Type literal",
											"flags": {
												"isExported": true
											},
											"signatures": [
												{
													"id": 159,
													"name": "__call",
													"kind": 4096,
													"kindString": "Call signature",
													"flags": {
														"isExported": true
													},
													"parameters": [
														{
															"id": 160,
															"name": "pos",
															"kind": 32768,
															"kindString": "Parameter",
															"flags": {
																"isExported": true
															},
															"type": {
																"type": "reference",
																"id": 4,
																"name": "Pos"
															}
														},
														{
															"id": 161,
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
													"fileName": "node_modules/board2d/dist/board/board.d.ts",
													"line": 82,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 82,
							"character": 8
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 89,
						"name": "BoardReadable.some"
					}
				}
			],
			"groups": [
				{
					"title": "Constructors",
					"kind": 512,
					"children": [
						130
					]
				},
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						129,
						127,
						128
					]
				},
				{
					"title": "Methods",
					"kind": 2048,
					"children": [
						190,
						152,
						162,
						169,
						134,
						141,
						180,
						148,
						184,
						187,
						155
					]
				}
			],
			"sources": [
				{
					"fileName": "node_modules/board2d/dist/board/board.d.ts",
					"line": 64,
					"character": 30
				}
			],
			"implementedTypes": [
				{
					"type": "reference",
					"id": 64,
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
			"id": 284,
			"name": "BoardMutable",
			"kind": 128,
			"kindString": "Class",
			"flags": {
				"isExported": true,
				"isExternal": true
			},
			"comment": {
				"shortText": "Use of Board class is recommended, but it is used when the processing speed and memory usage efficiency are required."
			},
			"typeParameter": [
				{
					"id": 285,
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
					"id": 287,
					"name": "constructor",
					"kind": 512,
					"kindString": "Constructor",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 288,
							"name": "new BoardMutable",
							"kind": 16384,
							"kindString": "Constructor signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 289,
									"name": "boardCore",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 124,
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
									"id": 290,
									"name": "skipCopy",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true,
										"isOptional": true
									},
									"type": {
										"type": "reference",
										"id": 365,
										"name": "SkipCopy"
									}
								}
							],
							"type": {
								"type": "reference",
								"id": 284,
								"name": "BoardMutable"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 147,
							"character": 28
						}
					]
				},
				{
					"id": 286,
					"name": "boardCore",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 147,
							"character": 13
						}
					],
					"type": {
						"type": "reference",
						"id": 124,
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
					"id": 291,
					"name": "xSize",
					"kind": 262144,
					"kindString": "Accessor",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"getSignature": [
						{
							"id": 292,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 149,
							"character": 13
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 66,
						"name": "BoardReadable.xSize"
					}
				},
				{
					"id": 293,
					"name": "ySize",
					"kind": 262144,
					"kindString": "Accessor",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"getSignature": [
						{
							"id": 294,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 150,
							"character": 13
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 67,
						"name": "BoardReadable.ySize"
					}
				},
				{
					"id": 320,
					"name": "copy",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 321,
							"name": "copy",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"type": {
								"type": "reference",
								"id": 192,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 164,
							"character": 8
						}
					]
				},
				{
					"id": 317,
					"name": "exists",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 318,
							"name": "exists",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 319,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 1,
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
								"id": 87,
								"name": "BoardReadable.exists"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 163,
							"character": 10
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 86,
						"name": "BoardReadable.exists"
					}
				},
				{
					"id": 329,
					"name": "find",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 330,
							"name": "find",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 331,
									"name": "check",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
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
															"name": "pos",
															"kind": 32768,
															"kindString": "Parameter",
															"flags": {
																"isExported": true
															},
															"type": {
																"type": "reference",
																"id": 4,
																"name": "Pos"
															}
														},
														{
															"id": 335,
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
													"fileName": "node_modules/board2d/dist/board/board.d.ts",
													"line": 166,
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
										"id": 368,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 166,
							"character": 8
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 96,
						"name": "BoardReadable.find"
					}
				},
				{
					"id": 336,
					"name": "findAll",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 337,
							"name": "findAll",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 338,
									"name": "check",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reflection",
										"declaration": {
											"id": 339,
											"name": "__type",
											"kind": 65536,
											"kindString": "Type literal",
											"flags": {
												"isExported": true
											},
											"signatures": [
												{
													"id": 340,
													"name": "__call",
													"kind": 4096,
													"kindString": "Call signature",
													"flags": {
														"isExported": true
													},
													"parameters": [
														{
															"id": 341,
															"name": "pos",
															"kind": 32768,
															"kindString": "Parameter",
															"flags": {
																"isExported": true
															},
															"type": {
																"type": "reference",
																"id": 4,
																"name": "Pos"
															}
														},
														{
															"id": 342,
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
													"fileName": "node_modules/board2d/dist/board/board.d.ts",
													"line": 167,
													"character": 18
												}
											]
										}
									}
								}
							],
							"type": {
								"type": "array",
								"elementType": {
									"type": "reference",
									"id": 368,
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
								}
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 167,
							"character": 11
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 103,
						"name": "BoardReadable.findAll"
					}
				},
				{
					"id": 299,
					"name": "forEach",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 300,
							"name": "forEach",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 301,
									"name": "callback",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reflection",
										"declaration": {
											"id": 302,
											"name": "__type",
											"kind": 65536,
											"kindString": "Type literal",
											"flags": {
												"isExported": true
											},
											"signatures": [
												{
													"id": 303,
													"name": "__call",
													"kind": 4096,
													"kindString": "Call signature",
													"flags": {
														"isExported": true
													},
													"parameters": [
														{
															"id": 304,
															"name": "pos",
															"kind": 32768,
															"kindString": "Parameter",
															"flags": {
																"isExported": true
															},
															"type": {
																"type": "reference",
																"id": 4,
																"name": "Pos"
															}
														},
														{
															"id": 305,
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
													"fileName": "node_modules/board2d/dist/board/board.d.ts",
													"line": 155,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 155,
							"character": 11
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 68,
						"name": "BoardReadable.forEach"
					}
				},
				{
					"id": 306,
					"name": "getValue",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 307,
							"name": "getValue",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 308,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 1,
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
								"id": 76,
								"name": "BoardReadable.getValue"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 156,
							"character": 12
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 75,
						"name": "BoardReadable.getValue"
					}
				},
				{
					"id": 347,
					"name": "getValueWithDirection",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 348,
							"name": "getValueWithDirection",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 349,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 1,
										"name": "PosReadable"
									}
								},
								{
									"id": 350,
									"name": "direction",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 47,
										"name": "Direction"
									}
								}
							],
							"type": {
								"type": "union",
								"types": [
									{
										"type": "reference",
										"id": 368,
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
								"id": 115,
								"name": "BoardReadable.getValueWithDirection"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 173,
							"character": 25
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 114,
						"name": "BoardReadable.getValueWithDirection"
					}
				},
				{
					"id": 313,
					"name": "getValueWithXY",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 314,
							"name": "getValueWithXY",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 315,
									"name": "x",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 57,
										"name": "X"
									}
								},
								{
									"id": 316,
									"name": "y",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 61,
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
								"id": 83,
								"name": "BoardReadable.getValueWithXY"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 162,
							"character": 18
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 82,
						"name": "BoardReadable.getValueWithXY"
					}
				},
				{
					"id": 351,
					"name": "indexToPos",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 352,
							"name": "indexToPos",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 353,
									"name": "index",
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
								"id": 4,
								"name": "Pos"
							},
							"implementationOf": {
								"type": "reference",
								"id": 119,
								"name": "BoardReadable.indexToPos"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 174,
							"character": 14
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 118,
						"name": "BoardReadable.indexToPos"
					}
				},
				{
					"id": 354,
					"name": "posToIndex",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 355,
							"name": "posToIndex",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 356,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 1,
										"name": "PosReadable"
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "number"
							},
							"implementationOf": {
								"type": "reference",
								"id": 122,
								"name": "BoardReadable.posToIndex"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 175,
							"character": 14
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 121,
						"name": "BoardReadable.posToIndex"
					}
				},
				{
					"id": 295,
					"name": "put",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 296,
							"name": "put",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": "Put pieces on the board (mutable)"
							},
							"parameters": [
								{
									"id": 297,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 1,
										"name": "PosReadable"
									}
								},
								{
									"id": 298,
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
								"type": "reference",
								"id": 284,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 154,
							"character": 7
						}
					]
				},
				{
					"id": 322,
					"name": "some",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 323,
							"name": "some",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 324,
									"name": "check",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reflection",
										"declaration": {
											"id": 325,
											"name": "__type",
											"kind": 65536,
											"kindString": "Type literal",
											"flags": {
												"isExported": true
											},
											"signatures": [
												{
													"id": 326,
													"name": "__call",
													"kind": 4096,
													"kindString": "Call signature",
													"flags": {
														"isExported": true
													},
													"parameters": [
														{
															"id": 327,
															"name": "pos",
															"kind": 32768,
															"kindString": "Parameter",
															"flags": {
																"isExported": true
															},
															"type": {
																"type": "reference",
																"id": 4,
																"name": "Pos"
															}
														},
														{
															"id": 328,
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
													"fileName": "node_modules/board2d/dist/board/board.d.ts",
													"line": 165,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 165,
							"character": 8
						}
					],
					"implementationOf": {
						"type": "reference",
						"id": 89,
						"name": "BoardReadable.some"
					}
				},
				{
					"id": 362,
					"name": "toImmutable",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 363,
							"name": "toImmutable",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"type": {
								"type": "reference",
								"id": 192,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 177,
							"character": 15
						}
					]
				},
				{
					"id": 357,
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
							"id": 358,
							"name": "empty",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"typeParameter": [
								{
									"id": 359,
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
									"id": 360,
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
									"id": 361,
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
								"id": 284,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 176,
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
						287
					]
				},
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						286
					]
				},
				{
					"title": "Accessors",
					"kind": 262144,
					"children": [
						291,
						293
					]
				},
				{
					"title": "Methods",
					"kind": 2048,
					"children": [
						320,
						317,
						329,
						336,
						299,
						306,
						347,
						313,
						351,
						354,
						295,
						322,
						362,
						357
					]
				}
			],
			"sources": [
				{
					"fileName": "node_modules/board2d/dist/board/board.d.ts",
					"line": 146,
					"character": 33
				}
			],
			"implementedTypes": [
				{
					"type": "reference",
					"id": 64,
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
			"id": 435,
			"name": "Event",
			"kind": 128,
			"kindString": "Class",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 436,
					"name": "constructor",
					"kind": 512,
					"kindString": "Constructor",
					"flags": {
						"isExported": true
					},
					"signatures": [
						{
							"id": 439,
							"name": "new Event",
							"kind": 16384,
							"kindString": "Constructor signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 440,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 4,
										"name": "Pos"
									}
								},
								{
									"id": 441,
									"name": "disk",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 432,
										"name": "Disk"
									}
								}
							],
							"type": {
								"type": "reference",
								"id": 435,
								"name": "Event"
							}
						}
					],
					"sources": [
						{
							"fileName": "src/index.ts",
							"line": 197,
							"character": 13
						}
					]
				},
				{
					"id": 438,
					"name": "disk",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isConstructorProperty": true,
						"isReadonly": true
					},
					"sources": [
						{
							"fileName": "src/index.ts",
							"line": 198,
							"character": 54
						}
					],
					"type": {
						"type": "reference",
						"id": 432,
						"name": "Disk"
					}
				},
				{
					"id": 437,
					"name": "pos",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isConstructorProperty": true,
						"isReadonly": true
					},
					"sources": [
						{
							"fileName": "src/index.ts",
							"line": 198,
							"character": 26
						}
					],
					"type": {
						"type": "reference",
						"id": 4,
						"name": "Pos"
					}
				}
			],
			"groups": [
				{
					"title": "Constructors",
					"kind": 512,
					"children": [
						436
					]
				},
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						438,
						437
					]
				}
			],
			"sources": [
				{
					"fileName": "src/index.ts",
					"line": 197,
					"character": 11
				}
			]
		},
		{
			"id": 374,
			"name": "Game",
			"kind": 128,
			"kindString": "Class",
			"flags": {
				"isExported": true
			},
			"comment": {
				"shortText": "Reversi game class",
				"text": "entry point\n"
			},
			"children": [
				{
					"id": 375,
					"name": "constructor",
					"kind": 512,
					"kindString": "Constructor",
					"flags": {
						"isExported": true
					},
					"comment": {
						"shortText": "Use `Game.init ()` instead of the constructor to start the game."
					},
					"signatures": [
						{
							"id": 380,
							"name": "new Game",
							"kind": 16384,
							"kindString": "Constructor signature",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": "Use `Game.init ()` instead of the constructor to start the game."
							},
							"parameters": [
								{
									"id": 381,
									"name": "turn",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"comment": {},
									"type": {
										"type": "reference",
										"id": 432,
										"name": "Disk"
									}
								},
								{
									"id": 382,
									"name": "board",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"comment": {},
									"type": {
										"type": "reference",
										"id": 192,
										"typeArguments": [
											{
												"type": "reference",
												"id": 432,
												"name": "Disk"
											}
										],
										"name": "Board"
									}
								},
								{
									"id": 383,
									"name": "winner",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"comment": {
										"shortText": "null if no win or loss has been decide"
									},
									"type": {
										"type": "union",
										"types": [
											{
												"type": "reference",
												"id": 432,
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
									"id": 384,
									"name": "_eventList",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"comment": {
										"shortText": "history\n"
									},
									"type": {
										"type": "array",
										"elementType": {
											"type": "reference",
											"id": 435,
											"name": "Event"
										}
									},
									"defaultValue": "[]"
								}
							],
							"type": {
								"type": "reference",
								"id": 374,
								"name": "Game"
							}
						}
					],
					"sources": [
						{
							"fileName": "src/index.ts",
							"line": 17,
							"character": 19
						}
					]
				},
				{
					"id": 377,
					"name": "board",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isConstructorProperty": true,
						"isReadonly": true
					},
					"sources": [
						{
							"fileName": "src/index.ts",
							"line": 29,
							"character": 18
						}
					],
					"type": {
						"type": "reference",
						"id": 192,
						"typeArguments": [
							{
								"type": "reference",
								"id": 432,
								"name": "Disk"
							}
						],
						"name": "Board"
					}
				},
				{
					"id": 376,
					"name": "turn",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isConstructorProperty": true,
						"isReadonly": true
					},
					"sources": [
						{
							"fileName": "src/index.ts",
							"line": 28,
							"character": 17
						}
					],
					"type": {
						"type": "reference",
						"id": 432,
						"name": "Disk"
					}
				},
				{
					"id": 378,
					"name": "winner",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isConstructorProperty": true,
						"isReadonly": true
					},
					"comment": {
						"shortText": "null if no win or loss has been decide"
					},
					"sources": [
						{
							"fileName": "src/index.ts",
							"line": 30,
							"character": 19
						}
					],
					"type": {
						"type": "union",
						"types": [
							{
								"type": "reference",
								"id": 432,
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
					"id": 389,
					"name": "isGameOver",
					"kind": 262144,
					"kindString": "Accessor",
					"flags": {
						"isExported": true
					},
					"comment": {
						"shortText": "Whether the win or loss has been decided"
					},
					"getSignature": [
						{
							"id": 390,
							"name": "__get",
							"kind": 524288,
							"kindString": "Get signature",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": "Whether the win or loss has been decided"
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
							"line": 67,
							"character": 16
						}
					]
				},
				{
					"id": 387,
					"name": "score",
					"kind": 262144,
					"kindString": "Accessor",
					"flags": {
						"isExported": true
					},
					"getSignature": [
						{
							"id": 388,
							"name": "__get",
							"kind": 524288,
							"kindString": "Get signature",
							"flags": {
								"isExported": true
							},
							"type": {
								"type": "reference",
								"id": 442,
								"name": "Score"
							}
						}
					],
					"sources": [
						{
							"fileName": "src/index.ts",
							"line": 50,
							"character": 11
						}
					]
				},
				{
					"id": 391,
					"name": "getTunableDiskPosList",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true
					},
					"signatures": [
						{
							"id": 392,
							"name": "getTunableDiskPosList",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 393,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 1,
										"name": "PosReadable"
									}
								},
								{
									"id": 394,
									"name": "disk",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 432,
										"name": "Disk"
									}
								}
							],
							"type": {
								"type": "array",
								"elementType": {
									"type": "reference",
									"id": 4,
									"name": "Pos"
								}
							}
						}
					],
					"sources": [
						{
							"fileName": "src/index.ts",
							"line": 71,
							"character": 23
						}
					]
				},
				{
					"id": 395,
					"name": "getTunableDiskPosListFromXY",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true
					},
					"signatures": [
						{
							"id": 396,
							"name": "getTunableDiskPosListFromXY",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 397,
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
									"id": 398,
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
									"id": 399,
									"name": "disk",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 432,
										"name": "Disk"
									}
								}
							],
							"type": {
								"type": "array",
								"elementType": {
									"type": "reference",
									"id": 4,
									"name": "Pos"
								}
							}
						}
					],
					"sources": [
						{
							"fileName": "src/index.ts",
							"line": 101,
							"character": 29
						}
					]
				},
				{
					"id": 416,
					"name": "hasTurnableDiskPos",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true
					},
					"signatures": [
						{
							"id": 417,
							"name": "hasTurnableDiskPos",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": "Is there a place to put the disk?"
							},
							"parameters": [
								{
									"id": 418,
									"name": "disk",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 432,
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
							"line": 168,
							"character": 20
						}
					]
				},
				{
					"id": 400,
					"name": "isPlaced",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true
					},
					"signatures": [
						{
							"id": 401,
							"name": "isPlaced",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": "Whether the disk is placed in the passed position"
							},
							"parameters": [
								{
									"id": 402,
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
										"id": 1,
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
							"fileName": "src/index.ts",
							"line": 109,
							"character": 10
						}
					]
				},
				{
					"id": 403,
					"name": "isPlacedFromXY",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true
					},
					"signatures": [
						{
							"id": 404,
							"name": "isPlacedFromXY",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": "Whether the disk is placed in the passed position"
							},
							"parameters": [
								{
									"id": 405,
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
									"id": 406,
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
							"line": 118,
							"character": 16
						}
					]
				},
				{
					"id": 407,
					"name": "placeDisk",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true
					},
					"signatures": [
						{
							"id": 408,
							"name": "placeDisk",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": "Place a disk",
								"text": "The result is returned in callback.\nConditions that cause an error in callback\n- The type of disk and the turn do not match\n- The position where the disk cannot be placed is specified"
							},
							"parameters": [
								{
									"id": 409,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"comment": {},
									"type": {
										"type": "reference",
										"id": 4,
										"name": "Pos"
									}
								},
								{
									"id": 410,
									"name": "disk",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"comment": {},
									"type": {
										"type": "reference",
										"id": 432,
										"name": "Disk"
									}
								},
								{
									"id": 411,
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
											"id": 412,
											"name": "__type",
											"kind": 65536,
											"kindString": "Type literal",
											"flags": {
												"isExported": true
											},
											"signatures": [
												{
													"id": 413,
													"name": "__call",
													"kind": 4096,
													"kindString": "Call signature",
													"flags": {
														"isExported": true
													},
													"parameters": [
														{
															"id": 414,
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
																		"type": "reference",
																		"name": "Error"
																	},
																	{
																		"type": "intrinsic",
																		"name": "null"
																	}
																]
															}
														},
														{
															"id": 415,
															"name": "game",
															"kind": 32768,
															"kindString": "Parameter",
															"flags": {
																"isExported": true,
																"isOptional": true
															},
															"type": {
																"type": "reference",
																"id": 374,
																"name": "Game"
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
													"line": 133,
													"character": 51
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
							"fileName": "src/index.ts",
							"line": 133,
							"character": 11
						}
					]
				},
				{
					"id": 419,
					"name": "placeDiskFromXY",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true
					},
					"signatures": [
						{
							"id": 420,
							"name": "placeDiskFromXY",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": "Place a disk with x and y"
							},
							"parameters": [
								{
									"id": 421,
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
									"id": 422,
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
									"id": 423,
									"name": "disk",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"comment": {},
									"type": {
										"type": "reference",
										"id": 432,
										"name": "Disk"
									}
								},
								{
									"id": 424,
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
											"id": 425,
											"name": "__type",
											"kind": 65536,
											"kindString": "Type literal",
											"flags": {
												"isExported": true
											},
											"signatures": [
												{
													"id": 426,
													"name": "__call",
													"kind": 4096,
													"kindString": "Call signature",
													"flags": {
														"isExported": true
													},
													"parameters": [
														{
															"id": 427,
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
																		"type": "reference",
																		"name": "Error"
																	},
																	{
																		"type": "intrinsic",
																		"name": "null"
																	}
																]
															}
														},
														{
															"id": 428,
															"name": "game",
															"kind": 32768,
															"kindString": "Parameter",
															"flags": {
																"isExported": true,
																"isOptional": true
															},
															"type": {
																"type": "reference",
																"id": 374,
																"name": "Game"
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
													"line": 179,
													"character": 67
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
							"fileName": "src/index.ts",
							"line": 179,
							"character": 17
						}
					]
				},
				{
					"id": 429,
					"name": "boardToString",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isStatic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 430,
							"name": "boardToString",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": "Convert board to string (for debugging)"
							},
							"parameters": [
								{
									"id": 431,
									"name": "board",
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
										"id": 192,
										"typeArguments": [
											{
												"type": "reference",
												"id": 432,
												"name": "Disk"
											}
										],
										"name": "Board"
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "string"
							}
						}
					],
					"sources": [
						{
							"fileName": "src/index.ts",
							"line": 187,
							"character": 22
						}
					]
				},
				{
					"id": 385,
					"name": "init",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isStatic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 386,
							"name": "init",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": "Start the game"
							},
							"type": {
								"type": "reference",
								"id": 374,
								"name": "Game"
							}
						}
					],
					"sources": [
						{
							"fileName": "src/index.ts",
							"line": 37,
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
						375
					]
				},
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						377,
						376,
						378
					]
				},
				{
					"title": "Accessors",
					"kind": 262144,
					"children": [
						389,
						387
					]
				},
				{
					"title": "Methods",
					"kind": 2048,
					"children": [
						391,
						395,
						416,
						400,
						403,
						407,
						419,
						429,
						385
					]
				}
			],
			"sources": [
				{
					"fileName": "src/index.ts",
					"line": 17,
					"character": 17
				}
			]
		},
		{
			"id": 4,
			"name": "Pos",
			"kind": 128,
			"kindString": "Class",
			"flags": {
				"isExported": true,
				"isExternal": true
			},
			"comment": {
				"shortText": "Position on the board (immutable)"
			},
			"children": [
				{
					"id": 7,
					"name": "constructor",
					"kind": 512,
					"kindString": "Constructor",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 8,
							"name": "new Pos",
							"kind": 16384,
							"kindString": "Constructor signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 9,
									"name": "x",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 57,
										"name": "X"
									}
								},
								{
									"id": 10,
									"name": "y",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 61,
										"name": "Y"
									}
								}
							],
							"type": {
								"type": "reference",
								"id": 4,
								"name": "Pos"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 33,
							"character": 18
						}
					]
				},
				{
					"id": 5,
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
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 32,
							"character": 14
						}
					],
					"type": {
						"type": "reference",
						"id": 57,
						"name": "X"
					},
					"implementationOf": {
						"type": "reference",
						"id": 2,
						"name": "PosReadable.x"
					}
				},
				{
					"id": 6,
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
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 33,
							"character": 14
						}
					],
					"type": {
						"type": "reference",
						"id": 61,
						"name": "Y"
					},
					"implementationOf": {
						"type": "reference",
						"id": 3,
						"name": "PosReadable.y"
					}
				},
				{
					"id": 11,
					"name": "add",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 12,
							"name": "add",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 13,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 1,
										"name": "PosReadable"
									}
								}
							],
							"type": {
								"type": "reference",
								"id": 4,
								"name": "Pos"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 35,
							"character": 7
						}
					]
				},
				{
					"id": 18,
					"name": "addDirection",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 19,
							"name": "addDirection",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": " Get the position moved one step in the specified direction",
								"text": "If you are currently at (x, y) = (0, 0):\nup    is  ( 0, -1)\ndown  is  ( 0,  1)\nright is  ( 1,  0)\nleft  is  (-1,  0)"
							},
							"parameters": [
								{
									"id": 20,
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
										"id": 47,
										"name": "Direction"
									}
								}
							],
							"type": {
								"type": "reference",
								"id": 4,
								"name": "Pos"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 47,
							"character": 16
						}
					]
				},
				{
					"id": 14,
					"name": "addXY",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 15,
							"name": "addXY",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 16,
									"name": "x",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 57,
										"name": "X"
									}
								},
								{
									"id": 17,
									"name": "y",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 61,
										"name": "Y"
									}
								}
							],
							"type": {
								"type": "reference",
								"id": 4,
								"name": "Pos"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 36,
							"character": 9
						}
					]
				},
				{
					"id": 24,
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
							"id": 25,
							"name": "createFromDirection",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 26,
									"name": "direction",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 47,
										"name": "Direction"
									}
								}
							],
							"type": {
								"type": "reference",
								"id": 4,
								"name": "Pos"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 49,
							"character": 30
						}
					]
				},
				{
					"id": 21,
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
							"id": 22,
							"name": "createFromPos",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 23,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 1,
										"name": "PosReadable"
									}
								}
							],
							"type": {
								"type": "reference",
								"id": 4,
								"name": "Pos"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 48,
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
						7
					]
				},
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						5,
						6
					]
				},
				{
					"title": "Methods",
					"kind": 2048,
					"children": [
						11,
						18,
						14,
						24,
						21
					]
				}
			],
			"sources": [
				{
					"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
					"line": 31,
					"character": 24
				}
			],
			"implementedTypes": [
				{
					"type": "reference",
					"id": 1,
					"name": "PosReadable"
				}
			]
		},
		{
			"id": 27,
			"name": "PosMutable",
			"kind": 128,
			"kindString": "Class",
			"flags": {
				"isExported": true,
				"isExternal": true
			},
			"comment": {
				"shortText": "Position on the board (mutable)",
				"text": "Use of pos class is recommended, but it is used when the processing speed and memory usage efficiency are required.\n"
			},
			"children": [
				{
					"id": 30,
					"name": "constructor",
					"kind": 512,
					"kindString": "Constructor",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 31,
							"name": "new PosMutable",
							"kind": 16384,
							"kindString": "Constructor signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 32,
									"name": "x",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 57,
										"name": "X"
									}
								},
								{
									"id": 33,
									"name": "y",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 61,
										"name": "Y"
									}
								}
							],
							"type": {
								"type": "reference",
								"id": 27,
								"name": "PosMutable"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 58,
							"character": 9
						}
					]
				},
				{
					"id": 28,
					"name": "x",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 57,
							"character": 5
						}
					],
					"type": {
						"type": "reference",
						"id": 57,
						"name": "X"
					},
					"implementationOf": {
						"type": "reference",
						"id": 2,
						"name": "PosReadable.x"
					}
				},
				{
					"id": 29,
					"name": "y",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 58,
							"character": 5
						}
					],
					"type": {
						"type": "reference",
						"id": 61,
						"name": "Y"
					},
					"implementationOf": {
						"type": "reference",
						"id": 3,
						"name": "PosReadable.y"
					}
				},
				{
					"id": 34,
					"name": "add",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 35,
							"name": "add",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 36,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 1,
										"name": "PosReadable"
									}
								}
							],
							"type": {
								"type": "reference",
								"id": 27,
								"name": "PosMutable"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 60,
							"character": 7
						}
					]
				},
				{
					"id": 41,
					"name": "addDirection",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 42,
							"name": "addDirection",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 43,
									"name": "direction",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 47,
										"name": "Direction"
									}
								}
							],
							"type": {
								"type": "reference",
								"id": 27,
								"name": "PosMutable"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 62,
							"character": 16
						}
					]
				},
				{
					"id": 37,
					"name": "addXY",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 38,
							"name": "addXY",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 39,
									"name": "x",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 57,
										"name": "X"
									}
								},
								{
									"id": 40,
									"name": "y",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 61,
										"name": "Y"
									}
								}
							],
							"type": {
								"type": "reference",
								"id": 27,
								"name": "PosMutable"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 61,
							"character": 9
						}
					]
				},
				{
					"id": 44,
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
							"id": 45,
							"name": "createFromPos",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 46,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 1,
										"name": "PosReadable"
									}
								}
							],
							"type": {
								"type": "reference",
								"id": 27,
								"name": "PosMutable"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 63,
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
						30
					]
				},
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						28,
						29
					]
				},
				{
					"title": "Methods",
					"kind": 2048,
					"children": [
						34,
						41,
						37,
						44
					]
				}
			],
			"sources": [
				{
					"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
					"line": 56,
					"character": 31
				}
			],
			"implementedTypes": [
				{
					"type": "reference",
					"id": 1,
					"name": "PosReadable"
				}
			]
		},
		{
			"id": 442,
			"name": "Score",
			"kind": 128,
			"kindString": "Class",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 443,
					"name": "constructor",
					"kind": 512,
					"kindString": "Constructor",
					"flags": {
						"isExported": true
					},
					"signatures": [
						{
							"id": 446,
							"name": "new Score",
							"kind": 16384,
							"kindString": "Constructor signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 447,
									"name": "lightCount",
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
									"id": 448,
									"name": "darkCount",
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
								"id": 442,
								"name": "Score"
							}
						}
					],
					"sources": [
						{
							"fileName": "src/index.ts",
							"line": 203,
							"character": 13
						}
					]
				},
				{
					"id": 445,
					"name": "darkCount",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isConstructorProperty": true,
						"isReadonly": true
					},
					"sources": [
						{
							"fileName": "src/index.ts",
							"line": 204,
							"character": 61
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "number"
					}
				},
				{
					"id": 444,
					"name": "lightCount",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isConstructorProperty": true,
						"isReadonly": true
					},
					"sources": [
						{
							"fileName": "src/index.ts",
							"line": 204,
							"character": 33
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "number"
					}
				},
				{
					"id": 452,
					"name": "winner",
					"kind": 262144,
					"kindString": "Accessor",
					"flags": {
						"isExported": true
					},
					"getSignature": [
						{
							"id": 453,
							"name": "__get",
							"kind": 524288,
							"kindString": "Get signature",
							"flags": {
								"isExported": true
							},
							"type": {
								"type": "union",
								"types": [
									{
										"type": "reference",
										"id": 432,
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
							"line": 211,
							"character": 12
						}
					]
				},
				{
					"id": 449,
					"name": "getDiskCount",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true
					},
					"signatures": [
						{
							"id": 450,
							"name": "getDiskCount",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 451,
									"name": "disk",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 432,
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
							"line": 207,
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
						443
					]
				},
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						445,
						444
					]
				},
				{
					"title": "Accessors",
					"kind": 262144,
					"children": [
						452
					]
				},
				{
					"title": "Methods",
					"kind": 2048,
					"children": [
						449
					]
				}
			],
			"sources": [
				{
					"fileName": "src/index.ts",
					"line": 203,
					"character": 11
				}
			]
		},
		{
			"id": 64,
			"name": "BoardReadable",
			"kind": 256,
			"kindString": "Interface",
			"flags": {
				"isExported": true,
				"isExternal": true
			},
			"typeParameter": [
				{
					"id": 65,
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
					"id": 66,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
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
					"id": 67,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 16,
							"character": 18
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "number"
					}
				},
				{
					"id": 86,
					"name": "exists",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 87,
							"name": "exists",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": "whether there is a piece at the specified position",
								"returns": "Returns true if there is a piece. Returns false if there is no a piece or the position is outside of the board."
							},
							"parameters": [
								{
									"id": 88,
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
										"id": 1,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 41,
							"character": 10
						}
					]
				},
				{
					"id": 96,
					"name": "find",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 97,
							"name": "find",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 98,
									"name": "check",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reflection",
										"declaration": {
											"id": 99,
											"name": "__type",
											"kind": 65536,
											"kindString": "Type literal",
											"flags": {
												"isExported": true
											},
											"signatures": [
												{
													"id": 100,
													"name": "__call",
													"kind": 4096,
													"kindString": "Call signature",
													"flags": {
														"isExported": true
													},
													"parameters": [
														{
															"id": 101,
															"name": "pos",
															"kind": 32768,
															"kindString": "Parameter",
															"flags": {
																"isExported": true
															},
															"type": {
																"type": "reference",
																"id": 4,
																"name": "Pos"
															}
														},
														{
															"id": 102,
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
													"fileName": "node_modules/board2d/dist/board/board.d.ts",
													"line": 47,
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
										"id": 368,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 47,
							"character": 8
						}
					]
				},
				{
					"id": 103,
					"name": "findAll",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 104,
							"name": "findAll",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 105,
									"name": "check",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reflection",
										"declaration": {
											"id": 106,
											"name": "__type",
											"kind": 65536,
											"kindString": "Type literal",
											"flags": {
												"isExported": true
											},
											"signatures": [
												{
													"id": 107,
													"name": "__call",
													"kind": 4096,
													"kindString": "Call signature",
													"flags": {
														"isExported": true
													},
													"parameters": [
														{
															"id": 108,
															"name": "pos",
															"kind": 32768,
															"kindString": "Parameter",
															"flags": {
																"isExported": true
															},
															"type": {
																"type": "reference",
																"id": 4,
																"name": "Pos"
															}
														},
														{
															"id": 109,
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
													"fileName": "node_modules/board2d/dist/board/board.d.ts",
													"line": 48,
													"character": 18
												}
											]
										}
									}
								}
							],
							"type": {
								"type": "array",
								"elementType": {
									"type": "reference",
									"id": 368,
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
								}
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 48,
							"character": 11
						}
					]
				},
				{
					"id": 68,
					"name": "forEach",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 69,
							"name": "forEach",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": "executes a provided function once for each positions on the board."
							},
							"parameters": [
								{
									"id": 70,
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
											"id": 71,
											"name": "__type",
											"kind": 65536,
											"kindString": "Type literal",
											"flags": {
												"isExported": true
											},
											"signatures": [
												{
													"id": 72,
													"name": "__call",
													"kind": 4096,
													"kindString": "Call signature",
													"flags": {
														"isExported": true
													},
													"parameters": [
														{
															"id": 73,
															"name": "pos",
															"kind": 32768,
															"kindString": "Parameter",
															"flags": {
																"isExported": true
															},
															"type": {
																"type": "reference",
																"id": 4,
																"name": "Pos"
															}
														},
														{
															"id": 74,
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
													"fileName": "node_modules/board2d/dist/board/board.d.ts",
													"line": 21,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 21,
							"character": 11
						}
					]
				},
				{
					"id": 75,
					"name": "getValue",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 76,
							"name": "getValue",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": "Get the piece at the specified position",
								"returns": "Returns null if the specified position is empty. Returns undefined if outside the board.\n"
							},
							"parameters": [
								{
									"id": 77,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"comment": {},
									"type": {
										"type": "reference",
										"id": 1,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 28,
							"character": 12
						}
					]
				},
				{
					"id": 114,
					"name": "getValueWithDirection",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 115,
							"name": "getValueWithDirection",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": "Get a piece that is one step ahead in the direction from position.",
								"returns": "Returns true if there is a piece. Returns false if there is no a piece or the position is outside of the board.\n"
							},
							"parameters": [
								{
									"id": 116,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"comment": {},
									"type": {
										"type": "reference",
										"id": 1,
										"name": "PosReadable"
									}
								},
								{
									"id": 117,
									"name": "direction",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"comment": {},
									"type": {
										"type": "reference",
										"id": 47,
										"name": "Direction"
									}
								}
							],
							"type": {
								"type": "union",
								"types": [
									{
										"type": "reference",
										"id": 368,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 60,
							"character": 25
						}
					]
				},
				{
					"id": 82,
					"name": "getValueWithXY",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 83,
							"name": "getValueWithXY",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 84,
									"name": "x",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 57,
										"name": "X"
									}
								},
								{
									"id": 85,
									"name": "y",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 61,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 34,
							"character": 18
						}
					]
				},
				{
					"id": 118,
					"name": "indexToPos",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 119,
							"name": "indexToPos",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 120,
									"name": "index",
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
								"id": 4,
								"name": "Pos"
							}
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 61,
							"character": 14
						}
					]
				},
				{
					"id": 121,
					"name": "posToIndex",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 122,
							"name": "posToIndex",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"parameters": [
								{
									"id": 123,
									"name": "pos",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isExported": true
									},
									"type": {
										"type": "reference",
										"id": 1,
										"name": "PosReadable"
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 62,
							"character": 14
						}
					]
				},
				{
					"id": 89,
					"name": "some",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true,
						"isExternal": true
					},
					"signatures": [
						{
							"id": 90,
							"name": "some",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": "Tests whether at least one piece in the board passes the test implemented by the provided check function. It returns a Boolean value."
							},
							"parameters": [
								{
									"id": 91,
									"name": "check",
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
											"id": 92,
											"name": "__type",
											"kind": 65536,
											"kindString": "Type literal",
											"flags": {
												"isExported": true
											},
											"signatures": [
												{
													"id": 93,
													"name": "__call",
													"kind": 4096,
													"kindString": "Call signature",
													"flags": {
														"isExported": true
													},
													"parameters": [
														{
															"id": 94,
															"name": "pos",
															"kind": 32768,
															"kindString": "Parameter",
															"flags": {
																"isExported": true
															},
															"type": {
																"type": "reference",
																"id": 4,
																"name": "Pos"
															}
														},
														{
															"id": 95,
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
													"fileName": "node_modules/board2d/dist/board/board.d.ts",
													"line": 46,
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
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 46,
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
						66,
						67
					]
				},
				{
					"title": "Methods",
					"kind": 2048,
					"children": [
						86,
						96,
						103,
						68,
						75,
						114,
						82,
						118,
						121,
						89
					]
				}
			],
			"sources": [
				{
					"fileName": "node_modules/board2d/dist/board/board.d.ts",
					"line": 14,
					"character": 30
				}
			],
			"implementedBy": [
				{
					"type": "reference",
					"id": 192,
					"name": "Board"
				},
				{
					"type": "reference",
					"id": 124,
					"name": "BoardCore"
				},
				{
					"type": "reference",
					"id": 284,
					"name": "BoardMutable"
				}
			]
		},
		{
			"id": 1,
			"name": "PosReadable",
			"kind": 256,
			"kindString": "Interface",
			"flags": {
				"isExported": true,
				"isExternal": true
			},
			"comment": {
				"shortText": "Position on the board"
			},
			"children": [
				{
					"id": 2,
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
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 25,
							"character": 14
						}
					],
					"type": {
						"type": "reference",
						"id": 57,
						"name": "X"
					}
				},
				{
					"id": 3,
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
							"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
							"line": 26,
							"character": 14
						}
					],
					"type": {
						"type": "reference",
						"id": 61,
						"name": "Y"
					}
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						2,
						3
					]
				}
			],
			"sources": [
				{
					"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
					"line": 24,
					"character": 28
				}
			],
			"implementedBy": [
				{
					"type": "reference",
					"id": 4,
					"name": "Pos"
				},
				{
					"type": "reference",
					"id": 27,
					"name": "PosMutable"
				}
			]
		},
		{
			"id": 365,
			"name": "SkipCopy",
			"kind": 4194304,
			"kindString": "Type alias",
			"flags": {
				"isExported": true,
				"isExternal": true
			},
			"comment": {
				"shortText": "Whether to omit the copy",
				"text": "Boolean type extension\n"
			},
			"sources": [
				{
					"fileName": "node_modules/board2d/dist/board/board.d.ts",
					"line": 11,
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
							"id": 366,
							"name": "__type",
							"kind": 65536,
							"kindString": "Type literal",
							"flags": {
								"isExported": true
							},
							"children": [
								{
									"id": 367,
									"name": "[SkipCopyNominality]",
									"kind": 32,
									"kindString": "Variable",
									"flags": {
										"isExported": true,
										"isExternal": true
									},
									"sources": [
										{
											"fileName": "node_modules/board2d/dist/board/board.d.ts",
											"line": 12,
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
										367
									]
								}
							],
							"sources": [
								{
									"fileName": "node_modules/board2d/dist/board/board.d.ts",
									"line": 11,
									"character": 40
								}
							]
						}
					}
				]
			}
		},
		{
			"id": 368,
			"name": "ValueAndPos",
			"kind": 4194304,
			"kindString": "Type alias",
			"flags": {
				"isExported": true,
				"isExternal": true
			},
			"typeParameter": [
				{
					"id": 369,
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
					"fileName": "node_modules/board2d/dist/board/board.d.ts",
					"line": 179,
					"character": 31
				}
			],
			"type": {
				"type": "reflection",
				"declaration": {
					"id": 370,
					"name": "__type",
					"kind": 65536,
					"kindString": "Type literal",
					"flags": {
						"isExported": true
					},
					"children": [
						{
							"id": 371,
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
									"fileName": "node_modules/board2d/dist/board/board.d.ts",
									"line": 180,
									"character": 16
								}
							],
							"type": {
								"type": "reference",
								"id": 4,
								"name": "Pos"
							}
						},
						{
							"id": 372,
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
									"fileName": "node_modules/board2d/dist/board/board.d.ts",
									"line": 181,
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
								371,
								372
							]
						}
					],
					"sources": [
						{
							"fileName": "node_modules/board2d/dist/board/board.d.ts",
							"line": 179,
							"character": 36
						}
					]
				}
			}
		},
		{
			"id": 57,
			"name": "X",
			"kind": 4194304,
			"kindString": "Type alias",
			"flags": {
				"isExported": true,
				"isExternal": true
			},
			"comment": {
				"shortText": "Number type extension"
			},
			"sources": [
				{
					"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
					"line": 8,
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
							"id": 58,
							"name": "__type",
							"kind": 65536,
							"kindString": "Type literal",
							"flags": {
								"isExported": true
							},
							"children": [
								{
									"id": 59,
									"name": "[XNominality]",
									"kind": 32,
									"kindString": "Variable",
									"flags": {
										"isExported": true,
										"isExternal": true
									},
									"sources": [
										{
											"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
											"line": 9,
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
										59
									]
								}
							],
							"sources": [
								{
									"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
									"line": 8,
									"character": 32
								}
							]
						}
					}
				]
			}
		},
		{
			"id": 61,
			"name": "Y",
			"kind": 4194304,
			"kindString": "Type alias",
			"flags": {
				"isExported": true,
				"isExternal": true
			},
			"comment": {
				"shortText": "Number type extension"
			},
			"sources": [
				{
					"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
					"line": 18,
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
							"id": 62,
							"name": "__type",
							"kind": 65536,
							"kindString": "Type literal",
							"flags": {
								"isExported": true
							},
							"children": [
								{
									"id": 63,
									"name": "[YNominality]",
									"kind": 32,
									"kindString": "Variable",
									"flags": {
										"isExported": true,
										"isExternal": true
									},
									"sources": [
										{
											"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
											"line": 19,
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
										63
									]
								}
							],
							"sources": [
								{
									"fileName": "node_modules/board2d/dist/pos/pos.d.ts",
									"line": 18,
									"character": 32
								}
							]
						}
					}
				]
			}
		},
		{
			"id": 373,
			"name": "version",
			"kind": 32,
			"kindString": "Variable",
			"flags": {
				"isExported": true,
				"isExternal": true,
				"isConst": true
			},
			"comment": {
				"shortText": "盤ライブラリ\nバージョン: 1.1.1"
			},
			"sources": [
				{
					"fileName": "node_modules/board2d/dist/index.d.ts",
					"line": 5,
					"character": 28
				}
			],
			"type": {
				"type": "stringLiteral",
				"value": "1.1.1"
			},
			"defaultValue": "\"1.1.1\""
		}
	],
	"groups": [
		{
			"title": "Enumerations",
			"kind": 4,
			"children": [
				47,
				432
			]
		},
		{
			"title": "Classes",
			"kind": 128,
			"children": [
				192,
				124,
				284,
				435,
				374,
				4,
				27,
				442
			]
		},
		{
			"title": "Interfaces",
			"kind": 256,
			"children": [
				64,
				1
			]
		},
		{
			"title": "Type aliases",
			"kind": 4194304,
			"children": [
				365,
				368,
				57,
				61
			]
		},
		{
			"title": "Variables",
			"kind": 32,
			"children": [
				373
			]
		}
	]
};