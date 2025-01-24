
                 
                        

                
                {data.assessment.type2 == "Matching" &&
                    data.assessment.matches.map((res, i) => {
                        return (
                            <div
                                key={i}
                                className="flex flex-col gap-4 w-full border-b pb-4"
                            >
                                <div className="flex items-center justify-between w-full">
                                    {i != 0 && (
                                        <div className="flex items-end justify-end">
                                            <Button
                                                variant="outlined"
                                                color="error"
                                                onClick={() =>
                                                    setData({
                                                        ...data,
                                                        assessment: {
                                                            ...data.assessment,
                                                            matches:
                                                                data.assessment.matches.filter(
                                                                    (
                                                                        _,
                                                                        index,
                                                                    ) =>
                                                                        index !==
                                                                        i,
                                                                ),
                                                        },
                                                    })
                                                }
                                            >
                                                Delete Fields
                                            </Button>
                                        </div>
                                    )}
                                </div>
                                <div className="flex gap-3 w-full">
                                    <TextField
                                        multiline
                                        rows={2}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                assessment: {
                                                    ...data.assessment,
                                                    matches:
                                                        data.assessment.matches.map(
                                                            (item, index) =>
                                                                index === i
                                                                    ? {
                                                                          ...item,
                                                                          column_a:
                                                                              e
                                                                                  .target
                                                                                  .value,
                                                                      }
                                                                    : item,
                                                        ),
                                                },
                                            })
                                        }
                                        error={!!error?.[`column_a-${i}`]}
                                        helperText={
                                            error?.[`column_a-${i}`] ?? ""
                                        }
                                        value={res.column_a}
                                        name={`column_a-${i}`}
                                        type="text"
                                        label={`Column A-${i + 1}`}
                                        variant="outlined"
                                        className="w-full"
                                    />

                                    <TextField
                                        multiline
                                        rows={2}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                assessment: {
                                                    ...data.assessment,
                                                    matches:
                                                        data.assessment.matches.map(
                                                            (item, index) =>
                                                                index === i
                                                                    ? {
                                                                          ...item,
                                                                          column_b:
                                                                              e
                                                                                  .target
                                                                                  .value,
                                                                      }
                                                                    : item,
                                                        ),
                                                },
                                            })
                                        }
                                        error={!!error?.[`column_b-${i}`]}
                                        helperText={
                                            error?.[`column_b-${i}`] ?? ""
                                        }
                                        value={res.column_b}
                                        name={`column_b-${i}`}
                                        type="text"
                                        label={`Column B-${i + 1}`}
                                        variant="outlined"
                                        className="w-full"
                                    />
                                    <TextField
                                        multiline
                                        rows={2}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                assessment: {
                                                    ...data.assessment,
                                                    matches:
                                                        data.assessment.matches.map(
                                                            (item, index) =>
                                                                index === i
                                                                    ? {
                                                                          ...item,
                                                                          answer_key:
                                                                              e
                                                                                  .target
                                                                                  .value,
                                                                      }
                                                                    : item,
                                                        ),
                                                },
                                            })
                                        }
                                        error={!!error?.[`answer_key-${i}`]}
                                        helperText={
                                            error?.[`answer_key-${i}`] ?? ""
                                        }
                                        value={res.answer_key}
                                        name={`answer_key-${i}`}
                                        type="text"
                                        label={`Answer Key-${i + 1}`}
                                        variant="outlined"
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        );
                    })}

                