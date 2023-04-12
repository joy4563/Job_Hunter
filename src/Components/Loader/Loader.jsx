const jobDesLoader = async() => {
    const loadedJob = await fetch('/job.json');
    const jobDes = await loadedJob.json();
    // console.log(jobDes);

    const fourData = [];
    for (let i = 0; i < 4; i++){
        fourData.push(jobDes[i]);
    }
    // console.log(fourData);

    return [jobDes,fourData];
}

export default jobDesLoader;